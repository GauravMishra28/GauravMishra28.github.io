import React from 'react'
import { CodeIcon } from "@heroicons/react/solid";

export default function Github() {
  return (
    <div id="githubstats" data-aos="flip-up" data-aos-duration="1000"className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full px-10 mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white mx-auto">
       Github Statistics
          </h1>
        </div>
        <img  alt="Gaurav's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=GauravMishra28&bg_color=green&color=#16a34a&line=#16a34a&point=FFFFFF&hide_border=true"></img>
      <div>
        <img  alt="stat"className='mx-auto mt-5'src="https://streak-stats.demolab.com/?user=GauravMishra28&theme=android-dark)"/>
     </div>
    </div>
  )
}
