// Calendar booking utility functions

export function createCalendlyLink(duration: number): string {
  // Replace with your actual Calendly username
  const calendlyUsername = "ravymeas";
  return `https://calendly.com/${calendlyUsername}/${duration}min`;
}

export function createGoogleCalendarLink(
  title: string,
  duration: number
): string {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + duration * 60000);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    details: `Meeting scheduled via personal website`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function openBookingLink(duration: number) {
  // You can switch between Calendly, Cal.com, or Google Calendar
  // For now, using mailto as a fallback
  const email = "measravy072@gmail.com";
  const subject = encodeURIComponent(`${duration} Min Meeting Request`);
  const body = encodeURIComponent(
    `Hi Ravy,\n\nI'd like to schedule a ${duration}-minute meeting with you.\n\nBest regards`
  );

  window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
}
