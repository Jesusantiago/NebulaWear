import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ViewTabPanel from './ViewTabPanel';
import CardCategory from "./CardCategory";

const Dress = [
  {
    img: '../../../../src/assets/category/Dress/CasualDress.jpg',
    title: 'Vestidos Casuales',
  },
  {
    img: '../../../../src/assets/category/Dress/NightDress.jpg',
    title: 'Vestidos de Noche',
  },
  {
    img: '../../../../src/assets/category/Dress/PartyDress.jpg',
    title: 'Vestidos de Fiesta',
  }
];

const Jewelry = [
  {
    img: "../../../../src/assets/category/Jewelry/Anillos.jpg",
    title: "Anillos"
  },{
    img: "../../../../src/assets/category/Jewelry/Aretes.jpg",
    title: "Aretes"
  },{
    img: "../../../../src/assets/category/Jewelry/Cadena.jpg",
    title: "Cardenas"
  },{
    img: "../../../../src/assets/category/Jewelry/Pulsera.jpg",
    title: "Pulseras"
  },
]

const Shoes = [
  {
    img: "../../../../src/assets/category/Shoes/ZapatosCasuales.jpg",
    title: "Zapatos casuales"
  },{
    img: "../../../../src/assets/category/Shoes/Botas.jpg",
    title: "Botas"
  },{
    img: "../../../../src/assets/category/Shoes/Tacos.jpg",
    title: "Tacos"
  }

]

const a11yProps = (index)  => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsCategory = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Menú de categoria" variant='fullWidth' textColor='primary' >
          <Tab label="Vestidos" {...a11yProps(0)} />
          <Tab label="Joyería" {...a11yProps(1)} />
          <Tab label="Zapatos" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <ViewTabPanel value={value} index={0}>
        <CardCategory itemData={Dress}/>
      </ViewTabPanel>

      <ViewTabPanel value={value} index={1}>
        <CardCategory itemData={Jewelry}/>
      </ViewTabPanel>

      <ViewTabPanel value={value} index={2}>
        <CardCategory itemData={Shoes} />
      </ViewTabPanel>
    </Box>
  );
}

export default TabsCategory;