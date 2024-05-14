import React from "react";
import Sidebar from "./Sidebar";

const TrackBus = () => {
  return (
    <div className="trackbus h-100 d-flex justify-content-center align-items-center">
      <form action="" className="p-3 d-flex flex-column align-items-center" style={{width:"400px"}}>
        <div className="col-12">
          <label htmlFor="busNo">Enter Bus No.*</label>
          <br />
          <input type="text" className="form-control" id="busNo" name="busNo" />
        </div>
        <div className="col-12 mt-3">
          <label htmlFor="long">Enter longitude*</label>
          <br />
          <input type="text" className="form-control" id="long" name="long" />
        </div>
        <div className="col-12 mt-3">
          <label htmlFor="lat">Enter latitude*</label>
          <br />
          <input type="text" className="form-control" id="lat" name="lat" />
        </div>
        <button className="btn btn-outline-primary mt-3 col-6">Search</button>
      </form>
    </div>
  );
};

export default TrackBus;
