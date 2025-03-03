
import { Button } from "@/components/ui/button";
import ResourceDashboard from "@/components/resources/ResourceDashboard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Package, FileText, Download } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-float-up">
              Resource Coordination
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px] animate-float-up" style={{ animationDelay: "0.1s" }}>
              Manage and coordinate essential resources for disaster response and recovery.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 animate-float-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="outline" size="sm" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
        
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-float-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-primary/5 rounded-lg p-4 border border-border">
            <div className="flex items-center mb-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/10 mr-3">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium text-lg">Resources Available</h3>
            </div>
            <div className="text-3xl font-bold mb-2">1,250</div>
            <p className="text-sm text-muted-foreground">
              Across 5 categories and 12 storage locations
            </p>
          </div>
          
          <div className="bg-orange-500/5 rounded-lg p-4 border border-border">
            <div className="flex items-center mb-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-orange-500/10 mr-3">
                <Package className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="font-medium text-lg">Resource Requests</h3>
            </div>
            <div className="text-3xl font-bold mb-2">38</div>
            <p className="text-sm text-muted-foreground">
              Pending approval in last 24 hours
            </p>
          </div>
          
          <div className="bg-green-500/5 rounded-lg p-4 border border-border">
            <div className="flex items-center mb-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-green-500/10 mr-3">
                <Package className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-medium text-lg">Delivered Resources</h3>
            </div>
            <div className="text-3xl font-bold mb-2">756</div>
            <p className="text-sm text-muted-foreground">
              Successfully distributed this month
            </p>
          </div>
        </div>
        
        <ResourceDashboard />
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
