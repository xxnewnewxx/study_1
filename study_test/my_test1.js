let cat = {
  name: "odri",
  age: 8,
  color: {
    eyes: "green",
    body: "brown",
  },
};

// 문제 캣 객체의 나이값이 담긴 키값만 출력해주세요

let odri_cat = Object.keys(cat);
// console.log(odri_cat); //캣 객체의 키값 3개가 출력된다

let cc = odri_cat.find((key) => cat[key] == 8);

console.log(cc);
