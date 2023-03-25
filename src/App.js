import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import UserInformations from './UserInformations';
import SideBar from './SideBar';
import ToDo from './ToDo';
// import UserHeader from './UserHeader';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<UserDetails/>}/> 
      <Route path='UserDetails/:id' element={<UserInformations/>}/>
      <Route path='/ToDo' element={<ToDo/>}/>
    </Routes>
    </BrowserRouter>
     
    
    </>
      

  );
}

export default App;
