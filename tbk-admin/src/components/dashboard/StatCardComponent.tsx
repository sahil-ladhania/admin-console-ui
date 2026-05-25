import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  CalendarX,
  Clock
} from "lucide-react";

// Icon mapping
const iconMap = {
  DollarSign,
  Calendar,
  Users,
  Clock,
  CalendarX,
};

export default function StatCardComponent({ title, value, change, icon, gradient, trend, subtitle }) {

  // Determine the icon component to use
  const IconComponent = iconMap[icon as keyof typeof iconMap] || DollarSign;

  return(
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-[11px] text-muted-foreground/70 mt-0.5 leading-tight">{subtitle}</p>
          )}
        </div>
        {/* Refined icon container — gradient pill with soft glow ring */}
        <div className={`p-2.5 rounded-xl ${gradient || 'bg-secondary'} shadow-soft ring-1 ring-white/10 shrink-0`}>
          <IconComponent className="h-4 w-4 text-primary-foreground drop-shadow-sm" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground font-mono">{value}</div>
        {change && (
          <p className={`text-xs flex items-center gap-1 mt-1 ${
            trend === 'up' ? 'text-success' :
            trend === 'down' ? 'text-destructive' :
            'text-muted-foreground'
          }`}>
            {trend === 'up' && <TrendingUp className="h-3 w-3" />}
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
