// 타겟 설정
let target = document.querySelector("#dynamic");
// 3. 배열변수
let stringArr = [
    "Learn to HTML","Learn to CSS",
    "Learn to React","Learn to Javscript"];
// 4. 배열 크기에 맞게 설정, 랜덤으로 잡히게 .floor()는 소숫점 버림
let selectorString = stringArr[Math.floor(Math.random() * stringArr.length)];
// console.log(Math.floor(Math.random() * stringArr.length));
// console.log(Math.random() * stringArr.length); 숫자 확인

// 5.해당 문자열을 이 기준을 이용하여 배열로 분리시켜라
let selectorStringArr = selectorString.split("");

//31:40
function resetTyping(){
    target.textContent="";
}

// 시프트 - 배열이 있으면 앞에값 부터 밖으로 빼냄
// 6. 한글자씩 출력
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        
        setTimeout(function(){
            dynamic(randomArr);
        },80);
        else{
            setTimeout(resetTyping, 3000);
        }
    }
}

dynamic(selectorStringArr);

console.log(selectorString);
console.log(selectorStringArr);

// 2.액티비 효과를 추가, 깜빡이는 효과, 5미만
function blink(){
    target.classList.toggle("active");
}



setInterval(blink, 500);