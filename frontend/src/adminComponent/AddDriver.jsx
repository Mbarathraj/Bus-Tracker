import axios from "axios";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddDriver = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [image, setimage] = useState();
  const [moblileNo,setMobileNo]=useState()
  const [lisenceNo,setLisenceNo]=useState()
  const [route,setRoute]=useState()
  const handleAddDriver = async(e)=>{
    e.preventDefault();
   
      if(name && age && address && image && moblileNo && lisenceNo){
        const formData=new FormData()
       
        formData.append('image',image)
        formData.append('name',name)
        formData.append('age',age)
        formData.append("address",address)
        formData.append("lisenceNo",lisenceNo)
        formData.append('mobileNo',moblileNo)
        formData.append("route",route)

        axios.post("http://localhost:8000/admin/adddriver",formData).then(res => 
          {
            console.log(res.data)
            if(res.data === "success"){
              toast.success("Addedd sucessfully!")
            }
            else{
              toast.dismiss("Wrong")
            }
          }
        )
      }
      else{
        toast.warning("All feilds are requried")
      }
  }
  return (
    <div className="adddriver d-flex justify-content-center align-items-center h-100">
      <form className="p-2" onSubmit={handleAddDriver} encType="multipart/form-data">
        <h4>Add Driver Details:</h4>
        <label htmlFor="name" className="mt-3 mb-1">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control rounded-pill"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age"  className="mt-3 mb-1">
          Age*
        </label>
        <input
          type="text"
          id="age"
          name="age"
          className="form-control rounded-pill"
          onChange={(e) => setAge(e.target.value)}
        />
        <label  htmlFor="mno" className="mt-3 mb-1">
          Mobile No.*
        </label>
        <input
          type="text"
          id="mno"
          name="mno"
          className="form-control rounded-pill"
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <label htmlFor="lno" className="mt-3 mb-1">
          Lisence No.*
        </label>
        <input
          type="text"
          id="lno"
          name="lno"
          className="form-control rounded-pill"
          onChange={(e) => setLisenceNo(e.target.value)}
        />
        <label  htmlFor="route" className="mt-3 mb-1">
          Route.*
        </label>
        <input
          type="text"
          id="route"
          name="route"
          className="form-control rounded-pill"
          onChange={(e) => setRoute(e.target.value)}
        />

        <label htmlFor="address" className="mt-3 mb-1">
          Address*
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-control rounded-pill"
          onChange={(e) => setAddress(e.target.value)}
        />
        <label  htmlFor="image" className="mt-3 mb-1">
          Image*
        </label>
        <input
          type="file"
          className="form-control rounded-pill"
          id="image"
          name="image"
          onChange={(e) => setimage(e.target.files[0])}
        ></input>
        <button className="btn btn-outline-primary form-control rounded-pill mt-3"
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

export default AddDriver;
