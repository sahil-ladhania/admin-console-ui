import OwnerBookingsComponent from "@/components/owner/OwnerBookingsComponent";
import OwnerStatsComponent from "@/components/owner/OwnerStatsComponent";
import OwnerVillasComponent from "@/components/owner/OwnerVillasComponent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getOwnerDashboardStatsService, getOwnerVillasService, getRecentBookingsForOwnerService } from "@/services/ownerDashboard.service";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { Building2, Calendar, TrendingUp, MapPin } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OwnerDashboardPage() {
  const navigate = useNavigate();
  const ownerId = useSelector((state: RootState) => state?.auth?.user?.id);

  // Query for Dashboard Stats
  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ["ownerDashboardStats", ownerId],
    queryFn: () => getOwnerDashboardStatsService({ ownerId }),
  });

  // Query for Owner Villas
  const { data: villasData, isLoading: villasLoading, isError: villasError } = useQuery({
    queryKey: ["ownerVillas", ownerId],
    queryFn: () => getOwnerVillasService({ ownerId }),
  });

  // Query for Recent Bookings
  const { data: bookingsData, isLoading: bookingsLoading } = useQuery({
    queryKey: ["recentBookings", ownerId],
    queryFn: () => getRecentBookingsForOwnerService({ ownerId }),
  });

  return (
    <div className="flex-1 space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
            Owner Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
            Manage your villas and track performance
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-primary rounded-lg shadow-soft w-fit">
          <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
          <span className="text-sm sm:text-base text-primary-foreground font-medium">Villa Owner Portal</span>
        </div>
      </div>

      {/* Stats Overview */}
      <OwnerStatsComponent data={statsData} isLoading={statsLoading} />

      {/* Main Content Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Villas Section */}
        <div>
          <OwnerVillasComponent data={villasData} isLoading={villasLoading} isError={villasError} />
        </div>

        {/* Bookings Section */}
        <div>
          <OwnerBookingsComponent data={bookingsData} isLoading={bookingsLoading} />
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="border-border shadow-soft">
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            Quick Actions
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Manage your villa properties efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* View Calendar */}
            <div
              onClick={() => navigate('/owner/calendar')}
              className="group p-4 sm:p-5 rounded-xl border border-border/60 bg-secondary/40 hover:bg-primary/10 hover:border-primary/40 hover:shadow-soft transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-background/80 border border-border/50 group-hover:border-primary/30 transition-colors shrink-0">
                  <Calendar className="h-5 w-5 text-primary opacity-80" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-foreground">View Calendar</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Check availability</p>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div
              onClick={() => navigate('/owner/analytics')}
              className="group p-4 sm:p-5 rounded-xl border border-border/60 bg-secondary/40 hover:bg-primary/10 hover:border-primary/40 hover:shadow-soft transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-background/80 border border-border/50 group-hover:border-primary/30 transition-colors shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary opacity-80" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-foreground">Analytics</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Performance reports</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}