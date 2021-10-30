import React, { useState } from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';
import {MdTask, MdUpdate} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Task = ({id,name,description,created_at,modify_at,ative,priority}) => {
    const [showDescription,setShowDescription] = useState(false);
    const [textDecoration, setTextDecoration] = useState("text-decoration-none")
    return (
        <div className="row mt-4 border-bottom">
        <div className="col d-flex align-items-center mb-4">
          <h5 className={`mb-0 ${textDecoration}`}>{name}</h5>
          <button type="button" className="own-button extend" onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? <AiOutlineMinus/> : <AiOutlinePlus/>}
          </button>
        </div>
        <div className="col d-flex justify-content-end mb-4 me-5">
          <button type="button" className="own-button d-flex m-0 p-0 border-0">
            <IconContext.Provider value={{ className: "done" }}>
                <AiFillCheckCircle onClick={() => textDecoration === "text-decoration-none" ? 
                setTextDecoration("text-decoration-line-through") : setTextDecoration("text-decoration-none")}/>
            </IconContext.Provider>
          </button>
          <button type="button" className="own-button d-flex m-0 ms-2 p-0 border-0">
            <IconContext.Provider value={{ className: "update" }}>
                <MdUpdate onClick={() => console.log("do nothing update")}/>
            </IconContext.Provider>
          </button>
          <button type="button" className="own-button d-flex m-0 ms-2 p-0 border-0">
            <IconContext.Provider value={{ className: "delete" }}>
                <AiFillDelete onClick={() => console.log("do nothing delete")}/>
            </IconContext.Provider>
          </button>
        </div>
        <div>
        {showDescription && <p className="mt-3">{description}</p>}
        </div>
      </div>
    )
}


export default Task;