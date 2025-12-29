import { Button } from "@/components/ui/button";
import marliLogo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src={marliLogo} 
              alt="Marli" 
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#problem" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              The Problem
            </a>
            <a 
              href="#solution" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solution
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
