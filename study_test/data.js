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

// 2. 문제를 보고 어떻게 접근하면 좋을지.

// 모든 문제들은 배열 혹은 변수에 담아서 출력해주세요.
// 배열 없이 console.log()를 사용 할 경우 재사용을 할 수가 없습니다.

// 0. 학생들이 총 몇 명이 있는지 출력해주세요.

// console.log(students.length);

// 1. 나이가 17살 미만인 학생만 출력해주세요. 조건이 있고 해당 하는 데이터가 필요할 경우 filter

// 17살 미만인 학생들의 데이터를 담고있어야 한다. = 나머지 데이터들은 필요가 없다.

// const countStudent = students.filter((value) => value.age < 17);

// filter의 경우 [], 조건에 맞을 경우 (true) 새로운 배열에 담겨져서 나온다.

// console.log(countStudent);

// 2. 2반인 학생들만 출력해주세요 // class == 2, 모든 데이터

// const selectNum2 = students.filter((value) => value.class === 2);

// console.log(selectNum2);

// 3. 성별이 "male"인 학생들만 출력해주세요

// const selectMale = students.filter((value) => value.gender === "male");

// console.log(selectMale);

// const selectMale = students.filter((value) => value.gender !== "male");

// console.log(selectMale);

// 4. 각 학생들을 "제 이름은 @@@ 이고 나이는 @@ 입니다." 형식에 맞게 출력해주세요

// filter 조건에 맞는 값들을 전부 리턴해왔죠
// map을 사용할 경우

// [ , undefined, , , , , , ,]
// 함수의 이름과, 인자의 이름과, 리턴으로 사용되는 변수의 이름
// 해당 함수가 무슨 기능을 하는지 알려줍니다.
// const changeString = students.map((value, index, zl존성용) => {
//   const message = `제 이름은 ${value.name}이고 나이는 ${array[index].age}입니다.`;

//   return message;
//   // 안내인 (return)
// });

// 5. 각 학생들의 수학, 영어의 점수를 모두 더해주고 평균을 구해주세요 (수학 + 영어) / 학생 수

// console.log(students[0].scores.math);

// let temp = 0;

// students
//   .map((value) => {
//     const sum = value.scores.math + value.scores.english;
//     return sum;
//   })
//   .forEach((v) => (temp = temp + v));

// console.log(temp / students.length);

// temp = 0;

// // 체인
// let stringNumber = "1004212332"
//   .split("")
//   .map((v) => parseInt(v))
//   .forEach((v) => (temp += v));

// 6. 2반 학생들의 수학 점수의 평균을 구해주세요
// 2반 학생들 만의 평균 점수를 구해야 해요

// 2반 학생들의 수학 점수의 총합 / 2반 학생들의 수

const selectClass2 = students.filter((value) => value.class === 2);

const class2StudentCount = selectClass2.length;
// 2반 학생들의 학생수

let temp = 0;

selectClass2.forEach((item) => (temp += item.scores.math));

const avgMathClass2 = temp / class2StudentCount;

console.log(avgMathClass2);

// 중첩객체랑, 중첩배열
// map, filter 왜 써야하는지 불변성
// 어떤 경우에 사용해야하는지
