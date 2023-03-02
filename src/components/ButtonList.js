import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((l) => (
        <Button name={l} />
      ))}
    </div>
  );
};

export default ButtonList;
