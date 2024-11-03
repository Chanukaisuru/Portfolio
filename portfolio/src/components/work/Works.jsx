import React from 'react';
import{useEffect} from 'react';
import {useState} from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [item, setItem] = useState({name:'all'});
    const [projects,setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name=== "all"){
            setProjects(projectsData);
        }
    })
    
  return (
    <div>
        <div className="work_filters">
        {projectsNav.map ((item, index) => {
            return <span className="work_item" key={index}>
                    {item.name}</span>;
            
        })}
    </div>

        <div className="work_container container grid">
             {projectsData.map((item) => {
                return <WorkItems item={item} key={item.id} />;
             })}
        </div>
    </div>
  );
};

export default Works;