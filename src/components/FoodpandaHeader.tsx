import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
import { Menu, X, Search, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
import { useState, useEffect } from "react";
import { Menu, X, Search, Globe, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodpandaLogo from "@/components/FoodpandaLogo";
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
import LocationModal from "./LocationModal";

const FoodpandaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
<<<<<<< HEAD
  const location = useLocation();

=======
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Partners", path: "/partners" },
    { name: "panda ads", path: "/pandaads", isPandaAds: true },
    { name: "Contact", path: "/contact" },
<<<<<<< HEAD
    { name: "Careers", path: "/careers" },
=======
    { name: "Careers", path: "https://careers.foodpanda.com/", isExternal: true },
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  ];

  const isActive = (path: string) => location.pathname === path;

<<<<<<< HEAD
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
=======
  const renderNavItem = (item: any, mobile = false) => {
    const className = mobile
      ? `px-4 py-3 rounded-xl font-bold text-lg transition-colors ${
          isActive(item.path) ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
        }`
      : `px-3 py-2 text-sm font-bold transition-colors rounded-full ${
          isActive(item.path) ? "text-primary" : "text-gray-700 hover:text-primary"
        }`;

    if (item.isExternal) {
      return (
        <a
          key={item.name}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link key={item.path} to={item.path} className={className}>
        {item.name}
      </Link>
    );
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled || isMenuOpen || isSearchOpen ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Search Overlay */}
          <div 
            className={`absolute inset-0 bg-white z-50 flex items-center transition-all duration-300 ${
              isSearchOpen 
                ? "opacity-100 visible translate-y-0" 
                : "opacity-0 invisible -translate-y-4"
            }`}
          >
             <div className="w-full flex items-center gap-4">
               <Search className="w-5 h-5 text-gray-400 shrink-0" />
               <input 
                  type="text" 
                  placeholder="Search..." 
                  className="flex-1 text-lg outline-none bg-transparent placeholder:text-gray-400 text-foreground"
                  autoFocus={isSearchOpen}
               />
               <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
               </button>
             </div>
          </div>

          <div className={`flex items-center justify-between transition-opacity duration-200 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-50">
              <FoodpandaLogo className="h-6 md:h-8 text-primary" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => renderNavItem(item))}
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

              <button 
                className="p-2 hover:bg-muted rounded-full transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => renderNavItem(item, true))}
            <Button
              variant="panda"
              size="lg"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              onClick={() => {
                setIsMenuOpen(false);
                setIsLocationOpen(true);
              }}
<<<<<<< HEAD
              className="mt-4"
=======
              className="mt-6 w-full shadow-pink"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
            >
              Choose location
            </Button>
          </nav>
        </div>
<<<<<<< HEAD
      )}

      <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
    </header>
=======
      </div>

      <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
    </>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  );
};

export default FoodpandaHeader;
