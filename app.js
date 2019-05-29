"use strict";

// Data from https://elections2019.belgium.be/fr/election?el=CK
// Retrieved 28th of May 2019

const PARTIES_PERCENTS = [
  // These are not the official results
  13.31,
  9.92,
  7.86,
  7.38,
  7.16,
  7.09,
  6.28,
  5.57,
  5.1,
  5.07,
  3.07,
  1.84,
  3.38,
  5.36,
  11.62
];

const PARTIES_SEATS = [25, 18, 20, 12, 12, 12, 14, 9, 13, 8, 5, 2, 0, 0, 0];

const config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: PARTIES_PERCENTS,
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(163, 102, 0)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(220, 70, 70)",
          "rgb(114, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(110, 220, 110)",
          "rgb(75, 192, 192)",
          "rgb(255, 159, 64)",
          "rgb(153, 102, 255)",
          "rgb(0, 0, 0)",
          "rgb(220, 220, 220)",
          "rgb(201, 203, 207)"
        ]
      }
    ],
    labels: [
      "N-VA",
      "VB",
      "PS",
      "CD&V",
      "PTB/PvdA",
      "Open Vld",
      "MR",
      "sp.a",
      "Ecolo",
      "Groen",
      "cdH",
      "DéFI",
      "Partis sans sièges",
      "Votes blancs et invalides",
      "Abstentions"
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Pourcentage de vote"
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    circumference: Math.PI,
    rotation: -Math.PI,
    cutoutPercentage: 40
  }
};

window.onload = function() {
  var ctx = document.getElementById("chart-area").getContext("2d");
  window.myDoughnut = new Chart(ctx, config);
};

function toggle_view() {
  const view =
    config.data.datasets[0].data === PARTIES_PERCENTS ? "percents" : "seats";
  const isPercents = view === "percents";

  config.data.datasets[0].data = isPercents ? PARTIES_SEATS : PARTIES_PERCENTS;
  config.options.title.text = isPercents
    ? "Nombre de sièges"
    : "Pourcentage de vote";

  document.getElementById("toggle_btn").innerHTML = isPercents
    ? "Voir les pourcents"
    : "Voir les sièges";

  window.myDoughnut.update();
}
