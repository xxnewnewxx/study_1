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

for (let i = 0; i < obj.length; i++) {
  if (obj[i].name === "단순") {
    for (let key in obj[i]) {
      if (key !== "id") {
        console.log(key, obj[i][key]);
      }
    }
  }
}
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
let output = [input_data[0], input_data[1]];
let a = input_data[0];
let b = input_data[1];
console.log(a + b); // 웹페이지
//let output_data = input_data.slice(0,2).join("")
//console.log(output);

// // 문제 for문을 사용하여 11 12 13 14 15 가 출력되도록하세요
// {
//   // for 사용
//   let input_data = [1, 2, 3, 4, 5];
//   console.log(input_data); // [11,12,13,14,15]
// }

let n_num = [1, 2, 3, 4, 5];
for (let i = 1; i <= n_num.length; i++) {
  let r_num = i + 10;
  console.log(r_num);
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

// for 사용
let input_data2 = [1, 2, 3, 4, 5];

for (let i = 0; i < input_data2.length; i++) {
  input_data2[i] += 10;
}

console.log(input_data2); // [11,12,13,14,15]

// {
//     let input_data = [10, 20, 30, 40, 50];
//     console.log(output_data); // [30, 40]
//   }

{
  let input_data5 = [10, 20, 30, 40, 50];
  console.log(input_data5[2], input_data5[3]);
}

{
  let input_data5 = [10, 20, 30, 40, 50];
  let input_data6 = [input_data5[2], input_data5[3]];
  console.log(input_data6);
}

{
  let input_data7 = [10, 20, 30, 40, 50];
  let output_data7 = input_data7.slice(2, 4);
  console.log(output_data7); // [30, 40]
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

let ww_data = ["오늘", "날씨는", "매우", "맑음"];
ww_data[3] = "흐림";
console.log(ww_data);

// console.log(" 13. ----------- 문다은 ")

// let input_data10 = "오늘 날씨는 매우 맑음";
// // let output_data10 = input_data10.split(" ");
// // let output_data10 = input_data10.replace("맑음","흐림").split(" ");
// let output_data10 = input_data10.replace("맑음","흐림").split(" ");
// console.log(output_data10); // ["오늘", "날씨는", "매우", "흐림"]

// let w_data = ["오늘", "날씨는", "매우", "맑음"];
// w_data[3] = ["흐림"];
// console.log(w_data);

//   let ww_data = ["오늘", "날씨는", "매우", "맑음"];
// ww_data[3] = "흐림";
// console.log(ww_data);

// let input_data = "오늘 날씨는 매우 맑음";
// let output_data = input_data.split(" ");
// 1. 배열의 인덱스를 이용해서 변경하는 방법
// output_data[3] = "흐림";

// 2. splice() 메소드 사용하는 방법
//  output_data.splice(3, 1, "흐림");
//  console.log(output_data); // ["오늘", "날씨는", "매우", "흐림"]
