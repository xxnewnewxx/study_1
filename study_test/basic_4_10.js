const students = [
  {
    id: 1,
    name: "김철수",
    age: 18,
    gender: "male",
    grade: 3,
    class: 1,
    scores: {
      math: 85,
      english: 92,
      science: 78,
    },
  },
  {
    id: 2,
    name: "이영희",
    age: 17,
    gender: "female",
    grade: 3,
    class: 2,
    scores: {
      math: 78,
      english: 95,
      science: 87,
    },
  },
  {
    id: 3,
    name: "박민수",
    age: 16,
    gender: "male",
    grade: 2,
    class: 1,
    scores: {
      math: 92,
      english: 88,
      science: 90,
    },
  },
  {
    id: 4,
    name: "정미영",
    age: 18,
    gender: "female",
    grade: 3,
    class: 3,
    scores: {
      math: 90,
      english: 82,
      science: 93,
    },
  },
  {
    id: 5,
    name: "이영수",
    age: 17,
    gender: "male",
    grade: 2,
    class: 2,
    scores: {
      math: 80,
      english: 85,
      science: 88,
    },
  },
  {
    id: 6,
    name: "한지민",
    age: 18,
    gender: "female",
    grade: 3,
    class: 1,
    scores: {
      math: 95,
      english: 92,
      science: 96,
    },
  },
  {
    id: 7,
    name: "신동엽",
    age: 16,
    gender: "male",
    grade: 2,
    class: 3,
    scores: {
      math: 87,
      english: 89,
      science: 91,
    },
  },
  {
    id: 8,
    name: "최지우",
    age: 17,
    gender: "female",
    grade: 2,
    class: 2,
    scores: {
      math: 92,
      english: 87,
      science: 85,
    },
  },
  {
    id: 9,
    name: "장우혁",
    age: 16,
    gender: "male",
    grade: 3,
    class: 3,
    scores: {
      math: 88,
      english: 84,
      science: 90,
    },
  },
  {
    id: 10,
    name: "홍길동",
    age: 18,
    gender: "male",
    grade: 3,
    class: 2,
    scores: {
      math: 85,
      english: 90,
      science: 92,
    },
  },
];

// 모든 문제들은 스프레드 연산자를 사용하는 것을 권장합니다.

// 1. 2반의 학생들의 정보를 모두 보여주세요

// let c_result = students.map((el) => {
//   if (el.class == 2) return el;
//   return;
// });
// console.log(c_result);

// 4. 홍길동의 이름을 장보고로 변경해주고 모두 보여주세요

// webtoons.map((e) => {
//     if (typeof e.contribute.writer === "object") {
//       e.contribute.writer = "이산시";
//     }
//     console.log(...webtoons);
//   });

// students.map((el) => {
//   if (students.name === "홍길동") {
//     console.log(students.name);
//     students.name = "장보고";
//   }
// });
// {
//   const result_user = users.filter((item) => item.height <= 170);
//   console.log(result_user);
// }

// let k_result = students.filter((item) => item.name == "홍길동");

// // console.log(k_result);
// k_result.name = "장보고";
// console.log(k_result);

let h = students.map((item) =>
  item.name === "홍길동" ? { ...item, name: "장보고" } : item
);
console.log(h);
