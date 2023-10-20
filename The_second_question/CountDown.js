// 获取倒计时结束时间
function getEndTime(myYear) {
  // 创建一个指定年份的日期对象，月份和时间设置为固定值
  let myEndTime = new Date("" + myYear + "/06/07 09:00:00");
  return myEndTime; // 返回结束时间
}

// 开始执行倒计时
function countDown() {
  // 获取当前日期和时间
  let mydate = new Date();
  // 设置目标年份
  let year = "2024";
  // 获取倒计时结束时间
  let EndTime = getEndTime(year);
  // 获取当前时间
  let NowTime = new Date();

  // 检查是否已过倒计时结束时间
  if (EndTime.getTime() - NowTime.getTime() < 0) {
    // 如果已经过了，将目标年份增加 1
    year = mydate.getFullYear() + 1;
    // 获取新的倒计时结束时间
    EndTime = getEndTime(year);
  }

  // 计算时间差
  let t = EndTime.getTime() - NowTime.getTime();

  // 计算剩余的天数、小时、分钟和秒数
  let d = Math.floor(t / 1000 / 60 / 60 / 24);
  let h = Math.floor((t / 1000 / 60 / 60) % 24);
  let m = Math.floor((t / 1000 / 60) % 60);
  let s = Math.floor((t / 1000) % 60);

  // 更新页面上的倒计时显示
  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

// 每隔 1 秒执行一次倒计时函数
setInterval(countDown, 1000);
