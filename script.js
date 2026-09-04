
let count = 2300;
let target = 2400;
let prefix = "+";
let durationInSeconds = 5;

let steps = target - count;
let stepTime = (durationInSeconds * 1000)


let interval = setInterval( () => {
    count ++;
    document.getElementById('counter').innerText = prefix + count;
    if(count >= target) { clearInterval(interval); }
}, 30);