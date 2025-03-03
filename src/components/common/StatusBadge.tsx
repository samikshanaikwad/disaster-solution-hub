
import { cn } from "@/lib/utils";

type StatusType = "severe" | "warning" | "watch" | "info" | "success";

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  pulsing?: boolean;
  className?: string;
}

const StatusBadge = ({ status, text, pulsing = false, className }: StatusBadgeProps) => {
  const statusClasses = {
    severe: "bg-red-100 text-red-800 border-red-200",
    warning: "bg-orange-100 text-orange-800 border-orange-200",
    watch: "bg-yellow-100 text-yellow-800 border-yellow-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
    success: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        statusClasses[status],
        pulsing && "animate-pulse-gentle",
        className
      )}
    >
      {pulsing && (
        <span className={cn(
          "w-2 h-2 mr-1.5 rounded-full",
          status === "severe" && "bg-red-500",
          status === "warning" && "bg-orange-500",
          status === "watch" && "bg-yellow-500", 
          status === "info" && "bg-blue-500",
          status === "success" && "bg-green-500"
        )} />
      )}
      {text}
    </span>
  );
};

export default StatusBadge;
