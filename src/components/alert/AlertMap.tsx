
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, ZoomIn, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StatusBadge from '../common/StatusBadge';
import { AlertData } from './AlertCard';

// Mock alert data for map display
const mapAlerts: Partial<AlertData>[] = [
  {
    id: "EQ-2023-001",
    type: "earthquake",
    title: "Magnitude 6.2 Earthquake",
    location: "Pacific Coast",
    severity: "severe",
  },
  {
    id: "FL-2023-032",
    type: "flood",
    title: "Flash Flood Warning",
    location: "Central River Valley",
    severity: "warning",
  },
  {
    id: "HR-2023-021",
    type: "hurricane",
    title: "Hurricane Maria Approaching",
    location: "East Coast",
    severity: "warning",
  },
  {
    id: "WF-2023-015",
    type: "wildfire",
    title: "Wildfire Watch",
    location: "Northern Forest Region",
    severity: "watch",
  }
];

const AlertMap = () => {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  const handleAlertClick = (alertId: string) => {
    setSelectedAlert(alertId === selectedAlert ? null : alertId);
  };

  // In a real app, we would use a mapping library like MapBox or Leaflet
  // This is a simplified visual representation for the prototype
  
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-border bg-secondary animate-fade-in">
      {/* Map placeholder - in real app this would be a proper map component */}
      <div 
        ref={mapRef} 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"
      >
        {/* Map overlay elements would go here */}
        <div className="absolute inset-0 bg-background/10"></div>
        
        {/* Alert markers */}
        {mapAlerts.map((alert, index) => (
          <div 
            key={alert.id}
            className={`absolute cursor-pointer transition-all duration-300 ${
              selectedAlert === alert.id ? 'z-20 scale-110' : 'z-10 hover:scale-105'
            }`}
            style={{ 
              top: `${20 + (index * 15)}%`, 
              left: `${15 + (index * 20)}%`
            }}
            onClick={() => handleAlertClick(alert.id!)}
          >
            <div className={`h-6 w-6 rounded-full flex items-center justify-center
              ${alert.severity === 'severe' ? 'bg-red-500' : 
                alert.severity === 'warning' ? 'bg-orange-500' : 
                alert.severity === 'watch' ? 'bg-yellow-500' : 'bg-blue-500'}
              ${alert.severity === 'severe' ? 'animate-pulse-gentle' : ''}
              shadow-lg`}
            >
              <span className="sr-only">{alert.type}</span>
            </div>
            
            {selectedAlert === alert.id && (
              <Card className="absolute top-full mt-2 -translate-x-1/2 left-1/2 w-64 p-3 shadow-lg animate-scale-in z-30">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <ArrowDown className="h-4 w-4 text-foreground" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <StatusBadge 
                    status={alert.severity!} 
                    text={alert.severity!.toUpperCase()} 
                    pulsing={alert.severity === "severe"} 
                  />
                  <span className="text-xs text-muted-foreground">#{alert.id}</span>
                </div>
                <h4 className="text-sm font-medium">{alert.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{alert.location}</p>
                <div className="flex justify-end mt-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs">Details</Button>
                </div>
              </Card>
            )}
          </div>
        ))}
      </div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
          <Layers className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Map legend */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-md shadow-sm border border-border">
        <h4 className="text-xs font-medium mb-2">Alert Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-xs">Severe</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-xs">Warning</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-xs">Watch</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-xs">Information</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMap;
