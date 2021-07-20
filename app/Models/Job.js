

export default class Job{


      /**
   * Constructor for Jobs:
   * @param {*} Job represents a Job
   */
    constructor({ salary, position, remote, city, company, hrWeek, overTime, imgUrl, id}){
      this.salary = salary,
      this.position = position,
      this.remote = remote || false,
      this.city = city,
      this.hrWeek = hrWeek,
      this.company = company || 'Free-Lancer'
      this.overTime = overTime || '0',
      this.imgUrl = imgUrl || '//placebeard.it/300x300',
      this.id = id
      }

      getTemplate(){
        let template = ''
        template += /*html*/`
        <div class=" col-md-3 col-sm-2">
          <div class="car bg-light shadow">
              <img src=${this.imgUrl} class = w-100 alt="job">
              <div class = "p-3">
                  <h4>Title: ${this.position} - City: ${this.city}</h4>
                  <p><b>Salary: $${this.salary.toLocaleString('en-US')} - Hours: ${this.hrWeek}</b></p>
                  <p>Company - ${this.company}</p>
                  <p><i>${this.overTime}x Overtime Pay</i></p>
              </div>
          </div>
      </div>
        `
        return template
      }
}
