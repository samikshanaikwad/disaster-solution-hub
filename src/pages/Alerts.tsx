
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlertList from "@/components/alert/AlertList";
import AlertMap from "@/components/alert/AlertMap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Bell, MapPin } from "lucide-react";

const Alerts = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-float-up">
            Disaster Alerts
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px] animate-float-up" style={{ animationDelay: "0.1s" }}>
            Stay informed with real-time alerts about earthquakes, floods, hurricanes, and other critical events.
          </p>
        </div>
        
        <Tabs defaultValue="list" value={viewMode} onValueChange={(value) => setViewMode(value as "list" | "map")}>
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="list" className="flex items-center">
                <Bell className="h-4 w-4 mr-2" />
                List View
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Map View
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline">
                Report Event
              </Button>
              <Button size="sm">
                Subscribe to Alerts
              </Button>
            </div>
          </div>
          
          <TabsContent value="list" className="space-y-6">
            <AlertList />
          </TabsContent>
          
          <TabsContent value="map" className="space-y-6">
            <AlertMap />
            <div className="mt-6 bg-secondary/50 border border-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Map Instructions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Click on the alert markers to view details about each event. Use the controls in the top right to zoom and change map layers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background rounded p-3 border border-border">
                  <h4 className="font-medium mb-1 text-sm">Recent Activity</h4>
                  <p className="text-xs text-muted-foreground">6 new alerts in the last 24 hours</p>
                </div>
                <div className="bg-background rounded p-3 border border-border">
                  <h4 className="font-medium mb-1 text-sm">Most Severe</h4>
                  <p className="text-xs text-muted-foreground">Magnitude 6.2 Earthquake (Pacific Coast)</p>
                </div>
                <div className="bg-background rounded p-3 border border-border">
                  <h4 className="font-medium mb-1 text-sm">Monitoring</h4>
                  <p className="text-xs text-muted-foreground">Hurricane watch active for East Coast region</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Alerts;
