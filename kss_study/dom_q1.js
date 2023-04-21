const user = {
  name: "김성용",
  age: 20,
  height: 190,
};

// 문제2. 값이 “김성용”인 속성의 key 찾기

const kk = Object.keys(user);
console.log(kk);
const result = kk.find((key) => user[key] === "김성용");
console.log(result);

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
  (1) user[”key”], user.key
  (2) Object.keys()
  (3) Object.values()
  (4) Object.entries()
  (5) for in
  */

//   (1) user[”key”], user.key

// console.log(user.name, user.age, user.height);
// console.log(user["key"]);

// {
//   for (variable in user) {
//     console.log(variable + user[variable]);
//   }
// }

//(2) Object.keys() 풀기
// Object.keys() 메서드란?
// 객체를 만들다 보면 상황에 따라서는 객체의 key값만 가지고 오고 싶을 때도 있다.

// Object.keys() 메서드는 객체(typeof 연산자로 확인했을 때 object가 반환되는)의 프로퍼티들 중에서 key값, 다른 말로 프로퍼티 네임들만 묶어서 배열로 반환하는 메서드이다.

// const n_user = Object.keys(user);
// console.log(n_user);

// (3) Object.values()
// 특정 객체를 대상으로 value값들만 뽑아서 배열로 반환하는 메서드라 생각하면 된다.
// Object.values() 는 파라매터로 전달된 객체가 가지는 열거 가능한 속성의 값들로 구성된 배열을 반환합니다. 배열의 값들이 순서는 오브젝트의 속성을 for in 구문등으로 반복한 결과와 동일합니다. (참고로 for in 구문은 순서를 보장하지 않습니다)

// const nn_user = Object.values(user);
// console.log(nn_user);

// (4) Object.entries()
// 자바스크립트 객체를 배열로 변환해주는 메소드!
// 객체의 {key : value} 형식을 배열 형태의 [key, value] 로 변환하여 준다.
// Object.entries(user);
// console.log(user);

//(5) for in
// let data = {};
// {
//   for (let i in Object.keys(user)) {
//     data[(Object.keys(user)[i] = user[Object.keys(user)[i]])];
//   }
//   console.log(user);
// }

// // for in문은 객체의 키를 하나씩 가져온다
// {
//   for (const key in user) {
//     console.log(user[key]);
//   }
// }
