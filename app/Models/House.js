

export default class House{

    /**
   * Constructor for house:
   * @param {*} House represents a house
   */
     constructor({year, floor, beds, bath, squareFt, price, description, imgUrl, id}){
      this.year = year,
      this.floor = floor,
      this.beds = beds,
      this.bath = bath,
      this.id = id,
      this.squareFt = squareFt || 'no size ',
      this.price = price,
      this.description = description || 'No House Description',
      this.imgUrl = imgUrl || '//placebeard.it/300x300'
    }

    getTemplate(){
      let template = ''
      template += /*html*/
      `
        <div class=" col-md-4 col-sm-3">
          <div class="car bg-light shadow">
            <img src=${this.imgUrl} class = w-100 alt="house">
            <div class = "p-3">
              <p><b>${this.floor}}- ${this.squareFt}ft^2 - ${this.year}</b></p>
              <p>Beds - ${this.beds} : Baths - ${this.bath}</p>
              <p>${this.description}</p>
              <h5><i>$${this.price.toLocaleString('en-US')}</i></h5>
            </div>
          </div>
        </div>
      `
      return template
    }


}