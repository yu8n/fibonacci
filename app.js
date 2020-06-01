'use strict';
const memo = new Map();
memo.set(0,0) //fib(0) = 0
memo.set(1,1) //fib(1) = 1
function fib(n) {
  if(memo.has(n)){//もしmemo配列にnの数字があったら
    console.log("fib("+n+")の答えは"+memo.get(n)+"です。")
    return memo.get(n);//記録してある数値を取り出し、返すことで、足し算をさせない。
  }
    console.log("~~~~~~~~~~~~~~~~~~~~~fib("+n+')は新規なため、計算します。~~~~~~~~~~~~~~~~~~~~~')
  const value = fib(n-1) + fib(n-2);
  memo.set(n,value);
  return value;
  // if(n===0){
  //   return 0;
  // }else if(n==1){
  //   return 1;
  // }
  
  // return fib(n-1)+fib(n-2);
}
const length = 40;
for (let i = 0; i <= length;i++){
  console.log(i+"のフィボナッチ数列は"+fib(i));
}