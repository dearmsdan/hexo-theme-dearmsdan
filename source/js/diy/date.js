

function gs(x, y) {
  if (document.fs.nsns[13].checked) window.open(x + encodeURI(document.fs.key.value, y));
  else window.open(x + document.fs.key.value, y)
}

function ggl(y) {
  var f = document.gform;
  f.q.value = document.fs.key.value;
  f.channel.value = "footer";
  f.target = y;
  f.submit();
  f.reset();
}

function ggl(y) {
  var f = document.gform;
  f.q.value = document.fs.key.value;
  f.channel.value = "footer";
  f.target = y;
  f.submit();
  f.reset();
}

function ggs(x, y) {
  window.open(x + document.fs.key.value + '+site%3Awww.1t2t.com', y)
}

function srh() {
  if (document.fs.nsns[0].checked) gs("", "mspg0")
  if (document.fs.nsns[1].checked) ggl("mspg4")
  if (document.fs.nsns[2].checked) gs("", "mspg2")
  if (document.fs.nsns[3].checked) gs("", "mspg1")
  if (document.fs.nsns[4].checked) gs("", "mspg15");
  if (document.fs.nsns[5].checked) gs("", "mspg11")
  if (document.fs.nsns[6].checked) gs("", "mspg7")
  if (document.fs.nsns[7].checked) gs("", "mspg9")
  if (document.fs.nsns[8].checked) gs("", "mspg9")
  if (document.fs.nsns[9].checked) ggs("", "mspg10")
  if (document.fs.nsns[10].checked) gs("", "mspg8")
  if (document.fs.nsns[11].checked) gs("", "mspg8")
  if (document.fs.nsns[12].checked) gs("", "mspg3")
  if (document.fs.nsns[13].checked) gs("", "mspg16")
  if (document.fs.nsns[14].checked) gs("", "mspg13");
  if (document.fs.nsns[15].checked) gs("=", "mspg18")
  if (document.fs.nsns[16].checked) gs("", "mspg17")
  return false
}
var cal_i = 0;
var stime;
var cal_time;
var cal_dist;
var CalendarData = [0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95];
var madd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var TheDate;
var cMonth;
var cDay
var dm
if (location.href.indexOf('1t2t1') == -1) dm = '1t2t'
else dm = '9991'
if (typeof stime == 'undefined' || stime == null || stime == '') {
  n = new Date();
  cal_time = n.getTime();
  cal_dist = 0
} else {
  cal_time = stime * 1000;
  var n = new Date(cal_time);
  var tmp = new Date();
  cal_dist = cal_time - tmp.getTime()
}

function cal_s() {
  var newdate = new Date(cal_time + cal_i * 1000)
  var min = newdate.getMinutes();
  var hor = newdate.getHours()
  if (hor == 0) cal_reset()
  if (min < 10) min = '0' + min
  em('clk').innerHTML = hor + ':' + min;
  cal_i++
}

function cal_reset() {
  var tmp = new Date();
  cal_time = cal_dist + tmp.getTime();
  cal_u()
}
/* 获取阳历以及农历 */
var arrdate = [];

function cal_u() {
  var week = [
    ['日'],
    ['一'],
    ['二'],
    ['三'],
    ['四'],
    ['五'],
    ['六']
  ]
  TheDate = n;
  cal_i = 0
  var year = (n.getFullYear() + '').substr(2, 2);
  var mont = n.getMonth() + 1;
  var date = n.getDate();
  var day = n.getDay()
  em('date').innerHTML = year + '年' + mont + '月' + date + '日'
  em('wk').innerHTML = week[day]
  em('nongli').innerHTML = cal_cd()
  arrdate.push(cal_cd());
  arrdate.push(mont);
  arrdate.push(date);
}

function em(e) {
  return document.getElementById(e)
}

function GetBit(m, n) {
  return (m >> n) & 1;
}

function e2c() {
  var total, m, n, k;
  var isEnd = false;
  var tmp = TheDate.getYear();
  if (tmp < 1900) tmp += 1900;
  total = (tmp - 2001) * 365 + Math.floor((tmp - 2001) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 23;
  if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) total++;
  for (m = 0;; m++) {
    k = (CalendarData[m] < 0xfff) ? 11 : 12;
    for (n = k; n >= 0; n--) {
      if (total <= 29 + GetBit(CalendarData[m], n)) {
        isEnd = true;
        break;
      }
      total = total - 29 - GetBit(CalendarData[m], n);
    }
    if (isEnd) break;
  }
  cYear = 2001 + m;
  cMonth = k - n + 1;
  cDay = total;
  if (k == 12) {
    if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1)
      cMonth = 1 - cMonth;
    if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) cMonth--;
  }
  cHour = Math.floor((TheDate.getHours() + 3) / 2);
}

function cal_cd() {
  var numString = "一二三四五六七八九十";
  var monString = "正二三四五六七八九十冬腊";
  e2c();
  var tmp = "";
  if (cMonth < 1) {
    tmp += "闰";
    tmp += monString.charAt(-cMonth - 1);
  } else tmp += monString.charAt(cMonth - 1);
  tmp += "月";
  if (cDay == 20) tmp += '二十'
  else if (cDay == 30) tmp += '三十'
  else {
    tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "卅"));
    if (cDay % 10 != 0 || cDay == 10) tmp += numString.charAt((cDay - 1) % 10);
  }
  return tmp;
}

function show_rili() {
  document.write('<a href="http://www.' + dm + '.com/" target="_blank"><div id="date"></div><font color="#DF0A10">星期<span id="wk"></span></font>&nbsp;<span id="clk"></span><br />农历<span id="nongli"></span></a>')
  cal_u()
  cal_s()
  setInterval("cal_s()", 999)
}
