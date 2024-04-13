import Logo from '../assets/logos/logo_yard_sale.svg';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <nav className="nav">
            <button>
                <MenuIcon />
            </button>
            <div>
                <div className="logo">
                    <img src={Logo} alt="Logo Yard Sale" />
                </div>
            </div>
            <button>
                <ShoppingCartIcon />
            </button>
        </nav>
    )
}

export default Navbar;