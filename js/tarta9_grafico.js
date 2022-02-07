var data = [
    {
      values: [1396, 1224, 480, 417, 401, 359, 333, 244, 210, 181, 139, 125, 123, 119, 118],
      labels: ['black',
      'blue_dark',
      'white',
      'khaki',
      'ecru',
      'beige',
      'blue_light',
      'blue',
      'green_dark',
      'pink',
      'green',
      'yellow',
      'green_light',
      'gray_light',
      'rust'],
      domain: { column: 0 },
      name: "Color",
      hoverinfo: "label+percent+name",
      hole: 0.4,
      type: "pie",
      marker: {
        colors: ['#000000',
        '#00008b',
        '#FFFFFF',
        '#666633',
        '#ECE9D6',
        '#DFC8B2',
        '#87CEFA',
        '#000081',
        '#164A0A',
        '#FFC0CB',
        '#008000',
        '#FFFF00',
        '#BBE2AD',
        '#D3D3D3',
        '#B94600'],
      },
    },
  ];
  
  var layout = {
    title: "Top colores Season 9",
    annotations: [
      {
        font: {
          size: 15,
        },
        showarrow: false,
        text: "Season 9",
        x: 0.5,
        y: 0.5,
      },
    ],
    showlegend: false,
  };
  var config = { responsive: true };
  Plotly.newPlot("season9", data, layout, config);
  