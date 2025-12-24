import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocationModal from "./LocationModal";

const FoodpandaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Partners", path: "/partners" },
    { name: "panda ads", path: "/pandaads", isPandaAds: true },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">🐼</span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-primary">food</span>
              <span className="text-primary">panda</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(item.path)
                    ? "text-primary"
                    : item.isPandaAds
                    ? "text-primary hover:bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="location"
              size="sm"
              onClick={() => setIsLocationOpen(true)}
              className="hidden md:flex"
            >
              Choose location
            </Button>

            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="panda"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLocationOpen(true);
              }}
              className="mt-4"
            >
              Choose location
            </Button>
          </nav>
        </div>
      )}

      <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
    </header>
  );
};

export default FoodpandaHeader;
