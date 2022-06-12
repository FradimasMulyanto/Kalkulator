
const kalkulatorScreen = document.querySelector(`.kalkulator-screen`)
const operators = document.querySelectorAll(`.operator`)
const numbers = document.querySelectorAll(".number")
const equalSign = document.querySelector(`.equal-sign`)
const clearBtn = document.querySelector(`.all-clear`)
const deciimal = document.querySelector(`.decimal`)
const updateScreen = (number) =>{
    kalkulatorScreen.value = number
}
let angkaSebelumnya = ``
let operasiKalkulator = ``
let angkaSekarang = `0`
 
const inputNumber = (number) =>{
    if(angkaSekarang === '0'){
        angkaSekarang = number
    }else{
    angkaSekarang += number
    }
}
const inputOperator = (operator) => {
  if(operasiKalkulator === ''){
    angkaSebelumnya = angkaSekarang
  }
  operasiKalkulator = operator
  angkaSekarang = '0'
}
const kalkulasi = () => {
    let result = ''
    switch(operasiKalkulator){
        case '+':
            result = parseFloat(angkaSebelumnya) + parseFloat(angkaSekarang)
            break
        case '-':
            result = angkaSebelumnya - angkaSekarang
            break
        case '*':
            result = angkaSebelumnya * angkaSekarang
            break
        case '/':
            result = angkaSebelumnya / angkaSekarang
            break
        default :
        return
    }
    angkaSekarang = result
    operasiKalkulator = ''
}
const clearAll = ()=> {
    angkaSebelumnya = ''
    operasiKalkulator =''
    angkaSekarang = '0'
}
inputDecimal = (dot) => {
    angkaSekarang += dot
} 
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber (event.target.value)
        updateScreen(angkaSekarang)
         }
     )
    }
)


operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        })
})
    
equalSign.addEventListener("click", (event) => {
    kalkulasi()
    updateScreen(angkaSekarang)
})


clearBtn.addEventListener("click", (event) => {
    clearAll()
    updateScreen(angkaSekarang)
})
deciimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(angkaSekarang)

})