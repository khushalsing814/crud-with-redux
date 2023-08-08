import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';

function Editdata() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apiData, setApi] = useState([]);
    const [inputData, setInputdata] = useState(
        {
            title: "",
            author: ""
        }
    );

    const handleData = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInputdata({ ...inputData, [key]: value })
        console.log(inputData)
    }

    const toastSucess = () => toast.success("success",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:1000
    });
    const toastwarning = () => toast.error("all field are required",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:1000
    });

    useEffect(()=>{
         axios.get(`https://api-testing-jivx.onrender.com/data/${id}`)
        .then(res => setInputdata(res?.data))
        .catch((error) => { console.log(error.message) })
    },[])

    const fetchdata = async () => {
        await axios.put(`https://api-testing-jivx.onrender.com/data/${id}`, inputData)
            .then(res => setApi(res?.data))
            .catch((error) => { console.log(error.message) })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputData.title || !inputData.author) {
            toastwarning();
        } else {
            toastSucess();
            fetchdata();
            setTimeout(() => {
                navigate('/crud-with-redux')
            }, 2000);
        }
    }
    return (
        <>
           <ToastContainer/>
            <form className='m-auto center_form form_shadow min_width' onSubmit={handleSubmit} >
                <h1 className='text-center'>Update Record</h1>
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={handleData} value={inputData.title}></input>
                </div>
                <div className="form-group">
                    <label for="author">Autor</label>
                    <input type="text" className="form-control" id="author" name='author' onChange={handleData} value={inputData.author}></input>
                </div>
                <div className="form-group mt-3 dropend">
                    <label htmlFor="author">Gender:</label>
                    <div class="form-check form-check-inline ms-3">
                        <input className="form-check-input" type="radio" name="gender" value="male" checked={inputData.gender ==='male'} onChange={handleData}></input>
                        <label className="form-check-label">male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" value="female" checked={inputData.gender ==='female'} onChange={handleData}></input>
                        <label className="form-check-label">female</label>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-3' >
                    <button className="btn btn-primary set_width">Update</button>
                <Link to={`/readdata/${id}`} type="submit" class="btn btn-warning set_width">Back</Link>
                </div>
            </form>
        </>
    )
}

export default Editdata
