
import { Link } from "react-router-dom";
import { LifeBuoy, Github, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-10 md:py-12 animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <LifeBuoy className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">DisasterHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Real-time disaster alerts and resource coordination platform helping communities respond effectively.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-base">Platform</h3>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/alerts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Alerts</Link>
            <Link to="/map" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Map</Link>
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-base">Resources</h3>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Data Sources</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</Link>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium text-base">Connect</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Subscribe to our alert notifications
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-l-md border border-input bg-background"
              />
              <button
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-r-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DisasterHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
