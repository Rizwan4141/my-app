import React from "react";
export const Rizwan = () => {
  const handle = () => {
    alert("testing");
  };

  return (
    <div>
      <h1 onClick={handle}> functional Hello</h1>
    </div>
  );
};
