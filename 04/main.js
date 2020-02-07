function sayHelloToConsole() {
  console.log("Hello!")
}
sayHelloToConsole()
// alert("Hello!")

function sayHello(name = "незнакомец") {
  // if (name === undefined) {
  //   name = "незнакомец"
  // }
  // name = name || "незнакомец"
  alert("Hello " + name + "!")
}
// sayHello("Женя")
// sayHello()

let adminName = "Иннокентий"
function logUser() {
  let userName = "Иван Иваныч"
  console.log(userName)
  console.log(adminName)
}
logUser()
// console.log(userName)
console.log(adminName)

function getName() {
  let myName = "Женя"
  return myName
}
let user = getName()
console.log(user)

function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log("Варю " + cups + " кофе с молоком")
  }
  return console.log("Варю " + cups + " кофе без добавок")
}
makeCoffee(24, false)
makeCoffee(3, true)
makeCoffee(8)






// EOF
