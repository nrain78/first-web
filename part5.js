// object literals
const student = {
    name : "Noor-Ul-Ain",
    age : 20,
    city : "karachi",
    marks : 94,
}
//-------------nested objecct---------
const classInfo = {
    aman : {
      age: 9,
      city : "karachi",
    },
    shraddha : {
    age : 10,
    city : "Lahore",
    },
    karan : {
        age :11,
        city : "islmabad",
    }
}
//----------array of nested object-------
const students = [
    {
        name : "noor",
        age : 20,
        city : "karchi",
    },
    {
        name : "basit",
        age : 24,
        city : "lahore",
    },
    {
        name : "aman",
        age : 22,
        city : "islamabad",
    }
]
//--------------random integers----------
let random = Math.floor( Math.random() *10) + 1;
console.log(random);
let num = Math.floor( Math.random() *100) + 1;
console.log(num);
let nums = Math.floor( Math.random() *5) + 1;
console.log(nums);
//----------------guessing game---------------

let max = prompt("enter a max number");

let randomNum = Math.floor(Math.random() * max) + 1;

// console.log(randomNum);
let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("quitting game");
        break;
    }

    if (guess == randomNum ) {
        console.log("you are right congrats!! random number is", randomNum);
        break;

    } else if (guess < randomNum) {
        guess = prompt("your guess was to small. please try again!!")
    }
    else {
        guess = prompt("your guess was to large. please try again!!")
    }
    // else {
    //     guess = prompt("your guess was wrong please try again!");
    // }

}