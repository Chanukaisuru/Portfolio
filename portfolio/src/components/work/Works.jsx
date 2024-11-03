import React from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'

const Works = () => {
  return (
    <div>
        <div className="work_filter">
        {projectsNav.map ((item, index) => {
            return <span className="work_item" key={index}>
                    {item.name}</span>;
            
        })}
    </div>

        <div className="work_container container grid">
             {projectsData.map((item) => {
                return <WorksItems/>
             })}
        </div>
    </div>
  )
}

export default Works