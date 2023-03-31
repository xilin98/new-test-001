import { WEEKDAYS } from "../store";

export function compareTime(time1, time2) {
  // 将时间转换为分钟
  const minutes1 = parseInt(time1[0]) * 60 + parseInt(time1[1]);
  const minutes2 = parseInt(time2[0]) * 60 + parseInt(time2[1]);
  
  // 比较时间
  if (minutes1 < minutes2) {
    return -1;
  } else if (minutes1 > minutes2) {
    return 1;
  } else {
    return 0;
  }
}


export function formatTime(timeObj) {
  const daysOfWeek = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const result = timeObj.reduce((acc, curr) => {
    const index = daysOfWeek.indexOf(curr.label);
    if (curr.checked && index >= 0 && curr.time.length > 0) {
      const timeStr = `${curr.time[0].start}-${curr.time[0].end}`;
      if (!acc[index]) {
        acc[index] = timeStr;
      } else {
        acc[index] = `${acc[index]}，${timeStr}`;
      }
    }
    return acc;
  }, []);
  return result
    .map((timeStr, index) => {
      if (timeStr) {
        return `${daysOfWeek[index]} ${timeStr}`;
      }
      return null;
    })
    .filter((str) => str)
    .join("；");
}

export function mergeTimes(time1, time2) {
  // 将时间字符串转换为分钟数
  const start1 = getMinutes(time1.start);
  const end1 = getMinutes(time1.end);
  const start2 = getMinutes(time2.start);
  const end2 = getMinutes(time2.end);

  // 如果两个时间段没有重叠部分，直接返回数组
  if (end1 < start2 || end2 < start1) {
    return [time1, time2];
  }
  
  // 否则，计算合并后的时间段
  const start = Math.min(start1, start2);
  const end = Math.max(end1, end2);
  const mergedTime = { start: getString(start), end: getString(end) };
  return [mergedTime];
}

// 将时间字符串转换为分钟数
function getMinutes(timeString) {
  const [hour, minute] = timeString.split(':');
  return parseInt(hour) * 60 + parseInt(minute);
}

// 将分钟数转换为时间字符串
function getString(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

// 例子
// const time1 = { start: "09:00", end: "18:00" };
// const time2 = { start: "13:00", end: "18:00" };
// console.log(mergeTimes(time1, time2)); // [{start: "09:00", end: "18:00"}]

// const time3 = { start: "09:00", end: "12:00" };
// const time4 = { start: "14:00", end: "18:00" };
// console.log(mergeTimes(time3, time4)); // [{start:"09:00", end: "12:00"}, {start: "14:00", end: "18:00"}]

function formatDays(arr){
  const res = WEEKDAYS.map((item, index) => {
    if (arr.includes(index)) {
      return item.label;
    }
    return "";
  })
}

function formatNumberRange(numbers) {
  if (!Array.isArray(numbers)) {
    return '';
  }

  let rangeStart = null;
  let prevNum = null;
  let result = '';

  for (let num of numbers) {
    if (rangeStart === null) {
      rangeStart = num;
    } else if (num !== prevNum + 1) {
      if (result.length > 0) {
        result += ',';
      }
      result += `${rangeStart}-${prevNum}`;
      rangeStart = num;
    }
    prevNum = num;
  }

  if (rangeStart !== null) {
    if (result.length > 0) {
      result += ',';
    }
    result += `${rangeStart}-${prevNum}`;
  }

  return result;
}

export function formatWeekdays(weekdays) {
  const weekdaysDict = {
    0: "周一",
    1: "周二",
    2: "周三",               
    3: "周四",
    4: "周五",
    5: "周六",
    6: "周日",
  };

  const sortedWeekdays = [...weekdays].sort((a, b) => a - b);

  let start = sortedWeekdays[0];
  let end = sortedWeekdays[0];
  const segments = [];

  for (let i = 1; i < sortedWeekdays.length; i++) {
    if (sortedWeekdays[i] === end + 1) {
      end++;
    } else {
      if (start === end) {
        segments.push(weekdaysDict[start]);
      } else {
        segments.push(`${weekdaysDict[start]}至${weekdaysDict[end]}`);
      }
      start = sortedWeekdays[i];
      end = sortedWeekdays[i];
    }
  }

  if (start === end) {
    segments.push(weekdaysDict[start]);
  } else {
    segments.push(`${weekdaysDict[start]}至${weekdaysDict[end]}`);
  }

  return segments.join("，");
}
