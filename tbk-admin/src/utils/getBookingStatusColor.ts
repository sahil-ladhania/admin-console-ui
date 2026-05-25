
export const getBookingStatusColor = (status: string | undefined | null) => {
  if (!status) {
    return "bg-muted text-muted-foreground border border-border";
  }

  const statusLower = status.toLowerCase();
  switch (statusLower) {
    case "confirmed":
      return "bg-success/15 text-success border border-success/30";
    case "pending":
      return "bg-warning/15 text-warning border border-warning/30";
    case "cancelled":
      return "bg-destructive/15 text-destructive border border-destructive/30";
    case "checked_in":
      return "bg-primary/15 text-primary border border-primary/30";
    case "checked_out":
      return "bg-muted text-muted-foreground border border-border";
    default:
      return "bg-muted text-muted-foreground border border-border";
  }
};