import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, DollarSign, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  subtitle?: string;
  value: string;
  icon: React.ComponentType<any>;
  gradient?: string;
}

const StatCard = ({ title, subtitle, value, icon: Icon }: StatCardProps) => (
  <Card className="border-border shadow-soft hover:shadow-medium transition-all duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <div>
        <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-[11px] text-muted-foreground/70 mt-0.5 leading-tight">{subtitle}</p>
        )}
      </div>
      {/* Clean icon — no background, just the brand-colored glyph */}
      <Icon className="h-5 w-5 text-primary opacity-80 shrink-0" />
    </CardHeader>
    <CardContent className="pt-0">
      <div className="text-xl sm:text-2xl font-bold text-foreground font-mono">{value}</div>
    </CardContent>
  </Card>
);


interface OwnerStatsComponentProps {
  data: any;
  isLoading: boolean;
}

export default function OwnerStatsComponent({ data, isLoading }: OwnerStatsComponentProps) {
  if (isLoading) {
    return (
      <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="border-border shadow-soft">
            <CardContent className="py-6 sm:py-8 text-center text-sm">Loading...</CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const statsData = data || {};

  const stats = [
    {
      title: "My Villas",
      subtitle: "Villas assigned to your account",
      value: String(statsData.myVillasCount || 0),
      icon: Building2,
      gradient: "bg-gradient-primary",
    },
    {
      title: "Active Bookings",
      subtitle: "Currently confirmed or checked-in · Your villas",
      value: String(statsData.activeBookings || 0),
      icon: Calendar,
      gradient: "bg-gradient-accent",
    },
    {
      title: "Current Month Revenue",
      subtitle: "Bookings checking in this month · Excludes cancelled",
      value: `₹${(statsData.monthlyRevenue || 0).toLocaleString('en-IN')}`,
      icon: DollarSign,
      gradient: "bg-gradient-sunset",
    },
    {
      title: "Guests This Month",
      subtitle: "Total guests checking in this month · Excludes cancelled",
      value: String(statsData.totalGuests || 0),
      icon: Users,
      gradient: "bg-gradient-secondary",
    },
  ];

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}