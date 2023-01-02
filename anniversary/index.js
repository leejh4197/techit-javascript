var now = new Date();
var start = new Date("2022-06-30");

// 몇 일인가?
var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");

// 기념일까지의 남은 날짜?
var valentine = new Date("2022-02-14");
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor((timeDiff2 / 1000) * 60 * 60 * 24 + 1);
$("#valentine").text(day + "일 남음");

// 1000일
var ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
var thousand = new Date(ms);
var thousandDate =
  thousand.getFullYear() +
  "." +
  (thousand.getMonth() + 1) +
  "." +
  thousand.getDate();
$("#thousand-date").text(thousandDate);

// 기념일까지 남은 날짜?
var timeDiff3 = thousand.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(day3 + "일 남음");
