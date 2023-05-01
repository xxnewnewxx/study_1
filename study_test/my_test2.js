let web1 = {
  id: "1",
  name: "세상",
};

let web2 = {
  id: "2",
  name: "이쁜",
};

let web3 = {
  id: "3",
  name: "산타",
};

// // {
// //   객체 값 변경
// //   2번째 id의 값을 '멋진'로 변경하시오
// // }

web2.name = "멋진";

console.log(web2.name);

// 문제 : 세상이쁜이 출력되도록 하세요

let input_data = ["세상", "이쁜", "산타"];
let output = [input_data[0], input_data[1]];
let a = input_data[0];
let b = input_data[1];
console.log(a + b);

// 문제 출력 40, 50이 나오게하세요
// {
//   let input_data = [10, 20, 30, 40, 50];
//   console.log(output_data); // [30, 40]
// }

let n_data = [10, 20, 30, 40, 50];
if (n_data.length > 1) {
  console.log(n_data[3], n_data[4]);
}
