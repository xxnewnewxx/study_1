// 1번 문제
// {id: 5, name: "이지형", age: 19, height: 200} 데이터를 추가하기

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

// const newUser = {
//   ...users,
//   4: { id: 5, name: "이지형", age: 19, height: 200 },
// };
// console.log(newUser);

// // 문제. 배상아 객체를 출력하세요

// console.log(users[3]);

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

// 3번 문제
// 객체의 해당 데이터 값만 수정하기
// 데이터중 name이 '윤진섭'에 해당하는 height만 190으로 데이터를 변경하고
// 나머지 데이터들까지 모두 출력한다.

// {
//   const result_user = users.map((item) => {
//     if (item.name == "윤진섭") {
//       item.height = 190;
//     }

//     return;
//   });
//   return;
//   console.log(result_user);
// }

// // 4번 문제
// // height가 170 이하인 user만 출력하시오
// {
//   const result_user = users.filter((item) => item.height >= 170);
//   console.log(result_user);
// }

// // 5번 문제 (심화)
// // name의 첫 글자가 '윤'으로 시작하는 이름만 출력하시오

// /*
// [
//   { id: 2, name: '윤진섭', age: 24, height: 177 },
//   { id: 3, name: '윤국현', age: 22, height: 175 }
// ] */

// {
//   const result_user = users.map((item) => item.name[0] == "윤");
//   return;
// }
// console.log(result_user);
