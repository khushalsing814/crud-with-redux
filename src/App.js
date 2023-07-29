import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Apicalling from './components/apicalling';
import Adddata from './components/createdata';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Editdata from './editdata';
import Createdata from './components/createdata';
import Readdata from './readdata';
// import ImageUploadForm from './redux-toolkit/testing/testing';

function App() {
  return (
    <>
      {/* <div className='container-fluid' style={{backgroundColor:"black", minHeight:"100vh"}}>
    <div className='container'>
        <Header/>
        <Navbar/>
        </div>
        </div>
        <Main/>
        <Footer/> */ }
      <BrowserRouter>
        <Routes>
          <Route  exact path ='/crud-with-redux' element={<Apicalling />}></Route>
          <Route path ='createdata' element={<Createdata />}></Route>
          <Route path ='editdata/:id' element={<Editdata />}></Route>
          <Route path ='readdata/:id' element={<Readdata />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ImageUploadForm/> */}
    </>
  );
}

export default App;
