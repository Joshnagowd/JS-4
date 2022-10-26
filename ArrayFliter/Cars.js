let Cars = [{brand : "Maruthi", model : "Swift", price: 7000000 , color:"black"},
{brand : "kia", model : "i20", price: 800000 , color:"black"},
{brand : "Maruthi", model : "Swift", price: 500000 , color:"red"},
{brand : "BMW", model : "800", price: 900000 , color:"white"},
{brand : "Hyndai", model : "seltos", price: 100000 , color:"yellow"},
{brand : "Bolero", model : "nexon", price: 600000 , color:"grey"},
{brand : "Tata", model : "toyoto", price: 7000000 , color:"red"},
{brand : "Suzuki", model : "polo", price: 800000 , color:"white"}]
let new_Cars =Cars.filter (function(car) {
    //return car.brand == "Maruthi"
    //return car.color =="black"
    return car.price>=700000

})
console.log(new_Cars)