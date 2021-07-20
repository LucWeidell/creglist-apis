import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";


function _draw(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('houses').innerHTML = template
}

export default class HousesController{

  constructor(){
    ProxyState.on['houses', _draw]
    _draw()
  }

  async createCar(){
    try{
      event.preventDefault()
      console.log(event.target)
      let form = event.target

      let rawCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }

      await carsService.createCar(rawCar)
    // let rawCar = {
    //   make: form.make.value,
    //   model: form.model.value,
    //   year: form.year.value,
    //   price: form.price.value,
    //   description: form.description.value,
    //   imgUrl: form.imgUrl.value
    // }
      carsService.createCar(rawCar)
      form.reset()
    } catch (error){
      console.log('creating car fail:', error)
    }
  }
}