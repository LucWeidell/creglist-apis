import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobsService{

  createJob(rawJob){
    // NOTE api put here
    ProxyState.jobs = [...ProxyState.jobs, new Job(rawJob)]
  }

  deleteJob(jobId){
    // NOTE api delete here
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
  }

}

export const jobsService = new JobsService()