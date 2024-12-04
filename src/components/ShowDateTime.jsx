import React from "react";

const ShowDateTime = ({ timestamp }) => {
  const date = new Date(timestamp);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div>
      <p>{currentDate}</p>
      <p>{currentTime}</p>
    </div>
  );
};

export default ShowDateTime;
