import React, { useState, useEffect } from 'react';
import SingleTask from './Task'

const url = 'http://127.0.0.1:8000/api/tasks'

function App() {

  const [loading, setLoading] = useState(true);
  const [myData,setMyData] = useState([]);


  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMyData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  },[])

  if (loading) {
    return (
    <section className="container text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </section>
    )
  }


  return ( 
  <div className="container mt-5 mb-5">
    <div className="card">
      <div className="card-header text-center">
        <h1>To Do List</h1>
      </div>
      <div className="underline"></div>
      <div className="card-body">
        <div className="border-bottom">
          <section className="row flex align-items-center">
            <div className="col-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label"></label>
                  <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>          
              </form>
            </div>
            <div className="col-3">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Select filter option</option>
              <option value="ID">ID</option>
              <option value="Creation Date">Creation Date</option>
              <option value="Priority">Priority</option>
            </select>
            </div>
            <div className="col-3">
              <label htmlFor="customRange1" className="form-label">Priority range</label>
              <input type="range" className="form-range" min="1" max="10" step="1" id="customRange1"/>
            </div>
          </section>
        </div>
        <section className="">
          {
            myData.map((task)=> {
              return <SingleTask key={task.id} {...task}/>
            })
          }
        </section>
      </div>
    </div>
  </div>
  );
}

export default App;
