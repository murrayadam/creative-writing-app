import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Layout() {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-background to-muted/40 text-foreground")}> 
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Inkspire</span>
          </Link>
          <div className="text-xs text-muted-foreground">Creative writing, beautifully simple</div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">© {new Date().getFullYear()} Inkspire</div>
      </footer>
    </div>
  );
}
