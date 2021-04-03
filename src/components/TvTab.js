import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '250px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('airing_today');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={category}
          variant='outlined'
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}>
              
          <MenuItem value={'airing_today'}>airing_today</MenuItem>
          <MenuItem value={'on_the_air'}>on_the_air</MenuItem>
          <MenuItem value={'popular'}>popular</MenuItem>
          <MenuItem value={'top_rated'}>top_rated</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
