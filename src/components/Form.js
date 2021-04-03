import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1em 0'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '250px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }

}))


const Form = props => {
  const classes = getStyles()

  const { onInputChange, onSubmit } = props

  const [searchCategory, setSearchCategory] = React.useState('movie');

  // const handleChange = (event) => {
  // //  searchCategory = event.target.value
  // // console.log(event.target.value)
  // };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        label='Search'
        name='movieName'
        className={classes.textField}
        onChange={e => onInputChange(e.target.value)}
        margin='normal'
        variant='outlined'
      />

      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Search Type
        </InputLabel>

        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={searchCategory}
          variant='outlined'
          onChange={e => setSearchCategory(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}>

          <MenuItem value={'movie'}>movie</MenuItem>
          <MenuItem value={'multi'}>multi</MenuItem>
          <MenuItem value={'tv'}>tv</MenuItem>
        </Select>
      </FormControl>


      <Button
        variant='outlined'
        className={classes.button}
        type='submit'>
        Search
            </Button>
    </form>
  )
}

export default Form