import React from "react";
// import ReactWeather, { useOpenWeather } from "react-open-weather";
import UpcomingToDos from "./UpcomingToDos";
// import Weather from "./Weather";

function HomePage({ toDos }) {
  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: "fc42c2a28ac831bcf65c63563a10da82",
  //   lat: "48.137154",
  //   lon: "11.576124",
  //   lang: "en",
  //   unit: "metric", // values are (metric, standard, imperial)
  // });

  
  return (
    <div className="HomePage">
      {/* <Weather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Munich"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      /> */}
      <UpcomingToDos toDos={toDos} />
    </div>
  );
}

export default HomePage;
