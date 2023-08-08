import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


function Readdata() {
    const [apiData, setApi] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://api-testing-jivx.onrender.com/data/${id}`).then(res => setApi(res?.data)).catch((error) => { console.log(error) })
    }, [])
    return (
        <div>
            <form className='m-auto center_form form_shadow min_width'>
                <h1 className='text-center'>user info</h1>
                <div className="form-group">
                   <h2><label for="title">Title :</label> <span style={{fontWeight:700, color:"red"}}>{apiData.title}</span></h2> 
                </div>
                <div className="form-group">
                <h2><label for="title">Autor :</label> <span style={{fontWeight:700, color:"red"}}>{apiData.author}</span></h2>
                </div>
                <div className="form-group">
                <h2><label for="title">Gender :</label> <span style={{fontWeight:700, color:"red"}}>{apiData.gender}</span></h2>
                </div>
                <div className='d-flex justify-content-between mt-3' >
                    <Link type="submit" class="btn btn-primary set_width" to={`/editdata/${id}`}>edit</Link>
                    <Link type="submit" class="btn btn-warning set_width" to="/crud-with-redux">back</Link>
                </div>
            </form>
        </div>
    )
}
export default Readdata
