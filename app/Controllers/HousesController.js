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

  async createHouse(){
    try{
      event.preventDefault()
      console.log(event.target)
      let form = event.target

      let rawHouse = {
        year: form.year.value,
        levels: form.levels.value,
        bedrooms: form.year.value,
        bedrooms: form.year.value,
        bathrooms: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }

      await housesService.createHouse(rawHouse)
      form.reset()
    } catch (error){
      console.log('creating house fail:', error)
    }
  }
}