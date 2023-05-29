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

function MakePizza(pizzaSize,pizzaBase,pizzaTemperature,pizzaCheese){
  this.size = pizzaSize
  this.base = pizzaBase
  this.temperature = pizzaTemperature
  this.cheese = pizzaCheese
  this.delivery = function(){
    console.log(`deliver pizza ${pizza.temperature}`)
  }
  this.smell = function(){
    console.log(`this smells awesome!`)
  }
  this.order = function(){
    console.log( "received")
  }
}

let massivePizza = new MakePizza("massive","stacked","pipin hot","extra")
