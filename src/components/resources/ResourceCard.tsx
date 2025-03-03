
import { Truck, MapPin, Calendar, Package, Users, ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/common/StatusBadge";

export type ResourceStatus = "available" | "requested" | "in-transit" | "delivered" | "depleted";
export type ResourceType = "medical" | "food" | "water" | "shelter" | "clothing" | "other";

export interface ResourceData {
  id: string;
  name: string;
  type: ResourceType;
  description: string;
  quantity: number;
  unit: string;
  location: string;
  status: ResourceStatus;
  updateTime: string;
  organization: string;
}

interface ResourceCardProps {
  resource: ResourceData;
  className?: string;
}

const ResourceCard = ({ resource, className }: ResourceCardProps) => {
  // Map status to appropriate status type for badge
  const mapStatusToBadgeType = (status: ResourceStatus) => {
    switch (status) {
      case "available":
        return "success" as const;
      case "requested":
        return "info" as const;
      case "in-transit":
        return "watch" as const;
      case "delivered":
        return "success" as const;
      case "depleted":
        return "severe" as const;
    }
  };

  // Format status text for display
  const formatStatus = (status: ResourceStatus) => {
    return status.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };

  // Map resource type to icon
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case "medical":
        return <Package className="h-5 w-5 mr-2 text-red-500" />;
      case "food":
        return <Package className="h-5 w-5 mr-2 text-green-500" />;
      case "water":
        return <Package className="h-5 w-5 mr-2 text-blue-500" />;
      case "shelter":
        return <Package className="h-5 w-5 mr-2 text-orange-500" />;
      case "clothing":
        return <Package className="h-5 w-5 mr-2 text-purple-500" />;
      default:
        return <Package className="h-5 w-5 mr-2 text-gray-500" />;
    }
  };

  return (
    <Card className={`overflow-hidden animate-scale-in card-hover ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <StatusBadge 
            status={mapStatusToBadgeType(resource.status)} 
            text={formatStatus(resource.status)} 
            pulsing={resource.status === "requested"} 
          />
          <span className="text-xs text-muted-foreground">{resource.type.toUpperCase()}</span>
        </div>
        <div className="flex items-center">
          {getResourceIcon(resource.type)}
          <CardTitle className="text-lg">{resource.name}</CardTitle>
        </div>
        <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Quantity:</span>
            <span>{resource.quantity} {resource.unit}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{resource.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Updated: {resource.updateTime}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            <span>{resource.organization}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 pt-0">
        <Button variant="outline" size="sm" className="flex-1">
          <Check className="h-4 w-4 mr-2" />
          Request
        </Button>
        <Button variant="default" size="sm" className="flex-1">
          Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
