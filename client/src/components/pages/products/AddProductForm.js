import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'

const style = {
  container: {
    width: '50%'
  },
  formContainer: {
    padding: 20
    
  }
}


const AddProductForm = ({ onChangeHandler, name, price, img, category, submitProductToServer }) =>
  <div style={style.container}>
    <Card>
      <form style={style.formContainer}>
        <Typography type='display1' gutterBottom> Add Product </Typography>
        <div>
          
          <TextField label='Product Name' onChange={onChangeHandler} id={'name'}/>
        </div>
        <div>
          <TextField label='Price' onChange={onChangeHandler} id={'price'} />
        </div>
        <div>
          <TextField label='Product Image' onChange={onChangeHandler} id={'img'}/>
        </div>
        <div>
          <TextField label='Product Category' onChange={onChangeHandler} id={'category'}/>
        </div>
        <Button raised disabled={ !name || !price || !img || !category } onClick={submitProductToServer}>
          Submit
        </Button>
        </form>
      </Card>
  </div>

  AddProductForm.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    submitProductToServer: PropTypes.func.isRequired
  }

export default AddProductForm
