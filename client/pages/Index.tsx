import { useEffect, useMemo, useRef, useState } from "react";
import { PROMPT_CATEGORIES } from "@/data/prompts";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Download, FileDown, Shuffle, Maximize2, Minimize2, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { exportToMarkdown, exportToPdf } from "@/lib/export";
import { toast } from "sonner";

function useLocalStorage(key: string, initial: string) {
  const [value, setValue] = useState<string>(() => {
    try {
      const v = localStorage.getItem(key);
      return v ?? initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }, [key, value]);
  return [value, setValue] as const;
}

export default function Index() {
  const [categoryId, setCategoryId] = useState(PROMPT_CATEGORIES[0].id);
  const category = useMemo(() => PROMPT_CATEGORIES.find((c) => c.id === categoryId)!, [categoryId]);
  const [promptId, setPromptId] = useState(category.prompts[0].id);
  const prompt = useMemo(() => category.prompts.find((p) => p.id === promptId)?.text ?? "", [category, promptId]);
  useEffect(() => {
    // When category changes, reset prompt to first
    setPromptId(PROMPT_CATEGORIES.find((c) => c.id === categoryId)!.prompts[0].id);
  }, [categoryId]);

  const storageKey = `inkspire:${promptId}`;
  const [response, setResponse] = useLocalStorage(storageKey, "");
  const [wordGoal, setWordGoal] = useLocalStorage("inkspire:wordGoal", "0");

  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0;
  const charCount = response.length;
  const goalNum = parseInt(wordGoal) || 0;
  const goalProgress = goalNum > 0 ? Math.min((wordCount / goalNum) * 100, 100) : 0;

  useEffect(() => {
    if (goalNum > 0 && wordCount >= goalNum && wordCount - 1 < goalNum) {
      toast.success(`🎉 Goal reached! You wrote ${wordCount} words!`);
    }
  }, [wordCount, goalNum]);

  const randomizePrompt = () => {
    const p = category.prompts[Math.floor(Math.random() * category.prompts.length)];
    setPromptId(p.id);
  };

  const copyResponse = async () => {
    try {
      await navigator.clipboard.writeText(response);
      toast.success("Copied response to clipboard");
    } catch {
      toast.error("Copy failed");
    }
  };

  // Fullscreen writing mode
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isFullscreen]);

  const title = `${category.name} — ${prompt.slice(0, 40)}${prompt.length > 40 ? "…" : ""}`;

  return (
    <>
      <div className={`grid gap-6 lg:grid-cols-[320px_1fr] ${isFullscreen ? 'hidden' : ''}`}>
        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-medium text-muted-foreground">Category</h2>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {PROMPT_CATEGORIES.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="mt-3 text-xs text-muted-foreground">{category.description}</p>
          </div>

          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Prompts</h3>
              <Button variant="secondary" size="sm" onClick={randomizePrompt}>
                <Shuffle className="h-4 w-4" /> Random
              </Button>
            </div>
            <ul className="space-y-2">
              {category.prompts.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => setPromptId(p.id)}
                    className={`w-full rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${p.id === promptId ? "border-primary bg-primary/5" : "border-input bg-background"}`}
                  >
                    {p.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Editor */}
        <section className="space-y-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent p-[1px]">
            <div className="rounded-2xl bg-card p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Prompt</div>
                  <h1 className="text-xl font-bold leading-snug">{prompt}</h1>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{wordCount} words</span>
                  <span aria-hidden>•</span>
                  <span>{charCount} chars</span>
                </div>
              </div>

              <Textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Start writing your response here…"
                className="min-h-[320px] resize-y rounded-xl bg-background/60 p-4 text-base leading-relaxed"
              />

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button onClick={copyResponse}>
                  <Copy className="h-4 w-4" /> Copy
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    exportToMarkdown({
                      title,
                      category: category.name,
                      prompt,
                      content: response,
                    })
                  }
                >
                  <Download className="h-4 w-4" /> Markdown
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    exportToPdf({
                      title,
                      category: category.name,
                      prompt,
                      content: response,
                    })
                  }
                >
                  <FileDown className="h-4 w-4" /> PDF
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                  className="ml-1"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Target className="h-4 w-4 text-primary" />
                <span>Word Goal</span>
              </div>
              <div className="flex gap-1">
                {[250, 500, 1000].map((goal) => (
                  <Button
                    key={goal}
                    variant={wordGoal === String(goal) ? "default" : "outline"}
                    size="sm"
                    onClick={() => setWordGoal(String(goal))}
                    className="h-7 px-2 text-xs"
                  >
                    {goal}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWordGoal("0")}
                  className="h-7 px-2 text-xs"
                  disabled={goalNum === 0}
                >
                  Clear
                </Button>
              </div>
            </div>
            {goalNum > 0 && (
              <div className="space-y-1">
                <Progress value={goalProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {wordCount} / {goalNum} words ({Math.round(goalProgress)}%)
                </p>
              </div>
            )}
          </div>

          <div className="rounded-xl border bg-card p-4 text-sm text-muted-foreground shadow-sm">
            Tips: Your work auto-saves per prompt in this browser. Use the Random button for inspiration.
          </div>
        </section>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Prompt</div>
              <h1 className="text-xl font-bold leading-snug">{prompt}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{wordCount} words</span>
                <span aria-hidden>•</span>
                <span>{charCount} chars</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                aria-label="Exit fullscreen"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Start writing your response here…"
            className="flex-1 resize-none rounded-xl bg-background/60 p-6 text-lg leading-relaxed"
            autoFocus
          />
        </div>
      )}
    </>
  );
}
