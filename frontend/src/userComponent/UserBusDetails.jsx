import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const UserBusDetails = () => {
  const [sortBy,setSortBy]=useState('asc')
  const [busDetails, setBusDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/bus")
      .then((data) => setBusDetails(data.data));
  }, []);
  function handleChange (e){
    if(e.target.value==='asc'){
      const sortedData=[...busDetails].sort((a,b)=> a.busNo - b.busNo)
      setBusDetails(sortedData)
    }
    else{
      const sortedData=[...busDetails].sort((a,b)=>  b.busNo - a.busNo)
      setBusDetails(sortedData)
    }
  }
  return (
    <div className="d-flex justify-content-center flex-column mt-5">
      <div className="col-8 d-flex align-items-center gap-3">
        <div className="col-8  d-flex align-items-center gap-2 ">
          Search
          <input type="text" className="form-control" />
        </div>
        <select name="" id=""
        onChange={(e)=>{
          handleChange(e)
        }}
        >
          <option value="asc">Sort By</option>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
        </select>
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Bus No.</th>
            <th>Bus Reg. No.</th>
            <th>Route</th>
            <th>Driver Name</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {busDetails.map((bus, index) => {
            return (
              <tr key={index}>
                <td>{bus.busNo}</td>
                <td>{bus.busRegNo}</td>
                <td>{bus.route}</td>
                <td></td>
                <td>
                  <img src="" alt={"pic" + (index + 1)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserBusDetails;
