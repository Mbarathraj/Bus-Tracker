import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const UserDriverDetails = () => {
  const [driverDetails, setDriverDetails] = useState([]);
  const [sortBy, setSortBy] = useState("asc");
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/driver")
      .then((data) => setDriverDetails(data.data));
  }, []);
 function handleSort (e){
   if(e.target.value === 'asc'){
     const sortedData=[...driverDetails].sort((a,b)=> a.name.localeCompare(b.name))
  
     setDriverDetails(sortedData)
   }
   else{
    const sortedData=[...driverDetails].sort((a,b)=> b.name.localeCompare(a.name))
    setDriverDetails(sortedData)
   }
   
 }

  return (
    <div className="d-flex justify-content-center flex-column  mt-5">
      <div className="col-8 d-flex align-items-center gap-3">
        <div className="col-8  d-flex align-items-center gap-2 ">
          Search
          <input type="text" className="form-control" />
        </div>
        <select
          name=""
          id=""
          onChange={(e)=>{
            handleSort(e)
          }}
        >
          <option value="">Sort By Name</option>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
        </select>
      </div>
      <div className="table-responsive col-md-12">
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>age</th>
              <th>Lisence No</th>
              <th>Address</th>
              <th>Route</th>
            </tr>
          </thead>
          <tbody>
            {driverDetails &&
              driverDetails.map((driver, index) => {
                let imagePath = `../images/${driver.image}`;
                console.log(imagePath);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={imagePath} alt="profile" />
                    </td>
                    <td>{driver.name}</td>
                    <td>{driver.mobileNo}</td>
                    <td>{driver.age}</td>
                    <td>{driver.lisenceNo}</td>
                    <td>{driver.address}</td>
                    <td>{driver.route}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDriverDetails;
