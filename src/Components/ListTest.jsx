import React from "react";
const ListTest = () => {
  const Data = [
    { name: "Rizwan", email: "rizwan@gmail.com", con: "1111" },
    { name: "Rafe", email: "rafe@gmail.com", con: "2222" },
    { name: "Zak", email: "Zaki@gmail.com", con: "3333" },
  ];
  return (
    <div>
      <h1>Handle Arrary with List    // List And Key </h1>
      <table border="1">
        <tr>
          <th>name</th>
          <th>email</th>
          <th>con</th>
        </tr>
        {Data.map((Data) => (
          <tr>
            <td>{Data.name}</td>
            <td>{Data.email}</td>
            <td>{Data.con}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ListTest;
