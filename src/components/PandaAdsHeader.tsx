import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PandaAdsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/pandaads" },
    { name: "Solutions", path: "/pandaads/solutions" },
    { 
      name: "Resources", 
      path: "/pandaads/resources",
      hasDropdown: true,
      subItems: [
        { name: "Insights", path: "/pandaads/resources/insights" },
        { name: "Case Studies", path: "/pandaads/resources/case-studies" },
        { name: "Newsroom", path: "/pandaads/resources/newsroom" },
      ]
    },
    { name: "Tools", path: "/pandaads/tools" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/pandaads" className="flex items-center gap-1">
            <span className="text-2xl font-bold">
              <span className="text-primary">panda</span>
              <span className="text-muted-foreground font-normal">ads</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                        location.pathname.includes("/pandaads/resources")
                          ? "text-primary"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {isResourcesOpen && (
                      <div className="absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg py-2 animate-slide-down">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.path)
                                ? "text-primary bg-primary/10"
                                : "text-foreground hover:text-primary hover:bg-muted"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="panda"
              size="sm"
              asChild
            >
              <Link to="/pandaads/contact">Contact us</Link>
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
              <div key={item.path}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isResourcesOpen && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                              isActive(subItem.path)
                                ? "text-primary bg-primary/10"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors block ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button
              variant="panda"
              asChild
              className="mt-4"
            >
              <Link to="/pandaads/contact" onClick={() => setIsMenuOpen(false)}>
                Contact us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default PandaAdsHeader;
