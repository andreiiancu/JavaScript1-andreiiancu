setInterval(() => {
  const time = document.querySelector('.display #time');
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let miliseconds = date.getMilliseconds();
  let day_night = 'AM';
  if (hours > 12) {
    day_night = 'PM';
    hours = hours - 12;
  }

  if (miliseconds < 10) {
    miliseconds = '0' + miliseconds;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }

  time.textContent =
    hours + ':' + minutes + ':' + seconds + ':' + miliseconds + ' ';
});

var Audio = new Audio('https://www.youtube.com/watch?v=jv09nDFcJm0');
var sound = new Audio();
sound.loop = true;
var alarmTimer;

function setAlarm(button) {
  var ms = document.getElementById('alarmTime').valueAsNumber;
  if (isNaN(ms)) {
    alert('Invalid Date');
    return;
  }

  var alarm = new Date(ms);
  var alarmTime = new Date(
    alarm.getUTCFullYear(),
    alarm.getUTCMonth(),
    alarm.getUTCDate(),
    alarm.getUTCHours(),
    alarm.getUTCMinutes(),
    alarm.getUTCSeconds(),
  );
  var DifferenceInMs = alarmTime.getTime() - new Date().getTime();

  if (DiferenceInMs < 0) {
    alert('Specified time is already passed!');
    return;
  }

  alarmTimer = setTimeout(initAlarm, diferenceInMs);

  button.innerText = 'Cancel Alarm';
  button.setAttribute('onclick', 'cancelAlarm(this);');
}

function cancelAlarm(button) {
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);');
  clearTimeout(alarmTimer);
}

function initAlarm() {
  Sound.play();
  document.getElementById('alarmOptions');
}

function stopAlarm() {
  Sound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmOPtions');
  cancelAlarm(document.getElementById('alarmButton'));
}

function snooze() {
  stopAlarm();
  setTimeout(initAlarm, 36000);
}
