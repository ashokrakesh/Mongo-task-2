//1)Find all the topics and tasks which are thought in the month of October

db.topictaught
  .aggregate([
    {
      $project: {
        topicName: 1,
        date: "$date",
        month: {
          $month: "$date",
        },
        year: {
          $year: "$date",
        },
      },
    },
    {
      $match: {
        month: 10,
        year: 2020,
      },
    },
    {
      $project: {
        topicName: 1,
        date: 1,
      },
    },
  ])
  .pretty();

//2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company
  .aggregate([
    {
      $project: {
        driveName: "$companyName",
        date: 1,
        day: { $dayOfMonth: "$date" },
        month: { $month: "$date" },
        year: { $year: "$date" },
      },
    },
    {
      $match: {
        year: {
          $eq: 2020,
        },
        month: {
          $eq: 10,
        },
        day: {
          $gte: 15,
          $lte: 31,
        },
      },
    },
    {
      $project: {
        driveName: 1,
        date: 1,
      },
    },
  ])
  .pretty();

//3) Find all the company drives and students who are appeared for the placement.
db.drives
  .aggregate([
    {
      $lookup: {
        from: "ZenUsers",
        localField: "userIds",
        foreignField: "userId",
        as: "result",
      },
    },
  ])
  .pretty();

//Find the number of problems solved by the user in codekata.
db.codekatasolved.aggregate([
  {
    $group: { _id: "$userId", total: { $sum: "$problemsSolved" } },
  },
]);
//Find all the mentors with who has the mentee's count more than 15.
db.mentors.find({ $no_of_mentees: { $gt: 15 } });
