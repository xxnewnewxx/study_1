const webtoons = [
  {
    id: 1,
    title: "신의탑",
    genre: "판타지",
    contribute: {
      writer: "SIU",
      illustrator: "SIU",
      authorship: "SIU",
      company: "naver",
    },
  },
  {
    id: 2,
    title: "전지적 독자 시점",
    genre: "판타지",
    contribute: {
      writer: "싱숑",
      illustrator: "슬리피-C",
      authorship: "싱숑",
      company: "naver",
    },
  },
  {
    id: 3,
    title: "천재 타자가 강속구를 숨김",
    genre: "일상물",
    contribute: {
      writer: "황지성",
      illustrator: "스튜디오MW",
      authorship: "이블라인",
      company: "naver",
    },
  },
  {
    id: 4,
    title: "흑막 여주가 날 새엄마로 만들려고 해",
    contribute: {
      genre: "아침드라마",
      writer: ["이산시", "이지형"],
      illustrator: "하리힌",
      authorship: "목감기",
      company: "naver",
    },
  },
  {
    id: 5,
    title: "벼락승진",
    genre: "일상물",
    contribute: {
      writer: "이모세",
      illustrator: "이모세",
      authorship: "이모세",
      company: "kakao",
    },
  },
  {
    id: 6,
    title: "나혼자만 레벨업",
    genre: "일상물",
    contribute: {
      writer: "현군",
      illustrator: "장성락",
      authorship: "추공",
      company: "kakao",
    },
  },
  {
    id: 7,
    title: "악녀 시어머니를 그만뒀더니, 다들 내게 집착한다",
    genre: "스릴러",
    contribute: {
      writer: "소망",
      illustrator: "소망",
      authorship: "Rana",
      company: "kakao",
    },
  },
];

//   {
//     const result_user = users.filter((item) => item.name == "배상아");
//     console.log(result_user);
//   }

//   {
//     const result_user_ = users.map((item) => {
//       if (item.name == "배상아") return item;
//       return;
//     });
//     console.log(result_user_);
//   }

// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// console.log(search_list);

// let rrr_web = webtoons.filter((item) => item.genre == "일상물");

// console.log(rrr_web);

// 문제 6. 혼자서 작업하고 있는 즉, writer와 illustrator 같은 webtoon들의 정보만 보여주세요
// console.log(search_list);

// let work_web = webtoons.filter((item) => item.writer == "소망");

// if (item.writer == "이모세") {
//   console.log(item.writer);
// }
// if (item.writer == "SIU") {
//   console.log(item.writer);
// } else {
//   console.log("찾는 정보가 없습니다");
// }

// let arr = [5, 25, 70, 62, 20, 89];

// arr.forEach((num) => {
//   if (num == 20 && num % 2 == 0) {
//     console.log(num);
//   }
// });

// let w_web = webtoons.map((item) => {
//   if (item.writer == "소망" && item.writer == "이모세" &&  item.writer =="SIU") {

//     console.log(w_web);
//   } else {
//     console.log("정보가없습니다");
//   }
// });

let w_web = webtoons.filter((item) => {
  if (
    item.writer == "소망" &&
    item.writer == "이모세" &&
    item.writer == "SIU"
  ) {
    console.log(item.writer);
  } else {
    console.log("정보가없습니다");
  }
});
