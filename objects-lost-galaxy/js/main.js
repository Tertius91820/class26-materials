//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = "large"
pizza.base = "thick"
pizza.temperature = "Hot!"
pizza.cheese = "lots"

pizza.delivery = function(){
  console.log(`deliver pizza ${pizza.temperature}`)
}
pizza.smell = function(){
  console.log(`this smells awesome!`)
}
pizza.order = function(){
  console.log( "received")
}

