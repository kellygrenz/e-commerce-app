import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Proptypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    width: '30%',
    marginRight: '10px',
    marginBottom: '50px',
    boxShadow: 'none',
    marginTop: '40px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '400px'
    
  },
  image: {
    width: '100%',
    display: 'flex',
    border: '2px red',
    height: '200px'
  },
  cardContent: {
    height: '200px'
  },
  title: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '26px',
    color: '#0097A7'
  },
  price: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '20px',
    marginTop: '-20px',
    color: '#cecece'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-20px'
  },
  topButtons: {
    display: 'flex',
    flexDirection: 'row',
    width: '200px'
  },
  button: {
    border: '1px solid #00BCD4',
    display: 'flex',
    marginBottom: '35px',
    width: '40%',
    marginRight: '10px',
    color: '#000'
    
  },
  link: {
    textDecoration: 'none'
  },
  cartButton: {
    display: 'flex',
    width: '200px',
    marginTop: '50px',
    background: '#607D8B',
    color: '#fff'
  }
}

const ProductCard = ({ product, name, price, img, category, _id, deleteProduct, addItemToCart }) => 
  <div style={style.container}>
    <Card>
      <CardMedia 
        style={style.image}
        image={img}
      />
      <CardContent style={style.cardContent}>
        <Typography type='headline' component='h2'>
         
          <h2 style={style.title}>{name}</h2>
          <h5 style={style.price}>{price}</h5>
        </Typography>
      
      <CardActions style={style.buttons}>
        <div style={style.topButtons}>
          <Button  style={style.button} onClick={() => deleteProduct(_id)}>Delete</Button>
          <Button style={style.button}><Link style={style.link} to={`/product/${_id}`}>View</Link></Button>
        </div>
          <Button style={style.cartButton} onClick={() => addItemToCart(_id)}> Add to Cart </Button>
      </CardActions>
      </CardContent>
    </Card>
  </div>

// ProductCard.propTypes = {
//   product: PropTypes.object.isRequired
// }

export default ProductCard
