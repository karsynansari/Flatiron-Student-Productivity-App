import React from "react";
import UpcomingToDos from "./UpcomingToDos";

function HomePage({toDos}) {
  return (
    <div>
      <h1>Weather App placeholder</h1>
      <UpcomingToDos toDos={toDos}/>
    </div>
  );
}

export default HomePage;
