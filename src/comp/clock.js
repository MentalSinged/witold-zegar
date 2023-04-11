import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const czas = new Date();
      setClockState(czas.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div style={{ fontSize: "200px", margin: "60px" }}>{clockState}</div>;
}

export default Clock;