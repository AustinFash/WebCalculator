let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")
let btn7 = document.querySelector("#btn7")
let btn8 = document.querySelector("#btn8")
let btn9 = document.querySelector("#btn9")
let btnplus = document.querySelector("#btnplus")
let btnminus = document.querySelector("#btnminus")
let btndivide = document.querySelector("#btndivide")
let btntimes = document.querySelector("#btntimes")
let btnclear = document.querySelector("#btnclear")
let btnequal = document.querySelector("#btnequal")

let display = document.querySelector(".display")

let operand = ""
let num1 = ""
let num2 = ""
display.textContent = ""


btn1.addEventListener('click',function() {
    setNum("1")
});

btn2.addEventListener('click',function() {
     setNum("2")
});

btn3.addEventListener('click',function() {
     setNum("3")
});

btn4.addEventListener('click',function() {
     setNum("4")
});

btn5.addEventListener('click',function() {
    setNum("5")
});

btn6.addEventListener('click',function() {
    setNum("6")
});

btn7.addEventListener('click',function() {
     setNum("7")
});

btn8.addEventListener('click',function() {
     setNum("8")
});

btn9.addEventListener('click',function() {
     setNum("9")
});

btnminus.addEventListener('click',function() {
    if (operand == ""){
        display.textContent += "-"
        operand = "-"
    }
});

btnplus.addEventListener('click',function() {
    if (operand == ""){
        display.textContent += "+"
        operand = "+"
    }
});

btntimes.addEventListener('click',function() {
    if (operand == ""){
        display.textContent += "*"
        operand = "*"
    }
});

btndivide.addEventListener('click',function() {
    if (operand == ""){
        display.textContent += "/"
        operand = "/"
    }
});

btnclear.addEventListener('click',function() {
    num1 = null;
    num2 = null;
    operand = "";
    display.textContent = ""
});
btnequal.addEventListener('click',function() {
    num1 = operate(num1,operand,num2).toString()
    num2 = "";
    operand = "";
});

function setNum(num){
    if(operand == ""){
        num1 += num
        display.textContent += num
    }else{
        num2 += num
        display.textContent += num
    }
}

function operate(num1,operand,num2){
    if(operand == "+"){
        display.textContent = +num1 + +num2;
        return +num1 + +num2;
    }else if(operand == "-"){
        display.textContent = +num1 - +num2;
        return +num1 - +num2;
    }else if(operand == "*"){
        display.textContent = +num1 * +num2;
       return +num1 * +num2;
    }else if(operand == "/"){
        if(num2 == 0){
            display.textContent = "undefined"
        }else{
             display.textContent = Math.round((+num1 / +num2) * 10000) /10000
             return Math.round((+num1 / +num2) * 10000) /10000
        }
    }else{
        alert("Operand was undefined")
    }

}
