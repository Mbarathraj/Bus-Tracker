import React, { useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const BusDetails = () => {
  const [busDetails, setBusDetails] = useState([]);
  const [editshow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [selectedBus,setSelectedBus]=useState({})
  const [route,setRoute]=useState()
  const [busNo,setBusNo]=useState()


  const handleClose = () => {
    setEditShow(false);
    setDeleteShow(false);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/bus")
      .then((data) => setBusDetails(data.data));
  }, []);
  const handleEditShow = (index) => {
    setSelectedBus(busDetails[index])
    setEditShow(true)
  };
  
  const handleDeleteShow = (index) =>{
    console.log(busDetails[index])
    setSelectedBus(busDetails[index])
    setDeleteShow(true);
  } 

  const handleDelete =async ()=>{
    console.log(selectedBus._id)
    await axios.post("http://localhost:8000/admin/deleteBus",{id:selectedBus._id})
    .then(res =>{
     setBusDetails(res.data)
    })
    setDeleteShow(false);
  }
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="col-8 d-flex align-items-center gap-3">
        <div className="col-8  d-flex align-items-center gap-2 ">
          Search
          <input type="text" className="form-control" />
        </div>
        <select name="" id="">
          <option value="">Sort By</option>
          <option value="">Ascending</option>
          <option value="">Descending</option>
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
            <th>Option</th>
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
                  <img src="" alt={"pic" + index + 1} />
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-success" onClick={()=>handleEditShow(index)}>
                    <FaUserEdit />
                  </button>
                  <button className="btn btn-danger" onClick={(e)=>{
                    handleDeleteShow(index)
                  }}>
                    {" "}
                    <IoPersonRemoveSharp />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={editshow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center gap-1">
            <FaUserEdit /> Barath Deatils:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            Route*
            <input type="text" value={selectedBus.route} className="form-control mb-2" 
            onChange={(e)=>{
              setRoute (e.target.value)
            }}
            />
            Driver Name*
            <input type="text" className="form-control mb-2" />
            Bus No.*
            <input type="text"value={selectedBus.busNo} className="form-control mb-2" 
            onChange={(e)=>{
              setBusNo (e.target.value)
            }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={deleteShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex gap-2 align-items-center">
            <IoPersonRemoveSharp />
            Delete Bus Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BusDetails;
