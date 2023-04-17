// {
// 객체 선언
// 나머지 문제들 전부 해당 객체를 복사 붙여넣기해서 사용합니다
// 각각의 id와 name의 값으로 '웹페', '이지' ,'단순' 을 가지고 있는 객체를 만드시오
// }

// // {
// //   객체 값 변경
// //   2번째 id의 값을 '이퍼'로 변경하시오
// // }

let obj1 = [
  {
    id: 1,
    name: "웹페",
  },
  {
    id: 2,
    name: "이지",
  },
  {
    id: 3,
    name: "단순",
  },
];

// obj1[1].id = "이퍼";
// console.log(obj1);
console.log(Object.keys(obj1[2]), obj1[2].name);

// site_2.name = "이퍼";

// console.log(site_2.name);

// site_2.name = "산타";

// console.log(site_2.name);

// // 문제1  -- 웹페이지가 출력되도록하세요

// {
//   let input_data = ["웹페", "이지", "단순", "한보", "조기"];

//   console.log(output_data); // 웹페이지
//   //   output = 웹페이지
// }

let input_data = ["웹페", "이지", "단순", "한보", "조기"];

console.log(input_data[0], input_data[1]);

// // 문제 for문을 사용하여 11 12 13 14 15 가 출력되도록하세요
// {
//   // for 사용
//   let input_data = [1, 2, 3, 4, 5];
//   console.log(input_data); // [11,12,13,14,15]
// }

let n_num = [1, 2, 3, 4, 5];
for (let i = 1; i < 6; i++) {
  console.log(i + 10);
}

// 문제 출력 30, 40이 나오게하세요
// {
//   let input_data = [10, 20, 30, 40, 50];
//   console.log(output_data); // [30, 40]
// }

let n_data = [10, 20, 30, 40, 50];
if (n_data.length > 1) {
  console.log(n_data[2], n_data[3]);
}

// // 오늘 날씨는 매우 흐림 이라고 나오게 출력되게하세요
// {
//   let input_data = "오늘 날씨는 매우 맑음";
//   console.log(output_data); // ["오늘", "날씨는", "매우", "흐림"]
// }

let arr = [1, 2, 3];
arr[1] = 5;

(arr) => [1, 5, 3];

let w_data = ["오늘", "날씨는", "매우", "맑음"];
w_data[3] = ["흐림"];
console.log(w_data);
