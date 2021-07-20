import { ProxyState } from "../AppState.js";


function _draw(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController{


  constructor(){
    ProxyState.on('jobs', _draw)

    _draw()
  }
}