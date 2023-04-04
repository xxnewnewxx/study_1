// ** filter
//      배열의 모든 요소를 순회하며 콜백함수의 반환 값이 true인 요소만 추출하여
//      새로운 배열을 만든다 false면 새로운 배열에서 제외한다.

const arr = [
  {
    id: 1,
    name: "김성용",
  },
  {
    id: 2,
    name: "바나나",
  },
  {
    id: 3,
    name: "딸기",
  },
];

const filterArr = arr.filter((el, index, originArr) => {
  return el.id !== 1;
  // true인것만 추출한다.
});

console.log(filterArr);
