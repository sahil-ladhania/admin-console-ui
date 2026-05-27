import { useState } from "react";
import ManageBookingsHeaderComponent from '@/components/booking/ManageBookingsHeaderComponent';
import BookingsFiltersComponent from '@/components/booking/BookingsFiltersComponent';
import BookingsListComponent from '@/components/booking/BookingsListComponent';
import { useQuery } from "@tanstack/react-query";
import { searchAndFilterBookingsService } from "@/services/booking.service";

export default function ManageBookingsPage() {
  const [searchText, setSearchText] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (val: string) => {
    setSearchText(val);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (val: string) => {
    setBookingStatus(val);
    setCurrentPage(1);
  };

  const handlePaymentStatusFilterChange = (val: string) => {
    setPaymentStatus(val);
    setCurrentPage(1);
  };

  const handleCheckInDateChange = (val: any) => {
    setCheckInDate(val);
    setCurrentPage(1);
  };

  const handleClearDate = () => {
    setCheckInDate(null);
    setCurrentPage(1);
  };

  const handleClearAllFilters = () => {
    setSearchText("");
    setBookingStatus("");
    setPaymentStatus("");
    setCheckInDate(null);
    setCurrentPage(1);
  };

  const checkInDateString = checkInDate
    ? `${checkInDate.getFullYear()}-${String(checkInDate.getMonth() + 1).padStart(2, '0')}-${String(checkInDate.getDate()).padStart(2, '0')}`
    : null;

  const { data } = useQuery({
    queryKey: ['bookings', searchText, bookingStatus, paymentStatus, checkInDateString, currentPage],
    queryFn: () => searchAndFilterBookingsService(searchText, bookingStatus, paymentStatus, checkInDateString, currentPage, 10),
  });

  return (
    <div className="space-y-4 sm:space-y-6">
      <ManageBookingsHeaderComponent />

      <BookingsFiltersComponent
        searchTerm={searchText}
        statusFilter={bookingStatus}
        paymentStatusFilter={paymentStatus}
        checkInDate={checkInDate}
        onSearchChange={handleSearchChange}
        onStatusFilterChange={handleStatusFilterChange}
        onPaymentStatusFilterChange={handlePaymentStatusFilterChange}
        onCheckInDateChange={handleCheckInDateChange}
        onClearDate={handleClearDate}
        onClearAllFilters={handleClearAllFilters}
      />

      {/* ✅ Direct prop pass — Redux bypass */}
      <BookingsListComponent 
        bookings={data?.bookings || []} 
        pagination={data?.pagination}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}