// 1 hour = 60 mins
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result)
    return result
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);

let dayToHours = function(days) {
    return days * 24;
}

let c = dayToHours(1);
console.log(c)