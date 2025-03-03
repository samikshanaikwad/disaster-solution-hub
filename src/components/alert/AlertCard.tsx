
import { Calendar, MapPin, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";

export type AlertType = "earthquake" | "flood" | "hurricane" | "tornado" | "wildfire" | "other";
export type AlertSeverity = "severe" | "warning" | "watch" | "info";

export interface AlertData {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  location: string;
  time: string;
  severity: AlertSeverity;
  source: string;
}

interface AlertCardProps {
  alert: AlertData;
  className?: string;
}

const AlertCard = ({ alert, className }: AlertCardProps) => {
  const getAlertIcon = (type: AlertType) => {
    switch (type) {
      case "earthquake":
        return <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />;
      case "flood":
        return <AlertTriangle className="h-5 w-5 mr-2 text-blue-500" />;
      case "hurricane":
        return <AlertTriangle className="h-5 w-5 mr-2 text-purple-500" />;
      case "tornado":
        return <AlertTriangle className="h-5 w-5 mr-2 text-teal-500" />;
      case "wildfire":
        return <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />;
      default:
        return <Info className="h-5 w-5 mr-2 text-gray-500" />;
    }
  };

  return (
    <Card className={`overflow-hidden animate-scale-in card-hover ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <StatusBadge status={alert.severity} text={alert.severity.toUpperCase()} pulsing={alert.severity === "severe"} />
          <span className="text-xs text-muted-foreground">#{alert.id}</span>
        </div>
        <div className="flex items-center">
          {getAlertIcon(alert.type)}
          <CardTitle className="text-lg">{alert.title}</CardTitle>
        </div>
        <CardDescription>{alert.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{alert.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{alert.time}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <div className="text-xs text-muted-foreground">Source: {alert.source}</div>
        <Button variant="outline" size="sm">Details</Button>
      </CardFooter>
    </Card>
  );
};

export default AlertCard;
