import React from "react";

const UserTrackBus = () => {
  return (
    <div className="trackbus d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <label htmlFor="busno">Enter Bus No.*</label>
        <div className="col-12 col-md-10">
          <form action="">
            <input type="text" className="form-control mt-2" />
            <button className="btn btn-primary col-6 mt-3">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserTrackBus;
