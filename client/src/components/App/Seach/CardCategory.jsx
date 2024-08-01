// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import PropTypes from "prop-types";

const CardCategory = (props) => {
    const { itemData } = props
    return (

        <Grid container spacing={{ xs: 1, sm:2, md: 4 }}>
            {itemData.map((item) => (
                <Grid xs={12} sm={6} md={4} key={item.title}>

                    <ImageListItem key={item.img} sx={{aspectRatio:1-1}}>
                        <img
                            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            position="below"
                        />
                    </ImageListItem>
                </Grid>
            ))}

        </Grid>
    );
}

CardCategory.prototype = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}


export default CardCategory;