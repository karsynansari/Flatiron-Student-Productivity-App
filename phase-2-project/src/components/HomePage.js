import React from "react";

import UpcomingToDos from "./UpcomingToDos";

function HomePage({ toDos }) {

  
  return (
    <div className="HomePage">
    
      <UpcomingToDos toDos={toDos} />
    </div>
  );
}

export default HomePage;
