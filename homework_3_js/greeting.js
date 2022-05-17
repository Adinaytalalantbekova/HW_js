// Классная работа 1
function numbers (number_1, number_2){
    if (number_1 < number_2){
        console.log("Первое число меньше")
    }else if  (number_1 > number_2){
        console.log("Второе число меньше")
    }else {
        console.log("РАВНЫ")
    }
}

numbers(234, 654)

// Классная работа 2

function countChar(a, d, f){
    console.log(a.length);
    console.log(d.length);
    console.log(f.length);
}
countChar('3763w48', '67849495', '578t03')

// Д/З 1


function fizzbuzz(a){
    for(let a = 1; a < 100; a++)
    if (a % 3 === 0 && a % 5 ===0){
       console.log("FizzBuzz")
    } else if (a % 3 ===0){
        console.log("Fizz")
    } else if (a % 5 ===0){
        console.log("Buzz")
    }else {
        console.log(a)
    }
}
fizzbuzz()


