import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import TabsCategory from './TabsCategory';


const Search = () => {

    // Estado que abre y cierra modal
    const [open, setOpen] = useState(false);

    //Función que abre y cierra el modal

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 1 }} role="presentation" className="search-view">

            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', p: 3 }}>

                {/* Sección de busquedad */}

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Search" variant="standard" />
                </Box>


                {/* Icono para cerrar modal */}

                <IconButton onClick={toggleDrawer(false)} sx={{ display: "flex" }}>
                    <CloseIcon fontSize='large' />
                </IconButton>
            </Box>

            <TabsCategory />
        </Box>
    );

    return (
        <div>
            {/* Icono de Search */}
            <IconButton onClick={toggleDrawer(true)}>
                <SearchIcon />
            </IconButton>

            {/* Modal */}
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default Search;
