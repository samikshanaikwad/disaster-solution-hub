
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X, LifeBuoy, Map, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: <LifeBuoy className="h-4 w-4 mr-2" /> },
    { name: "Alerts", path: "/alerts", icon: <Bell className="h-4 w-4 mr-2" /> },
    { name: "Map", path: "/map", icon: <Map className="h-4 w-4 mr-2" /> },
    { name: "Resources", path: "/resources", icon: <Package className="h-4 w-4 mr-2" /> }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/80 border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <LifeBuoy className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl hidden sm:inline-block">DisasterHub</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${location.pathname === item.path 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground hover:bg-secondary"}`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-16 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors
                    ${location.pathname === item.path 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground hover:bg-secondary"}`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
