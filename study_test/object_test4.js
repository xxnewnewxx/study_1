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
  } */

const web2 = {
  id: 8,
  title: "프론트앤드 개발자가 되는길",
  genre: "스릴러",
  contribute: {
    writer: "김성용강사",
    illustrator: "김성용강사",
    authorship: "김성용강사",
    company: "KoreaIT",
  },
};

const re_web = Object.assign(webtoons, web2);

console.log(re_web);

// 문제 2. title이 전자적 독자 시점인 webtoon의 정보만 보여주세요.
// console.log(search_list);

const rere_web = webtoons.filter((item) => item.title == "전지적 독자 시점");

console.log(rere_web);

// 문제 4. naver에서 만든 웹툰들의 정보만 보여주세요.
// console.log(search_list);

const made_web = webtoons.filter((item) => item.company == "naver");

console.log(made_web);


// 문제 5. "나혼자만 레벨업"의 genre이 이상합니다. "판타지"로 바꿔주세요.
// console.log(change_list);




const web_genre = webtoons.map((item) => {
if(item.title == "나혼자만 레벨업" ){
  item.genre = "판타지";

}
console.log(webtoons);


// 문제 3. genre이 일상물인 webtoon들의 정보만 보여주세요.
// console.log(search_list);


const rrr_web = webtoons.map((item) => {
  if(item.genre == "일상물" ){
   
    console.log(rrr_web); 
  }}
 