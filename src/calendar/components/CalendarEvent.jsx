import React from "react";

export const CalendarEvent = (props) => {
  const {
    event: { title, user },
  } = props;

  return (
    <>
      <strong>{title}</strong>
      <strong>- {user?.name}</strong>
    </>
  );
};
