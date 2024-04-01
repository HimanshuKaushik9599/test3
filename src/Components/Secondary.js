import React, { useEffect, useState } from "react";
import RecommandedCard from "./RecommandedCard";
import Shimmer from "./Shimmer";

const Secondary = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRecommandedDetails();
  }, []);

  async function getRecommandedDetails() {
    const response = await fetch(
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=&type=reco"
    );
    const json = await response.json();
    setData(json);
  }
  console.log(data);


  return data === null ? (
    <Shimmer />
  ) : (
    <div className="flex m-2 p-2 mx-5">
      {
      data.events.map((mydata, index) => (
        <RecommandedCard key={index} props={mydata}  />
      ))}
      
    </div>
  );
};

export default Secondary;
