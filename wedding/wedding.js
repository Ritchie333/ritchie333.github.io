function display(){
    update();
    setInterval(update,1000);
}

function update() {
    dayjs.extend(window.dayjs_plugin_relativeTime);
    const then = dayjs(17561268e5);
    const now = dayjs();
    const days = parseInt(then.diff(now, 'day'));
    const hours = parseInt(then.diff(now, 'hour')) - (days * 24);
    const minutes = parseInt(then.diff(now, 'minute')) - (days * 24 * 60) - (hours * 60);
    const seconds = parseInt(then.diff(now, 'second')) - (days * 24 * 60 * 60 ) - (hours * 60 * 60) - (minutes * 60)
    var display = document.getElementById('display');
    display.innerText = ordinal( days, 'day' ) + 
        ordinal( hours, 'hour' ) + 
        ordinal( minutes, 'minute' ) +
        ordinal( seconds, 'second' );
}

function ordinal(input, lead) {
    if (1 == input) {
        return input + ' ' + lead + ' ';
    } else {
        return input + ' ' + lead + 's ';
    }
}