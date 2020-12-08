//Task 1
let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
let arrFromString = s.split(";");
let arrSurnameName = arrFromString.map(item => item.split(":").reverse().join(":")).sort();
let res = arrSurnameName.reduce((acc, item) => {
    item = item.split(":");
    item[0] = `(${item[0]}`.toUpperCase();
    item[1] = `${item[1]})`.toUpperCase();
    item.join(":");
    acc += item;
    return acc;
},"");

console.log(res);

//Task 2

function getChairs(room, chairs) {
    if (chairs < 1) return "Game on";
    let res = [];
    let leftChairs = chairs;

    for (let i = 0; i < room.length; i++) {
        if (leftChairs > 0) {
            let emptyChairs = room[i][1] - room[i][0].length;
            (emptyChairs > 0) ? res.push(emptyChairs) : res.push(0);
            leftChairs -= (emptyChairs > 0) ? emptyChairs : 0;
        } else {
            return res;
        }
    }

    if (leftChairs <= 0) {
        return res;
    } else {
        return "Not enough";
    }
}

console.log(getChairs([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));

//Task 3

let arr = [[2,2], [2,8], [5,5], [6,3], [6,7], [7,4], [7,9]];

function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

let valuesArr = [];

let distArr = [];

let finalCoord = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        valuesArr.push([distance(arr[i], arr[j]), arr[i], arr[j]]);
        distArr.push(distance(arr[i], arr[j]));
    }
}

let minDist = Math.min(...distArr);

valuesArr.forEach(item => {
    if (item[0] === minDist) {
        finalCoord.push(item[1], item[2]);
    }
});

console.log(finalCoord);

//Task 4

function countIp(ip1, ip2) {
    function getRes (pl, vl = 1) {
        let differenceIp = ip2.split(".")[pl] - ip1.split(".")[pl];
        return differenceIp * vl;
    }

    let res = 0;
    
    for (let i = 0; i < 4; i++) {
       res += getRes(i, Math.pow(256, 3 - i));
    }

    return res;
}

console.log(countIp("10.0.0.0", "10.0.1.0"));










  
