import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-xl text-center">
      <h1 className="mb-2 text-4xl font-extrabold">404</h1>
      <p className="mb-4 text-muted-foreground">Oops! Page not found.</p>
      <a href="/" className="text-primary underline underline-offset-4">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
