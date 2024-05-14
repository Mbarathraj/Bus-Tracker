import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const AddBus = () => {
  const [busRegNo, setBusRegNo] = useState();
  const [busNo, setBusNo] = useState();
  const [route, setRoute] = useState();
  const [image, setImage] = useState();
  const handleAddBus = async (e) => {
    e.preventDefault();

    if (busRegNo && busNo && route && image) {
      const formData=new FormData()

      formData.append('image',image)
      formData.append('busRegNo',busRegNo)
      formData.append('busNo',busNo)
      formData.append("route",route)
      await axios
        .post("http://localhost:8000/admin/addbus", formData)
        .then((res) => {
          if (res.data === "success") {
            toast.success("Added Successfully");
          } else {
            toast.error("something wrong");
          }
        });
    } else {
      toast.warning("All Fields Are Required!");
    }
  };
  return (
    <div className="addbus d-flex justify-content-center align-items-center h-100">
      <form className="p-4 rounded-2" encType="multipart/form-data" onSubmit={handleAddBus}>
        <h4>Add Bus Details:</h4>
        <label htmlFor="busRegno" className="mt-3 mb-1">
          Bus Registration No.*
        </label>
        <input
          type="text"
          id="busRegno"
          name="busRegno"
          className="form-control rounded-pill"
          onChange={(e) => {
            setBusRegNo(e.target.value);
          }}
        />
        <label htmlFor="busNo" className="mt-3 mb-1">
          Bus No.*
        </label>
        <input
          type="text"
          id="busNo"
          name="busNo"
          className="form-control rounded-pill"
          onChange={(e) => {
            setBusNo(e.target.value);
          }}
        />
        <label htmlFor="route" className="mt-3 mb-1">
          Route*
        </label>
        <input
          type="text"
          id="route"
          name="route"
          className="form-control rounded-pill"
          onChange={(e) => {
            setRoute(e.target.value);
          }}
        />
        <label htmlFor="image" className="mt-3 mb-1">
          Image*
        </label>
        <input
          type="file"
          id="image"
          className="form-control rounded-pill"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></input>
        <button
          className="btn btn-outline-primary form-control rounded-pill mt-3"
          type="submit"
        >
          Add
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default AddBus;
