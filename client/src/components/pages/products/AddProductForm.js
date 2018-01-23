import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'

const style = {
  container: {
    width: '500px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px'
  },
  card: {
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#607D8B',
    marginBottom: '10px'
  },
  label: {
    fontSize: '20px',
    fontFamily: 'Oswald, sans-serif',
    color: '#fff'
  },
  input: {
    padding: '10px',
    fontSize: '17px',
    fontFamily: 'Oswald, sans-serif',
    color: '#333',
    width: '90%'
  },
  button: {
    marginRight: '20px'
  },
  link: {
    textDecoration: 'none'
  }
}


const AddProductForm = ({ onChangeHandler, name, price, img, category, submitProductToServer }) =>
  <form style={style.formContainer}>
     <div>
    <Card style={style.card}>
      <Typography style={style.label} type='display1' gutterBottom> Add Product </Typography>
          
      <input style={style.input} type='text' placeholder='Product Name' onChange={onChangeHandler} id={'name'}/>
    </Card> 

    <Card style={style.card}>
             <input style={style.input} type='text' placeholder='Price' onChange={onChangeHandler} id={'price'} />
          
             <input style={style.input} type='text' placeholder='Image URL' onChange={onChangeHandler} id={'img'}/>
          
             <input style={style.input} type='text' placeholder='Product Category' onChange={onChangeHandler} id={'category'}/>
    </Card>  
    </div>  
    <div>
          <Button style={style.button} raised disabled={ !name || !price || !img || !category } onClick={submitProductToServer}>
            Submit
          </Button>
     </div>     
        
  </form>

  AddProductForm.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    submitProductToServer: PropTypes.func.isRequired
  }

export default AddProductForm
