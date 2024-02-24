const setAlarm = document.getElementById('setAlarmId')
setAlarm.addEventListener('click', setAlarmfunc);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
function setAlarmfunc(e){
    e.preventDefault()
    const alarm = document.getElementById('alarmId')
    alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}...`)

    now = new Date()

    let timeToAlarm = alarmDate - now
    console.log(timeToAlarm)
    if(timeToAlarm >= 0){
        setTimeout(() => {
            console.log('Ringing now')
            audio.play()
        }, timeToAlarm);
    }
}