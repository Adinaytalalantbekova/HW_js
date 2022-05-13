//1 задание
const robots = [
    {
        username: "robot1",
        force: '1000',
        speed: '100 обр/мин'
    },
    {
        username: "robot2",
        force: '1500',
        speed: '150 обр/мин'
    },
    {
        username: "robot3",
        force: '3000',
        speed: '200 обр/мин'
    },
    {
        username: "robot4",
        force: '4000',
        speed: '400 обр/мин'
    },
    {
        username: "robot5",
        force: '5000',
        speed: '600 обр/мин'
    }
]

const strongestRobot = robots.filter(user => user.force > 3000, user => user.speed > 200)
console.log(strongestRobot)

// 2 задание

let lines = 7;
let str = " "
let star = "*";
for(let i = 0; i < lines; i++){
    str += star;
    console.log(str)
}

// 3 задание


for(let num = 1; num < 100; num++){
    if (num % 3 ===0 && num % 5 === 0){
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fuzz");
    } else if (num % 5 === 0){
        console.log(("Buzz"));
    } else {
        console.log(num);
    }
}