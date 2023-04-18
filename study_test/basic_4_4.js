const users = [
  {
    id: 1,
    name: "문다은",
    age: 20,
    height: 165,
  },
  {
    id: 2,
    name: "윤진섭",
    age: 24,
    height: 177,
  },

  {
    id: 3,
    name: "윤국현",
    age: 22,
    height: 175,
  },

  {
    id: 4,
    name: "배상아",
    age: 23,
    height: 168,
  },
];

{
  const result_user = users.filter((item) => item.name == "배상아");
  console.log(result_user);
}

{
  const result_user_ = users.map((item) => {
    if (item.name == "배상아") return item;
    return;
  });
  console.log(result_user_);
}
