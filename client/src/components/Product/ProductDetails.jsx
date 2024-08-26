import { useState, useEffect} from 'react'
import { Box, CardMedia, Slide, Stack } from '@mui/material'
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// import productOne from '../../../../src/assets/product/product1.jpg'

const ImageCard = () =>{
  return(
    <Box className='d-block' src=''>
      <img src='../../../../src/assets/product/product1.jpg' className='d-block'/>
    </Box>
  )
}

const Carusel = () => {
  const [ card, setCard ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(0)
  const [ slideDirection, setSlideDirection ] = useState('left')

  const cardsPerPage = 1
  const duplicateCards = Array.from({length:1}, (_,i) => <ImageCard key={i}/>)

  const handleNextPage = () => {
    setSlideDirection('left')
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePrevPage = () => {
    setSlideDirection('right')
    setCurrentPage((prevPage) => prevPage - 1)
  }

  useEffect(() =>{
    setCard(duplicateCards)
  }, [] )

  const containerWidth = cardsPerPage * 250;

  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection : ' row',
        alignItems : 'center',
        justifyContent : 'center',
        height : 4/5,
        width : '100%',
        margin : 0 
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: 5}}
        disabled={currentPage === 0}
      >
        <NavigateBeforeIcon/>
      </IconButton>

      <Box
        sx={{ 
          width: `${containerWidth}px`,
          height: '100%'
        }}
      >
        {card.map((card, index) =>(
          <Box
            key={"card-"+index}
            sx={{
              width: 1,
              height: 1,
              display : currentPage === index ? 'block' : 'none'
            }}
          >
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction='row'
                alignContent='center'
                justifyContent='center'
                sx={{width : 1, height: 1}}
              >
                <ImageCard/>
              </Stack>

            </Slide>

          </Box>
        ))}

      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{
          margin: 5,
        }}
        disabled={
          currentPage >= Math.ceil((card.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  )
}



const ProductDetails = () => {

    return (
      <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          width:1,
          height:1
        }}
      >

        <Carusel/>


      </Box>
    );
  }

  export default ProductDetails;


        //   <article className="product">
        //   {/* <img src={imgProduct2} alt="Product image" /> */}
        //   <div className="productInfo">
        //     <span>$ 120,00</span>
        //     <h1>Retro refrigerator</h1>
        //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tempore alias quaerat ad iure cum provident distinctio omnis eius maxime.</p>
        //   </div>
        //   <button className="">Add to cart</button>
        // </article>