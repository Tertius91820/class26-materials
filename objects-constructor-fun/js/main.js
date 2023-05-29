//Create a constructor with 4 properties and 3 methods
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