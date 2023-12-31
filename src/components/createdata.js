import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { CreateUsersdetails } from '../redux-toolkit/showuserDetails';

function Createdata() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  

    const [inputData, setInputdata] = useState({});

    const handleData = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInputdata({ ...inputData, [key]: value })
    }

    const toastSucess = () => toast.success("success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
    });
    const toastwarning = () => toast.error("all field are required", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputData.title || !inputData.author) {
            toastwarning();
        } else {
            console.log(inputData)
            toastSucess();
            dispatch(CreateUsersdetails(inputData));
            setTimeout(() => {
            navigate('/crud-with-redux')
            }, 2000);
        }
    }

    return (
        <>
            <ToastContainer />
            <form className='m-auto center_form form_shadow min_width' onSubmit={handleSubmit} >
                <h1 className='text-center'>Create Form</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={handleData}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" name='author' onChange={handleData}></input>
                </div>
                <div className="form-group mt-3 dropend">
                    <label htmlFor="author">Gender:</label>
                    <div class="form-check form-check-inline ms-3">
                        <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleData}></input>
                        <label className="form-check-label">male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleData}></input>
                        <label className="form-check-label">female</label>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-3' >
                    <button className="btn btn-primary me-3 set_width">Submit</button>
                    <Link to="/crud-with-redux" type="submit" className="btn btn-warning set_width " >Back</Link>
                </div>
            </form>
        </>
    )
}

export default Createdata
