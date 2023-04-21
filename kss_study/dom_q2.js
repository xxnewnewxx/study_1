const users = [
  {
    id: 1,
    name: "김성용",
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: "이수박",
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: "오렌지",
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: "이멜론",
    age: 28,
    height: 175,
  },
];

//   문제1. 유저 추가하기
//     내가 추가하고자 하는 유저를 추가해야합니다
//     단 id는 고유 번호로 반드시 순서대로일 필요는 없지만, 어떠한 경우에도 겹쳐서 안됩니다

// let n_user = {
//   id: 5,
//   name: "김포도",
//   age: 21,
//   height: 170,
// };

// let result = {
//   ...user,
//   ...n_user,
// };

// console.log(result);

// let n_user = {
//   id: 5,
//   name: "김포도",
//   age: 21,
//   height: 170,
// };

// let final = Object.assign(users, n_user);
// console.log(final);

// let f_user = users.push({
//   id: 5,
//   name: "김포도",
//   age: 21,
//   height: 170,
// });

// console.log(users);

// 문제4. 유저 조회하기
//   위의 모든 상황이 적용된 결과를을 콘솔창에 띄울 것
//   단 위의 수정 내용은 모두 적용된 상태여야 한다.

// 값 수정하기
// let change_list = webtoons.find((mov) => mov.title === "나혼자만 레벨업");
// change_list.genre = "판타지";
// console.log(change_list);

let mm = users.find((el) => el.name == "김성용");
mm.name = "김복숭아";
console.log(users);
