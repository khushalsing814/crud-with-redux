import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser, showalldata } from '../redux-toolkit/showuserDetails';
import Home from './increment-decrement/home';
import { FiEye } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

function Apicalling() {
    const dispatch = useDispatch();
    const [inputsearch, setInputsearch] = useState('');
    const [dropdown, setDropdown] = useState('');
    const [currentpage, setCurrentpage] = useState(1);
    const [postperpage] = useState(4);
    const [mouseover, setMouseover] = useState(false);
    const [delled, setDelled] = useState(false);

    const { users, loading, error, serachData } = useSelector(state => state.usersRecord)
    console.log(serachData)

    const lastPostIndex = currentpage * postperpage;
    const firstPostIndex = lastPostIndex - postperpage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);
    console.log(currentPosts)

    const handlechange = (data) => {
        setCurrentpage(data.selected + 1)
    }

    const shownPostPerPAge = Math.ceil(users.length / postperpage);

    useEffect(() => {
        dispatch(searchUser(inputsearch))
    }, [inputsearch])

    const Handledropdown = (e) => {
        setDropdown(e.target.name)
        console.log(dropdown)
    }
    const fetchData = () => {
        dispatch(showalldata());
    }

    useEffect(() => {
        fetchData();
    }, [])

    const HandleDelled = (id) => {
        const confirm = window.confirm("Are you sure to want a record");
        if (confirm) {
            axios.delete(`https://api-testing-jivx.onrender.com/data/${id}`)
                .then(() => {
                    fetchData();
                })
        }
    }

    const loader = () => {
        if (loading) {
            return (<h1 className='text-center mt-2'>loading....</h1>)
        }
    }
    return (
        <>
            {/* <Home /> */}
            <div className='container m-auto form_shadow set_width_style center_table'>
                <h1 className="mb-3" style={{ textAlign: "center" }}>Table</h1>
                <span className="badge bg-info text-dark position-relative p-1 mb-3" style={{ fontSize: 20 }}>
                    Total no. of records
                    {
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {users.length < 9 ? users.length : 9} {users.length < 9 ? '' : "+"}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    }

                </span>
                <div className='d-flex justify-content-between'>
                    <input type='search' className='w-100 me-3 ps-2' placeholder='searchbar' onChange={(e) => setInputsearch(e.target.value)}></input>
                    <div className="dropdown me-3">
                        <button className="btn btn-dark dropdown-toggle firstletteruppercase" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className='font_size'>{dropdown == '' ? 'All Genders' : dropdown.charAt(0).toLocaleUpperCase() + dropdown.slice(1)}</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" name="all Genders" onClick={Handledropdown}>All Genders</a></li>
                            <li><a className="dropdown-item" name="male" onClick={Handledropdown}>Male</a></li>
                            <li><a className="dropdown-item" name="female" onClick={Handledropdown}> Female</a></li>
                        </ul>
                    </div>
                    <Link to="/createdata" className="btn btn-danger d-flex justify-content-center align-items-center font_size" style={{ width: 150, whiteSpace: "nowrap" }}>Add +</Link>
                </div>
                <div style={{ overflow: "auto" }}>
                    {loader()}
                    <table className="table table-dark table-striped mt-3">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Title</th>
                                <th scope="col">Authar</th>
                                <th scope="col">Gender</th>
                                <th scope="col" style={{ display: "flex", justifyContent: "space-around" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <h1>loading...</h1>
                                    : currentPosts?.filter((data) => {
                                        if (serachData.toLocaleLowerCase() !== '') {
                                            return data.author.toLocaleLowerCase().match(serachData.toLocaleLowerCase());
                                        } else {
                                            return data;
                                        }
                                    })
                                        .filter((data) => {
                                            if (dropdown.toLocaleLowerCase() !== '' && dropdown.toLocaleLowerCase() == 'all genders') {
                                                return data;
                                            } else if (dropdown.toLocaleLowerCase() !== '') {
                                                return data.gender.toLocaleLowerCase().startsWith(dropdown.toLocaleLowerCase());
                                            } else {
                                                return data;
                                            }
                                        })

                                        .map((item, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row" key={item.id}>{index + 1}</th>
                                                    <td>{item.title}</td>
                                                    <td>{item.author}</td>
                                                    <td> <span className={item.gender == 'male' ? 'badge bg-danger' : 'badge bg-light text-dark'}>{item.gender}</span></td>
                                                    <td className='text-center' style={{ whiteSpace: "nowrap" }} >
                                                        <Link to={`/readdata/${item.id}`} typeof="button" className="btn btn-light me-4 position-relative res_style set_margin"
                                                            onMouseEnter={() => (setMouseover(mouseover => ({ ...mouseover, [item.id]: !mouseover[item.id] })))}
                                                            onMouseLeave={() => (setMouseover(mouseover => ({ ...mouseover, [item.id]: !mouseover[item.id] })))}
                                                        >
                                                            <FiEye />
                                                            {mouseover[item.id] && (<div style={{ position: "absolute", bottom: "46px", right: "0", left: "0", fontSize: 12, backgroundColor: "wheat", whiteSpace: "nowrap", padding: "2px", color: "white", boxShadow: "inset 3px 33px black, 0em 0 .4em olive" }}>View<svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg></div>)}
                                                        </Link>
                                                        <button className="btn btn-danger res_style position-relative"  onClick={() => HandleDelled(item.id)}
                                                            onMouseEnter={() => (setDelled(delled => ({ ...mouseover, [item.id]: !delled[item.id] })))}
                                                            onMouseLeave={() => (setDelled(delled => ({ ...mouseover, [item.id]: !delled[item.id] })))}
                                                        >
                                                            {delled[item.id] && (<div style={{ position: "absolute", bottom: "46px", right: "0", left: "0", fontSize: 12, backgroundColor: "wheat", padding: "2px", color: "white", boxShadow: "inset 3px 33px black, 0em 0 .4em olive" }}>delete<svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg></div>)}
                                                            <FiTrash /></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                            }
                        </tbody>
                    </table>
                </div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={shownPostPerPAge}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlechange}
                    containerClassName={"pagination justify-content-end mt-2"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                ></ReactPaginate>
            </div>
        </>
    )
}

export default Apicalling
