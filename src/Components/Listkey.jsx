import React from "react";

const Listkey = () => {
  const ListItem = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>List And Keys</h1>
      <ul>
        {ListItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listkey;
