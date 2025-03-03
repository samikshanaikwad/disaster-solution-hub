
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AlertMap from "@/components/alert/AlertMap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Layers, Info, Clock } from "lucide-react";
import StatusBadge from "@/components/common/StatusBadge";

const Map = () => {
  const [mapMode, setMapMode] = useState("alerts");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-float-up">
            Disaster Map
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px] animate-float-up" style={{ animationDelay: "0.1s" }}>
            Visualize active alerts, affected areas, and resource distribution on an interactive map.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 animate-fade-in">
            <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Interactive Map</h2>
              </div>
              
              <div className="flex gap-2">
                <Select value={mapMode} onValueChange={setMapMode}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alerts">Alert Locations</SelectItem>
                    <SelectItem value="impact">Impact Zones</SelectItem>
                    <SelectItem value="resources">Resource Distribution</SelectItem>
                    <SelectItem value="teams">Response Teams</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button size="icon" variant="outline">
                  <Layers className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <AlertMap />
            
            <div className="mt-4 text-sm text-muted-foreground flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Last updated: 5 minutes ago</span>
            </div>
          </div>
          
          <div className="w-full md:w-80 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Current Alerts</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Earthquakes</span>
                  <StatusBadge status="severe" text="2" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Floods</span>
                  <StatusBadge status="warning" text="1" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Hurricanes</span>
                  <StatusBadge status="warning" text="1" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Wildfires</span>
                  <StatusBadge status="watch" text="1" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Tornadoes</span>
                  <StatusBadge status="info" text="1" />
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h3 className="font-medium mb-3">Affected Regions</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">Pacific Coast - Severe</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm">Central River Valley - Warning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm">East Coast - Warning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Northern Forest Region - Watch</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Midwest Plains - Watch</span>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h3 className="font-medium mb-3">Resource Centers</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-sm">Central Hospital Warehouse</div>
                  <div className="text-xs text-muted-foreground">Medical supplies, emergency kits</div>
                </div>
                <div>
                  <div className="font-medium text-sm">Food Bank Distribution Center</div>
                  <div className="text-xs text-muted-foreground">Food packages, drinking water</div>
                </div>
                <div>
                  <div className="font-medium text-sm">National Guard Base</div>
                  <div className="text-xs text-muted-foreground">Shelter, transportation</div>
                </div>
                <div>
                  <div className="font-medium text-sm">Community Donation Center</div>
                  <div className="text-xs text-muted-foreground">Clothing, personal items</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                View All Locations
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Map;
