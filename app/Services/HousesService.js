import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"


class HousesService{

  createHouse(rawHouse){
    // NOTE api put here
    ProxyState.houses = [...ProxyState.houses, new Car(rawHouse)]
  }
  deleteCar(houseId){
    // NOTE api delete here
    ProxyState.houses = ProxyState.house.filter(h => h.id != houseId)
  }

  bidCar(houseId){
    let foundHouse = ProxyState.house.find(h.id = houseId)
    foundHouse.price += 100
    // FIXME api put
    ProxyState.houses = ProxyState.houses
  }
}

export const housesService = new HousesService()