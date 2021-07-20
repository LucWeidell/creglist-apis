import { ProxyState } from "../AppState.js"
//NOTE why does service need to know car class to make one : THINK I KNOW WHU
import Car from "../Models/Car.js"



class CarsService {
  constructor(){}


  createCar(rawCar){

    // NOTE api put here
    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }
  deleteCar(carID){
    // NOTE api delete here
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carID)
  }

  bidCar(carID){
    let foundCar = ProxyState.cars.find(c.id = carID)
    foundCar.price += 100
    // FIXME api put
    ProxyState.cars = ProxyState.cars
  }
}

// NOTE you are using all the services not change the object
// Singleton: only gets instantiated once and just passed around
export const carsService = new CarsService()