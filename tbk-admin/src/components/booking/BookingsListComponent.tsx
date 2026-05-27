import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingCardComponent from '@/components/booking/BookingCardComponent';
import BookingsEmptyStateComponent from "./BookingsEmptyStateComponent";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookingsListProps {
  bookings: any[];
  pagination?: {
    totalBookings: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BookingsListComponent({ 
  bookings, 
  pagination, 
  currentPage, 
  onPageChange 
}: BookingsListProps) {
  
  const getPageNumbers = () => {
    const pages = [];
    const totalPages = pagination?.totalPages || 1;
    const current = currentPage;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show page 1
      pages.push(1);

      if (current > 3) {
        pages.push("ellipsis-1");
      }

      // Show current-1, current, and current+1 in boundaries
      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (current < totalPages - 2) {
        pages.push("ellipsis-2");
      }

      // Always show last page
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  const totalBookingsCount = pagination ? pagination.totalBookings : bookings.length;

  return (
    <Card className="border border-border bg-card/60 backdrop-blur-md shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border">
        <CardTitle className="text-xl font-bold tracking-tight text-foreground">
          Bookings ({totalBookingsCount})
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {bookings.map((booking) => (
            <BookingCardComponent key={booking.id} booking={booking} />
          ))}
          {bookings.length === 0 && <BookingsEmptyStateComponent />}
        </div>

        {pagination && pagination.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border mt-6">
            {/* Entries Info */}
            <div className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {totalBookingsCount === 0 ? 0 : (currentPage - 1) * pagination.limit + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-foreground">
                {Math.min(currentPage * pagination.limit, totalBookingsCount)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">{totalBookingsCount}</span>{" "}
              bookings
            </div>

            {/* Page Selector Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-9 w-9 rounded-md transition-all duration-200 hover:bg-primary/5 hover:border-primary/30"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-1.5">
                {getPageNumbers().map((page, idx) => {
                  if (typeof page === "string") {
                    return (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-2 text-sm text-muted-foreground select-none"
                      >
                        &hellip;
                      </span>
                    );
                  }

                  const isActive = page === currentPage;
                  return (
                    <Button
                      key={page}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => onPageChange(page)}
                      className={`h-9 min-w-9 rounded-md transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold hover:bg-primary/95"
                          : "hover:bg-primary/5 hover:border-primary/30 hover:text-foreground text-muted-foreground"
                      }`}
                    >
                      {page}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pagination.totalPages}
                className="h-9 w-9 rounded-md transition-all duration-200 hover:bg-primary/5 hover:border-primary/30"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}