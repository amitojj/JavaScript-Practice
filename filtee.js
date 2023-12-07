const arrOfNum = [17,65,54,52,51,32,31,30,29,78]

let evenNums = arrOfNum.filter((num) =>{
    return num % 2 ===0
})

console.log(evenNums);