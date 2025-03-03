
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AlertCard, { AlertData, AlertType, AlertSeverity } from "./AlertCard";

// Sample data
const sampleAlerts: AlertData[] = [
  {
    id: "EQ-2023-001",
    type: "earthquake",
    title: "Magnitude 6.2 Earthquake",
    description: "Strong earthquake detected offshore. Possible tsunami warning in effect for coastal areas.",
    location: "Pacific Coast, 20km offshore",
    time: "2023-11-15T08:30:00Z",
    severity: "severe",
    source: "National Seismic Network"
  },
  {
    id: "FL-2023-032",
    type: "flood",
    title: "Flash Flood Warning",
    description: "Heavy rainfall causing rapid flooding in low-lying areas. Residents advised to move to higher ground.",
    location: "Central River Valley",
    time: "2023-11-14T16:45:00Z",
    severity: "warning",
    source: "Meteorological Department"
  },
  {
    id: "HR-2023-021",
    type: "hurricane",
    title: "Hurricane Maria Approaching",
    description: "Category 3 hurricane expected to make landfall within 48 hours. Evacuation orders issued for coastal regions.",
    location: "East Coast",
    time: "2023-11-13T12:00:00Z",
    severity: "warning",
    source: "National Hurricane Center"
  },
  {
    id: "WF-2023-015",
    type: "wildfire",
    title: "Wildfire Watch",
    description: "Dry conditions and high winds create potential for rapid wildfire spread. Be prepared to evacuate if necessary.",
    location: "Northern Forest Region",
    time: "2023-11-12T09:15:00Z",
    severity: "watch",
    source: "Forest Service"
  },
  {
    id: "TR-2023-008",
    type: "tornado",
    title: "Tornado Watch Issued",
    description: "Conditions favorable for tornado development. Stay alert and be ready to seek shelter.",
    location: "Midwest Plains",
    time: "2023-11-11T14:20:00Z",
    severity: "watch",
    source: "Storm Prediction Center"
  },
  {
    id: "EQ-2023-002",
    type: "earthquake",
    title: "Minor Earthquake Reported",
    description: "Small earthquake detected. No damage reported, but residents may have felt light shaking.",
    location: "Western Mountains",
    time: "2023-11-10T22:05:00Z",
    severity: "info",
    source: "Geological Survey"
  },
];

const AlertList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [severityFilter, setSeverityFilter] = useState<string>("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter alerts based on search term and filters
  const filteredAlerts = sampleAlerts.filter(alert => {
    const matchesSearch = 
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === "all" || alert.type === typeFilter;
    const matchesSeverity = severityFilter === "all" || alert.severity === severityFilter;
    
    return matchesSearch && matchesType && matchesSeverity;
  });

  return (
    <div className="space-y-6 animate-float-up">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search alerts by keyword..."
            className="pl-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm font-medium mr-2">Filters:</span>
          </div>
          
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[150px] h-9">
              <SelectValue placeholder="Alert Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="earthquake">Earthquake</SelectItem>
              <SelectItem value="flood">Flood</SelectItem>
              <SelectItem value="hurricane">Hurricane</SelectItem>
              <SelectItem value="tornado">Tornado</SelectItem>
              <SelectItem value="wildfire">Wildfire</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-[150px] h-9">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="severe">Severe</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="watch">Watch</SelectItem>
              <SelectItem value="info">Information</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm" className="h-9">
            Reset Filters
          </Button>
        </div>
      </div>
      
      {filteredAlerts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No alerts match your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAlerts.map((alert, index) => (
            <AlertCard 
              key={alert.id} 
              alert={alert} 
              className={`animate-float-up animate-delay-${(index % 5) * 100}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlertList;
