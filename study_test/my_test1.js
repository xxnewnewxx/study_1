let cat = {
  id: 1,
  name: "odri",
  age: 8,
  color: {
    eyes: "green",
    body: "brown",
  },
  id: 2,
  name: "dodo",
  age: 3,
  color: {
    eyes: "blue",
    body: "white",
  },
};

// 문제 캣 객체의 나이값이 담긴 키값만 출력해주세요

// let odri_cat = Object.keys(cat);
// console.log(odri_cat); //캣 객체의 키값 3개가 출력된다

// let cc = odri_cat.find((key) => cat[key] == 8);

// console.log(cc);

// 문제 캣 객체들의 나이의 합을 출력하세요

let t_cat = cat.filter((item) => {
  return typeof item.age === Number;
});

console.log(t_cat);

cat.map((el) => {
  if (typeof el.age === Number) {
    return;
  }
});
console.log(el.age);
