import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const style = {
  container: {
    display: 'flex',
    width: '30%',
    marginRight: '20px',
    marginBottom: '30px'
  },
  image: {
    width: '250px',
    display: 'flex',
    border: '2px red',
    height: '200px'
  },
  title: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '26px'
  },
  price: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '20px'
  }
}

const ProductCard = ({ name, price, img, category, _id, deleteProduct }) => 
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
          <Button raised color="primary" onClick={() => deleteProduct(_id)}>Delete</Button>
      </CardActions>

    </Card>
  </div>

export default ProductCard
