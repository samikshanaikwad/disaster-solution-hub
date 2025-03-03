
import { useState } from 'react';
import { Filter, Plus, Search, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ResourceCard, { ResourceData, ResourceType, ResourceStatus } from './ResourceCard';

// Sample resource data
const sampleResources: ResourceData[] = [
  {
    id: "MED-2023-001",
    name: "Emergency Medical Kits",
    type: "medical",
    description: "First aid supplies including bandages, antiseptics, pain relievers, and emergency equipment.",
    quantity: 250,
    unit: "kits",
    location: "Central Hospital Warehouse",
    status: "available",
    updateTime: "2023-11-15T10:30:00Z",
    organization: "Red Cross"
  },
  {
    id: "FOOD-2023-032",
    name: "Non-perishable Food Packages",
    type: "food",
    description: "Dried goods, canned foods, and ready-to-eat meals with 1-year shelf life.",
    quantity: 1000,
    unit: "packages",
    location: "Food Bank Distribution Center",
    status: "in-transit",
    updateTime: "2023-11-14T16:45:00Z",
    organization: "World Food Program"
  },
  {
    id: "WATER-2023-021",
    name: "Drinking Water",
    type: "water",
    description: "Purified bottled water, safe for consumption.",
    quantity: 5000,
    unit: "gallons",
    location: "Municipal Water Supply",
    status: "requested",
    updateTime: "2023-11-13T12:00:00Z",
    organization: "City Emergency Management"
  },
  {
    id: "SHELTER-2023-015",
    name: "Emergency Tents",
    type: "shelter",
    description: "Weather-resistant tents capable of housing 4-6 people each.",
    quantity: 150,
    unit: "tents",
    location: "National Guard Base",
    status: "available",
    updateTime: "2023-11-12T09:15:00Z",
    organization: "FEMA"
  },
  {
    id: "CLOTHING-2023-008",
    name: "Winter Clothing Sets",
    type: "clothing",
    description: "Cold weather gear including jackets, gloves, and hats.",
    quantity: 500,
    unit: "sets",
    location: "Community Donation Center",
    status: "delivered",
    updateTime: "2023-11-11T14:20:00Z",
    organization: "Local Charity Network"
  },
  {
    id: "MED-2023-002",
    name: "Prescription Medications",
    type: "medical",
    description: "Critical prescription medications including insulin, blood pressure medication, and antibiotics.",
    quantity: 75,
    unit: "boxes",
    location: "Pharmacy Warehouse",
    status: "depleted",
    updateTime: "2023-11-10T22:05:00Z",
    organization: "Healthcare Alliance"
  },
];

const ResourceDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter resources based on search term, type filter, status filter, and active tab
  const filteredResources = sampleResources.filter(resource => {
    // Search term filter
    const matchesSearch = 
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.organization.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Type filter
    const matchesType = typeFilter === "all" || resource.type === typeFilter;
    
    // Status filter
    const matchesStatus = statusFilter === "all" || resource.status === statusFilter;
    
    // Tab filter
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "available" && resource.status === "available") ||
      (activeTab === "requested" && resource.status === "requested") ||
      (activeTab === "in-transit" && resource.status === "in-transit") ||
      (activeTab === "delivered" && resource.status === "delivered");
    
    return matchesSearch && matchesType && matchesStatus && matchesTab;
  });

  return (
    <div className="space-y-6 animate-float-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Resource Management</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Resource
        </Button>
      </div>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="requested">Requested</TabsTrigger>
          <TabsTrigger value="in-transit">In Transit</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>
        
        <div className="mt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources by name, description, location..."
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
                <SelectValue placeholder="Resource Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="water">Water</SelectItem>
                <SelectItem value="shelter">Shelter</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px] h-9">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="requested">Requested</SelectItem>
                <SelectItem value="in-transit">In Transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="depleted">Depleted</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" className="h-9">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
        
        <TabsContent value={activeTab} className="mt-6">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources match your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources.map((resource, index) => (
                <ResourceCard 
                  key={resource.id} 
                  resource={resource} 
                  className={`animate-float-up animate-delay-${(index % 5) * 100}`}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceDashboard;
