import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Layout() {
  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-background to-muted/40 text-foreground",
      )}
    >
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F5cf20facd67a4839b30520b324538d7e%2F333f764715f14e6b8d690ea1e8d942fa?format=webp&width=800"
              alt="blankrite logo"
              className="h-12 w-12 rounded-md shadow-lg"
            />
            <div>
              <div
                className="font-extrabold tracking-tight text-2xl"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                blankrite
              </div>
            </div>
          </Link>
          <div className="hidden md:block text-sm text-muted-foreground">
            Daily prompts. Build your writing habit.
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          © {new Date().getFullYear()} blankrite — write every day
        </div>
      </footer>
    </div>
  );
}
