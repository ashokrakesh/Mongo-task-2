db.ZenUsers.insertMany([
  {
    userId: 1,
    name: "Rakesh",
    mobile: "99944664330",
    email: "rakeshashok93@gmail.com",
  },
  {
    userId: 2,
    name: "naveen",
    mobile: "6456628882",
    email: "naveen@gmail.com",
  },
  {
    userId: 3,
    name: "sumana",
    mobile: "9876728890",
    email: "sumana@hotmail.com",
  },
  {
    userId: 4,
    name: "sandya",
    mobile: "7893993002",
    email: "sandya@outlook.com",
  },
  {
    userId: 5,
    name: "madhusree",
    mobile: "9385999920",
    email: "madhusree@outlook.com",
  },
]);

//  attendance collection:
db.attendance.insertMany([
  {
    userId: 1,
    date: new Date("2023-09-15"),
    attended: "no",
  },
  {
    userId: 2,
    date: new Date("2023-09-15"),
    attended: "no",
  },
  {
    userId: 3,
    date: new Date("2023-09-15"),
    attended: "yes",
  },
  {
    userId: 4,
    date: new Date("2023-09-15"),
    attended: "yes",
  },
  {
    userId: 5,
    date: new Date("2023-09-15"),
    attended: "no",
  },
]);
// Insert into codekata collection:
db.codekatasolved.insertMany([
  {
    userId: 1,
    rank: 600,
    geekscoins: 4800,
    problemsSolved: 120,
  },
  {
    userId: 2,
    rank: 299,
    geekscoins: 12000,
    problemsSolved: 300,
  },
  {
    userId: 3,
    rank: 380,
    geekscoins: 6800,
    problemsSolved: 170,
  },
  {
    userId: 4,
    rank: 990,
    geekscoins: 2800,
    problemsSolved: 70,
  },
  {
    userId: 5,
    rank: 280,
    geekscoins: 16800,
    problemsSolved: 420,
  },
]);

// Insert into drives collection:
db.company.insertMany([
  {
    driveId: 1,
    driveName: "google",
    userIds: [1, 2, 3, 4],
    date: new Date("2020-10-14"),
  },
  {
    driveId: 2,
    driveName: "Infosys",
    userIds: [1, 2, 3, 4],
    date: new Date("2020-10-16"),
  },
  {
    driveId: 3,
    driveName: "netflix",
    userIds: [3, 4],
    date: new Date("2020-10-20"),
  },
  {
    driveId: 4,
    driveName: "facebook",
    userIds: [1, 2, 3],
    date: new Date("2020-10-29"),
  },
  {
    driveId: 5,
    driveName: "TCS",
    userIds: [1, 2, 3, 4],
    date: new Date("2020-11-30"),
  },
]);
// topics collection:
db.topictaught.insertMany([
  {
    topicId: 1,
    topicName: "Javascript-functions",
    tasks: [
      "difference between arrow and normal function declaration",
      "iffi",
      "async function",
    ],
    date: new Date("2023-10-29"),
  },
  {
    topicId: 2,
    topicName: "deploy",
    tasks: ["deploy website", "deploy webapp"],
    date: new Date("2023-10-29"),
  },
  {
    topicId: 3,
    topicName: "react",
    tasks: ["react-crud", "school-management"],
    date: new Date("2023-10-29"),
  },
  {
    topicId: 4,
    topicName: "node-js",
    tasks: ["create-table", "update-table", "insert"],
    date: new Date("2023-11-29"),
  },
  {
    topicId: 5,
    topicName: "mongodb",
    tasks: ["designdatabse", "write-querries"],
    date: new Date("2023-12-29"),
  },
]);

// Insert into mentors collection:
db.mentors.insertMany([
  {
    mentorId: 5,
    menteeIds: [1, 2, 3, 4, 5, 6],
    no_of_mentees:6
  },
  {
    mentorId: 6,
    menteeIds: [7, 8, 9, 12, 13],
    no_of_mentees:5
  },
  {
    mentorId: 7,
    menteeIds: [1, 2, 3],
    no_of_mentees:3
  },
  {
    mentorId: 8,
    menteeIds: [1, 6, 9, 30],
    no_of_mentees:4
  },
  {
    mentorId: 9,
    menteeIds: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20],
    no_of_mentees:16
  },
]);

// Insert into tasks collection:
db.tasksDone.insertMany([
  {
    userId: 1,
    taskName: "school management system",
    date: new Date("2020-10-16"),
    submissionDate: new Date("2020-10-29"),
  },
  {
    userId: 2,
    taskName: "school management system",
    date: new Date("2020-10-16"),
    submissionDate: new Date("2020-11-3"),
  },
  {
    userId: 3,
    taskName: "school management system",
    date: new Date("2020-10-16"),
    submissionDate: new Date("2020-10-28"),
  },
  {
    userId: 4,
    taskName: "school management system",
    date: new Date("2020-10-16"),
    submissionDate: new Date("2020-10-26"),
  },
  {
    userId: 5,
    taskName: "school management system",
    date: new Date("2020-10-16"),
    submissionDate: new Date("2020-11-1"),
  },
]);




  