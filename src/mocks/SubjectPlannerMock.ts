export const mockData = [
  {
    subject_id: "001",
    subject_name: "Calculus II",
    topics: [
      {
        id: "differential-equations",
        title: "Differential Equations",
        examWeight: 20,
        hoursNeeded: 10,
        topicsCovered: [
          { name: "General Solution, Particular Solution", complete: false },
          { name: "Separable Equation", complete: false },
          { name: "Linear Equation", complete: false },
          { name: "Bernoulli's Equation", complete: false },
        ],
        schedule: {
          day: "Monday",
          time: "09:00 - 10:30",
          location: "ตึก 100 ปี ห้อง 404",
        },
      },
      {
        id: "convergence-series",
        title: "Evaluate Convergent and Divergent Series",
        examWeight: 50,
        hoursNeeded: 50,
        topicsCovered: [
          { name: "Test of Divergence", complete: false },
          { name: "Integral Test", complete: false },
          { name: "Direct Comparison Test", complete: false },
          { name: "Limit Comparison Test", complete: false },
          { name: "Alternating Series Test", complete: false },
          { name: "Ratio and Root Tests", complete: false },
        ],
        schedule: {
          day: "Monday",
          time: "09:00 - 10:30",
          location: "ตึก 100 ปี ห้อง 404",
        },
      },
      {
        id: "power-series",
        title: "Power Series",
        examWeight: 30,
        hoursNeeded: 35,
        topicsCovered: [
          {
            name: "Representative of Functions as Power Series",
            complete: true,
          },
          { name: "Taylor and Maclaurin Series", complete: false },
        ],
        schedule: {
          day: "Monday",
          time: "09:00 - 10:30",
          location: "ตึก 100 ปี ห้อง 404",
        },
      },
    ],
  },
];
