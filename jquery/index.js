// hello = () => {
//   console.log("hello");
// };
// $("#click").click(hello);

// 익명함수
// => 함수 이름 없이 가능하다. 
$("#click").click(() => {
  console.log("hello");
});
