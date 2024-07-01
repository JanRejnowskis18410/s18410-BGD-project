db = db.getSiblingDB("chat");

if (!db.users) {
  db.createCollection("users");
}

usersToInsert = [
  {
    _id: ObjectId("667f2843cd761201ca47ed16"),
    name: "Jan Kowalski",
    email: "kowalski@example.com",
    password: "$2a$10$GXv4cdmvLT7eNpnXZXGfh.GO99HD/5jzZ0PJfIF/2Leml1.Vct0ZO",
    pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    createdAt: ISODate("2024-06-28T21:16:51.188Z"),
    updatedAt: ISODate("2024-06-28T21:16:51.188Z"),
    __v: 0,
  },
  {
    _id: ObjectId("667f2cbccd761201ca47ed2f"),
    name: "Szymon Nowak",
    email: "nowak@example.com",
    password: "$2a$10$76rT0KDe7wFCJHJDANzlvejy9VJ6V8QtB/WZJwCYDmOL83agNfKEe",
    pic: "http://res.cloudinary.com/piyushproj/image/upload/v1719610551/uqrx6ytjk64er94k1zyf.jpg",
    createdAt: ISODate("2024-06-28T21:35:56.327Z"),
    updatedAt: ISODate("2024-06-28T21:35:56.327Z"),
    __v: 0,
  },
  {
    _id: ObjectId("667f327ffe976e20818fe70f"),
    name: "Tomasz Testowy",
    email: "testowy@example.com",
    password: "$2a$10$vrwaPF5cr4ZEjR4Yc8h3supSTASgpMA2CDVBUYalxWLCl.YX8FqZ6",
    pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    createdAt: ISODate("2024-06-28T22:00:31.186Z"),
    updatedAt: ISODate("2024-06-28T22:00:31.186Z"),
    __v: 0,
  },
  {
    _id: ObjectId("667f4b06fe976e20818fe785"),
    name: "Ewa Adamska",
    email: "adamska@example.com",
    password: "$2a$10$hzRj6apUSJ1x5itSwFs/gOx4sdPHVVU2/6q3ysdbX5G99sT1g/Ama",
    pic: "http://res.cloudinary.com/dq7ehxcbk/image/upload/v1719618306/n9dwweusevmnaejj8nty.jpg",
    createdAt: ISODate("2024-06-28T23:45:10.754Z"),
    updatedAt: ISODate("2024-06-28T23:45:10.754Z"),
    __v: 0,
  },
];

try {
  const result = db.users.insertMany(usersToInsert);
  print(`Inserted ${result.insertedCount} users successfully.`);
} catch (error) {
  if (error.code === 11000) {
    print("Duplicate key error: Some users already exist in the database.");
  } else {
    print(`Error inserting users: ${error}`);
  }
}

print("Users created successfully.");
