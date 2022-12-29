export const getMessages = () => {
  return {
    allDay: "All day",
    previous: "<",
    next: ">",
    today: "Today",
    month: "Month",
    week: "Week",
    day: "Day",
    agenda: "Agend",
    date: "Date",
    time: "Hour",
    event: "Event",
    noEventsInRange: "There are not events in this range",
    showMore: (total) => `+ View more (${total})`,
  };
};
