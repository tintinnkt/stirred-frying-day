export const mockData = [
  {
    planner_id: "001",
    subject_name: "Calculus II",
    topics: [
      {
        id: "differential-equations",
        title: "Differential Equations",
        examWeight: 20,
        hoursNeeded: 1,
        topicsCovered: [
          {
            id: "calculus-001",
            name: "General Solution, Particular Solution",
            complete: false,
          },
          { id: "calculus-002", name: "Separable Equation", complete: true },
          { id: "calculus-003", name: "Linear Equation", complete: false },
          { id: "calculus-004", name: "Bernoulli's Equation", complete: false },
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
          { id: "calculus-005", name: "Test of Divergence", complete: false },
          { id: "calculus-006", name: "Integral Test", complete: false },
          {
            id: "calculus-007",
            name: "Direct Comparison Test",
            complete: false,
          },
          {
            id: "calculus-008",
            name: "Limit Comparison Test",
            complete: false,
          },
          {
            id: "calculus-009",
            name: "Alternating Series Test",
            complete: false,
          },
          { id: "calculus-010", name: "Ratio and Root Tests", complete: false },
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
            id: "calculus-011",
            name: "Representative of Functions as Power Series",
            complete: true,
          },
          {
            id: "calculus-012",
            name: "Taylor and Maclaurin Series",
            complete: false,
          },
        ],
        schedule: {
          day: "Monday",
          time: "09:00 - 10:30",
          location: "ตึก 100 ปี ห้อง 404",
        },
      },
    ],
  },
  {
    planner_id: "002",
    subject_name: "PROG METH",
    topics: [
      {
        id: "java-basics",
        title: "Java Basics",
        examWeight: 15,
        hoursNeeded: 5,
        topicsCovered: [
          { id: "prog-001", name: "Syntax and Variables", complete: true },
          {
            id: "prog-002",
            name: "Control Flow (if-else, loops)",
            complete: true,
          },
          { id: "prog-003", name: "Functions and Methods", complete: false },
        ],
        schedule: {
          day: "Tuesday",
          time: "10:00 - 11:30",
          location: "CS Building Room 201",
        },
      },
      {
        id: "oop-concepts",
        title: "Object-Oriented Programming",
        examWeight: 40,
        hoursNeeded: 20,
        topicsCovered: [
          { id: "prog-004", name: "Classes and Objects", complete: true },
          {
            id: "prog-005",
            name: "Encapsulation and Abstraction",
            complete: false,
          },
          {
            id: "prog-006",
            name: "Inheritance and Polymorphism",
            complete: false,
          },
          {
            id: "prog-007",
            name: "Interfaces and Abstract Classes",
            complete: false,
          },
        ],
        schedule: {
          day: "Tuesday",
          time: "10:00 - 11:30",
          location: "CS Building Room 201",
        },
      },
      {
        id: "data-structures",
        title: "Data Structures in Java",
        examWeight: 25,
        hoursNeeded: 15,
        topicsCovered: [
          { id: "prog-008", name: "Arrays and ArrayLists", complete: true },
          { id: "prog-009", name: "Linked Lists", complete: false },
          { id: "prog-010", name: "Stacks and Queues", complete: false },
          { id: "prog-011", name: "HashMaps and Sets", complete: false },
        ],
        schedule: {
          day: "Tuesday",
          time: "10:00 - 11:30",
          location: "CS Building Room 201",
        },
      },
      {
        id: "exception-handling",
        title: "Exception Handling",
        examWeight: 10,
        hoursNeeded: 5,
        topicsCovered: [
          { id: "prog-012", name: "Try-Catch Blocks", complete: false },
          { id: "prog-013", name: "Custom Exceptions", complete: false },
        ],
        schedule: {
          day: "Tuesday",
          time: "10:00 - 11:30",
          location: "CS Building Room 201",
        },
      },
      {
        id: "design-patterns",
        title: "Design Patterns",
        examWeight: 10,
        hoursNeeded: 5,
        topicsCovered: [
          { id: "prog-014", name: "Singleton Pattern", complete: false },
          { id: "prog-015", name: "Factory Pattern", complete: false },
          { id: "prog-016", name: "Observer Pattern", complete: false },
        ],
        schedule: {
          day: "Tuesday",
          time: "10:00 - 11:30",
          location: "100 Building Room 201",
        },
      },
    ],
  },
];
