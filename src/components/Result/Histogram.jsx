import React from "react";
import { Bar } from "react-chartjs-2";

export default function Histogram() {
  const data = {
    labels: ["Your Score", "Average Score"],
    datasets: [
      {
        label: "Score",
        backgroundColor: ["#1a73e8", "#C4C4C4"],
        borderColor: ["#1a73e8", "#C4C4C4"],
        borderWidth: 1,
        barThickness: 50,
        data: [65, 50],
      },
    ],
  };

  return (
    // <div>
    <Bar height="100%" width="100%" data={data} />
    // </div>
  );
}
