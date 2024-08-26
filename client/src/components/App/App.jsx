import Navbar from './Navbar';
import Product  from "../Product/Product";
import { useAuth } from "../../context/isAuthContext";
import { Outlet } from 'react-router-dom'
import { Button, Container } from '@mui/material';

const SearchBox = () => {
  return (
    <div className="searchBox">
      {/* <SearchIcon /> */}
      <input type="text" placeholder="Search product" />
    </div>
  );
}

const Categories = () => {
  return (
    <div className="categories">
      <span className="active">All</span>
      <span>Clothes</span>
      <span>Electronics</span>
      <span>Furniture</span>
      <span>Toys</span>
    </div>
  )
}


function App() {
  const auth = useAuth()

  const logoutComponent = () => {
    auth.logout()
    
  }
  return (
    <>
      <Navbar />

          


      <Container
        component="main"
      >        
        <Outlet />

        <Button
      //  type='button' 
        variant='outlined'
        onClick={logoutComponent} 
        color='background'
      > 
        Cerrar sesion
      </Button>
      </Container>
    </>
  )
}

export default App
