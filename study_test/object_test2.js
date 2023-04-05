// {
// 객체 선언
// 나머지 문제들 전부 해당 객체를 복사 붙여넣기해서 사용합니다
// 각각의 id와 name의 값으로 '웹페', '이지' ,'단순' 을 가지고 있는 객체를 만드시오
// }

// {
//   객체 접근
//   console.log(output_data); // 이지
// }

let site_1 = {
  id: "1",
  name: "웹페",
};

let site_2 = {
  id: "1",
  name: "이지",
};

let site_3 = {
  id: "1",
  name: "단순",
};

console.log(site_1.name);

// {
//   객체 값 변경
//   2번째 id의 값을 '이퍼'로 변경하시오
// }

site_2.name = "이퍼";

console.log(site_2.name);

site_2.name = "산타";

console.log(site_2.name);

// {
//   객체 찾기
//   3번째 단순만 Key, value를 둘 다 출력하시오
// }

console.log(site_3.entries);
