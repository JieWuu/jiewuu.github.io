var data = [
    {
      values: [2089, 1296, 499, 448, 341, 293, 284, 247, 244, 223, 213, 204, 202, 186, 175],
      labels: ['black',
      'blue_dark',
      'rust',
      'green_dark',
      'khaki',
      'mustand',
      'garnet',
      'brown',
      'ecru',
      'pink',
      'beige',
      'white',
      'grey_dark',
      'blue',
      'red'],
      domain: { column: 0 },
      name: "Color",
      hoverinfo: "label+percent+name",
      hole: 0.4,
      type: "pie",
      marker: {
        colors: ['#000000',
        '#00008b',
        '#B94600',
        '#164A0A',
        '#666633',
        '#DEB24C',
        '#800000',
        '#462C0E',
        '#ECE9D6',
        '#FFC0CB',
        '#DFC8B2',
        '#FFFFFF',
        '#5F5E5E',
        '#000081',
        '#B11730'],
      },
    },
  ];
  
  var layout = {
    title: "Top colores Season 8",
    annotations: [
      {
        font: {
          size: 15,
        },
        showarrow: false,
        text: "Season 8",
        x: 0.5,
        y: 0.5,
      },
    ],
    showlegend: false,
  };
  var config = { responsive: true };
  Plotly.newPlot("season8", data, layout, config);
  