import React from 'react'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const style = {
  container: {
    flexWrap: 'wrap',
    
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '400px',
    marginRight: '20px'
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '350px',
    background: '#fff'
  },
  image: {
    width: '100%',
    display: 'flex',
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
    color: '#cecece',
    fontSize: '20px'
  },
  button: {
    display: 'flex',
    width: '80%',
    background: '#607D8B',
    color: '#fff',
    marginTop: '20px'
  }

}

const CartCard = ({ product, removeItemFromCart }) => 
  <div style={style.container}>
    <Card>
      <CardContent style={style.cardContent}>
      <img style={style.image} src={product.img} />
      <h2 style={style.title}>{product.name}</h2>
      <h2 style={style.price}>{product.price}</h2>
      <Button style={style.button} type='button' onClick={() => removeItemFromCart(product._id)}> Remove </Button>
    </CardContent>
  </Card>
  </div>

export default CartCard
