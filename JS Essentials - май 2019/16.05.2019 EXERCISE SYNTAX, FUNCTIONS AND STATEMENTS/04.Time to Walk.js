function solve(num1, num2, num3) {
    let steps = num1;
    let footprint = num2;
    let speed = num3 * 1000 / 3600;
    let distance = steps * footprint;
    let bonusMinute = Math.floor(distance / 500);
    if ((Math.floor(distance / speed / 60) + bonusMinute) > 60) {
        let hours = math.floor((Math.floor(distance / speed / 60) + bonusMinute) / 60);
        console.log(`0${hours}:${(Math.floor(distance/speed/60)+bonusMinute)-hours*60}:${Math.round(((distance/speed/60)-Math.floor(distance/speed/60))*60)}`);

    } else {
        //console.log(bonusMinute);

        // console.log(Math.ceil(((distance/speed/60)-Math.floor(distance/speed/60))*60))
        console.log(`00:${Math.floor(distance/speed/60)+bonusMinute}:${Math.round(((distance/speed/60)-Math.floor(distance/speed/60))*60)}`);
    }
}
solve(2564, 0.71, 5.5);