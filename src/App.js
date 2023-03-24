import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import UserInformations from './UserInformations';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<UserDetails/>}/> 
      <Route path='UserDetails/:id' element={<UserInformations/>}/>
    </Routes>
    </BrowserRouter>
     
    
    </>
      

  );
}

export default App;
