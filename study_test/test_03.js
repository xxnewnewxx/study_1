// 문제3. 변수의 타입
// 다음 출력 값으로 올바른 것은?

let arr = [100, 200, 300];
console.log(typeof arr);

//  정답은 = 4번 오브젝트

// 문제4. for문 계산
// 1부터 100까지 모두 더하는 코드를 완성하세요 for문을 이용해야합니다.

// 변수 sum을 선언과 초기화해준다.
let sum = 0;

// i가 1부터 99까지 차례대로 포문을 통해 증가하면서, sum에 누적이되면서 합산이된다.

for (let i = 1; i <= 100; i++) {
  sum += i;
}
// 결과값 sum에는 5050이 출력된다.
console.log(sum);

// 문제14. 3의 배수인가요?
// 만약 그 수가 3의 배수라면 "짝"이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해주세요
//  입력: 3  출력: 짝   ----  입력:2   출력:2

// 게임이라는 기능의 함수를 만들어준다
// 이프문을 활용할것이다.

function game(n) {
  if (n % 3 == 0) {
    console.log("짝");
  } else {
    console.log(n);
  }
}

game(3);
game(7);
