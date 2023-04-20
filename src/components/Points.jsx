import React, { useContext } from "react";
import { AliensContext } from "../contexts/AliensContext";

const Points = () => {
  const {currentPoints} = useContext(AliensContext);
  return (
    <div>
      <h2>Points: {currentPoints}</h2>
    </div>
  );
};

export default Points;
