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

// 문제 1. 해당 데이터를 추가해주세요
/* 
{
        id: 8,
        title: '프론트앤드 개발자가 되는길',
        genre: '스릴러',
        contribute: {
            writer: '김성용강사',
            illustrator: '김성용강사',
            authorship: '김성용강사',
            company: 'KoreaIT',
        },
},
*/
// console.log(added_list);

// console.log(search_list);

// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// console.log(search_list);

// 문제 4. naver에서 만든 웹툰들의 정보만 보여주세요.
// console.log(search_list);

// 문제 5. "나혼자만 레벨업"의 genre이 이상합니다. "판타지"로 바꿔주세요.
// console.log(change_list);

// 문제 6. 혼자서 작업하고 있는 즉, writer와 illustrator 같은 webtoon들의 정보만 보여주세요
// console.log(search_list);

// 문제 7. 작가중에 이상하게 이름이 올라가있는 사람을 지워주고 자연스럽게 수정해주세요 해당 작품만 보여주세요
// console.log(change_list);

//문제 1번 해당 데이터를 추가해주세요 ---------(다은 풀이)

// let added_list = webtoons.push({
//   id: 8,
//   title: "프론트앤드 개발자가 되는길",
//   genre: "스릴러",
//   contribute: {
//     writer: "김성용강사",
//     illustrator: "김성용강사",
//     authorship: "김성용강사",
//     company: "KoreaIT",
//   },
// });
// console.log(added_list);
// console.log(webtoons);

//-----------------------------------------------------------------------------------------

// 문제 2. title이 전자적 독자 시점인 webtoon의 정보만 보여주세요.

// let a = webtoons.find((mov) => mov.title === "전지적 독자 시점");
// console.log(a);

// let search_list = webtoons.filter((el) => el.title === "전지적 독자 시점");
// console.log(search_list);

//-----------------------------------------------------------------------------------
// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// console.log(search_list);

//다은풀이
// let rrr_web = webtoons.filter((item) => item.genre == "일상물");

// console.log(rrr_web);

// **진섭님 풀이**
// 출력방법 1 (for -> 정상)
// for (i = 0; i < webtoons.length; i++) {
//   if (webtoons[i].genre === "일상물") {
//     console.log(webtoons[i]);
//   }
// }

// **진섭님 풀이**
// 출력방법 3 (find -> find 로 하면 첫번째 한번만 출력된다. 다른방법은?)
// let search_list = webtoons.find((mov) => mov.genre === "일상물");
// console.log(search_list);

// **진섭님 풀이**
// for (i = 0; i < webtoons.length; i++) {
//   let search_list = webtoons.find((mov) => mov.genre === "일상물");
// }
// console.log(search_list);

// 문제 4. naver에서 만든 웹툰들의 정보만 보여주세요. (상아님문제)
// console.log(search_list);
//상아님 풀이
// let search_list = webtoons.filter(
//   (el) => el["contribute"]["company"] === "naver"
// );
// console.log(search_list);

// 진섭님 풀이

// let search_list = webtoons.filter((mov) => mov.contribute.company === "naver");
// console.log(search_list);

// 출력방법 3 (find + for 문으로 출력하려는데 왜 안되지?) --진섭님 풀이
// for (i = 0; i < webtoons.length; i++) {
//   let search_list = webtoons.find((mov) => mov.contribute.company === "naver");
//   console.log(search_list);
// }

// 출력방법 4 (forEach -> 정상)  -- 진섭님 풀이
// webtoons.forEach((mov) => {
//   if (mov.contribute.company === "naver") {
//     console.log(mov);
//   }
// });

// 문제 5. "나혼자만 레벨업"의 genre이 이상합니다. "판타지"로 바꿔주세요. -- 진섭님 문제
// console.log(change_list);

// 출력방법 1 (find -> 정상) --진섭님 풀이
// let change_list = webtoons.find((mov) => mov.title === "나혼자만 레벨업");
// change_list.genre = "판타지";
// console.log(change_list);

// let change_list = webtoons.map((el) =>
//   // 그렇지 않으면 object를 return
//   el.title === "나혼자만 레벨업" ? { ...el, genre: "판타지" } : el
// );
// console.log(change_list);

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

// let w_web = webtoons.filter((item) => {
//   if (
//     item.contribute.writer == "소망" &&
//     item.contribute.writer == "이모세" &&
//     item.contribute.writer == "SIU"
//   ) {
//     console.log(item.contribute.writer);
//   } else {
//     console.log("정보가없습니다");
//   }
// });

// for (let i = 0; i < Object.keys(팝업).length; i++) {
//   console.log(팝업[Object.keys(팝업)[i]].tab_name);
// }

// 문제 7. 작가중에 이상하게 이름이 올라가있는 사람을 지워주고 자연스럽게 수정해주세요 해당 작품만 보여주세요
// console.log(change_list);
// let j_webtoon = webtoons.filter(
//   (el_item) => el_item.contribute.writer == ["이지형"]
// );
// console.log(j_webtoon);

//다은풀이

webtoons.map((e) => {
  if (typeof e.contribute.writer === "object") {
    e.contribute.writer = "이산시";
  }
  console.log(...webtoons);
});
