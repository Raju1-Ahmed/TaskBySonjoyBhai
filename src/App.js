import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import AddUser from './Components/AddUser';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <div>
    
      <Routes>
        <Route path="/adduser" element={<AddUser />} />
      </Routes> 
       <Product/>
      
    </div>
    </div>
  );
}

export default App;
