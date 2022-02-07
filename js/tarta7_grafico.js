var data = [
  {
    values: [
      1437, 1134, 533, 387, 382, 333, 318, 316, 265, 262, 238, 178, 177, 177,
      174,
    ],
    labels: [
      "blue_dark",
      "black",
      "white",
      "mustand",
      "ecru",
      "khaki",
      "blue",
      "pink",
      "blue_light",
      "beige",
      "green",
      "green_dark",
      "rust",
      "yellow",
      "red",
    ],
    domain: { column: 0 },
    name: "Color",
    hoverinfo: "label+percent+name",
    hole: 0.4,
    type: "pie",
    marker: {
      colors: [
        "#00008b",
        "#000000",
        "#FFFFFF",
        "#DEB24C",
        "#ECE9D6",
        "#666633",
        "#000081",
        "#FFC0CB",
        "#87CEFA",
        "#DFC8B2",
        "#008000",
        "#164A0A",
        "#B94600",
        "#FFFF00",
        "#B11730",
      ],
    },
  },
];

var layout = {
  title: "Top colores Season 7",
  annotations: [
    {
      font: {
        size: 15,
      },
      showarrow: false,
      text: "Season 7",
      x: 0.5,
      y: 0.5,
    },
  ],
  showlegend: false,
};
var config = { responsive: true };
Plotly.newPlot("season7", data, layout, config);
