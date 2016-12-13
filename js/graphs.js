//data[0] = benefits, data[1] = leave, data[2] = productivity, data[3] = currentDisorder, data[4] = negResponse
var parsedData = getData();

var benefits = c3.generate({
    title: {
      text: 'Company Insurance Covers Mental Health Benefits'
    },
    data: {
        columns: [
            ['Yes', 531],
            ['No', 213],
            ['I don\'t know', 319],
            ['Not Eligible / N/A', 83]
        ],
        type: 'pie',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: true
    },
    color: {
      pattern: ['rgb(63, 188, 210)', 'rgb(109, 236, 198)', 'rgb(135, 92, 185)', 'rgb(7, 77, 61)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#benefits"
});


var leave = c3.generate({
    title: {
      text: 'How Easily Employees Can Take Leave for Mental Illness'
    },
    data: {
        json: parsedData[1],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(105, 0, 100)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#leave"
});


var productivity = c3.generate({
    title: {
      text: 'Does Mental Illness Affect Your Productivity'
    },
    data: {
        json: parsedData[2],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(67, 127, 190)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#productivity"
});

var currentDisorder = c3.generate({
    title: {
      text: 'Currently Have a Disorder'
    },
    data: {
        json: parsedData[3],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(133, 11, 62)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#disorders"
});


var negResponse = c3.generate({
    title: {
      text: 'Observed or Experienced Negative Response to a Mental Issue'
    },
    data: {
        json: parsedData[4],
        type: 'bar',
        keys: {
          x: 'x',
          value: ['total']
        }
    },
    legend: {
      position: 'right',
      show: false
    },
    color: {
      pattern: ['rgb(11, 133, 56)']
    },
    axis: {
      y: {
        label: {
          text: "Count",
          position: "outer-middle"
        }
      },
      x: {
        type: 'category'
      }
    },
    bindto: "#response"
});
