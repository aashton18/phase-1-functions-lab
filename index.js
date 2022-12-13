// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let headquarters = 42;
    return Math.abs(headquarters - location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start)) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let under2000; 
    let over2000;
    if (distance > 0 && distance < 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        under2000 = (distance - 400) * 0.02;
        return under2000;
    } else if (distance > 2000 && distance < 2500){
        over2000 = 25;
        return over2000;
    } else {
        return "cannot travel that far";
    }

}