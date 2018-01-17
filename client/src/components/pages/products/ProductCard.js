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
    width: '20%',
    marginRight: '10px',
    marginBottom: '30px',
    boxShadow: 'none',
    marginTop: '40px'
    
  },
  image: {
    width: '250px',
    display: 'flex',
    border: '2px red',
    height: '200px'
  },
  title: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '26px',
    color: '#0097A7'
  },
  price: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '20px'
  },
  button: {
    border: '1px solid #00BCD4'
  }
}

const ProductCard = ({ product, name, price, img, category, _id, deleteProduct }) => 
  <div style={style.container}>
    <Card>
      <CardMedia 
        style={style.image}
        image={img}
      />
      <CardContent>
        <Typography type='headline' component='h2'>
         
          <h2 style={style.title}>{name}</h2>
          <h5 style={style.price}>{price}</h5>
        </Typography>
      </CardContent>
      <CardActions>
          <Button  style={style.button} onClick={() => deleteProduct(_id)}>Delete</Button>
          <Button style={style.button}><Link to={`/product/${_id}`}>View</Link></Button>
      </CardActions>

    </Card>
  </div>

// ProductCard.propTypes = {
//   product: PropTypes.object.isRequired
// }

export default ProductCard
