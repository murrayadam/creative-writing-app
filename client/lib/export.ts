import { jsPDF } from "jspdf";

export function download(filename: string, text: string, type: string) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportToMarkdown(opts: {
  title: string;
  category: string;
  prompt: string;
  content: string;
}) {
  const { title, category, prompt, content } = opts;
  const md = `# ${title}\n\n- Category: ${category}\n- Prompt: ${prompt}\n\n---\n\n${content}\n`;
  download(`${slugify(title)}.md`, md, "text/markdown;charset=utf-8");
}

export function exportToPdf(opts: {
  title: string;
  category: string;
  prompt: string;
  content: string;
}) {
  const { title, category, prompt, content } = opts;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 48;
  let y = margin;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(title, margin, y);
  y += 28;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Category: ${category}`, margin, y);
  y += 16;
  doc.text(`Prompt: ${prompt}`.replace(/\s+/g, " "), margin, y, { maxWidth: 512 });
  y += 24;

  doc.setDrawColor(200);
  doc.line(margin, y, 595 - margin, y);
  y += 16;

  doc.setFontSize(12);
  const lines = doc.splitTextToSize(content || "", 595 - margin * 2);
  lines.forEach((line) => {
    if (y > 842 - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += 18;
  });

  doc.save(`${slugify(title)}.pdf`);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
