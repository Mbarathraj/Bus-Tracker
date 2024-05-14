import React, { useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";
import pic from "../images/1715508003021IMG-20210705-WA0002.jpg";
const DriverDetails = () => {
  const [driverDetails, setDriverDetails] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState({});
  const [editshow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [name, setName] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [age, setAge] = useState();
  const [lisenceNo, setLisenceNo] = useState();
  const [route, setRoute] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/driver")
      .then((data) => setDriverDetails(data.data));
  }, []);

  const handleClose = () => {
    setEditShow(false);
    setDeleteShow(false);
  };
  const handleEditShow = (index) => {
    setSelectedDriver(driverDetails[index]);
    setEditShow(true);
  };
  const handleDeleteShow = (index) => {
    setSelectedDriver(driverDetails[index]);
    setDeleteShow(true);
  };

  const handleDelete = async () => {
    const id = selectedDriver._id;
    await axios.post("http://localhost:8000/admin/deletedriver",{id:id}).then(res => setDriverDetails(res.data))
    setDeleteShow(false)
  };
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
            <th>S. No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>age</th>
            <th>Lisence No</th>
            <th>Address</th>
            <th>Route</th>
            <th>Option</th>
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
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => handleEditShow(index)}
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteShow(index)}
                    >
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
            Name*
            <input
              type="text"
              defaultValue={selectedDriver.name}
              className="form-control mb-2"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            Mobile*
            <input
              type="text"
              defaultValue={selectedDriver.mobileNo}
              className="form-control mb-2"
              onChange={(e) => {
                setMobileNo(e.target.value);
              }}
            />
            Age*
            <input
              type="text"
              defaultValue={selectedDriver.age}
              className="form-control mb-2"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            Lisence No.*
            <input
              type="text"
              defaultValue={selectedDriver.lisenceNo}
              className="form-control mb-2"
              onChange={(e) => {
                setLisenceNo(e.target.value);
              }}
            />
            address*
            <input
              type="text"
              defaultValue={selectedDriver.address}
              className="form-control mb-2"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            Route*
            <input
              type="text"
              defaultValue={selectedDriver.route}
              className="form-control mb-2"
              onChange={(e) => {
                setRoute(e.target.value);
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
            Delete Barath Details
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

export default DriverDetails;
