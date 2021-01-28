import { TextField, withStyles } from '@material-ui/core/'

import classes from './inputTorre.module.css'

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#cddc39',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#cddc39',
        color: '#cddc39',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
        color: '#cddc39',
          borderColor: '#cddc39',
          backgroundColor:"cddc39",
        },
        '&:hover fieldset': {
          borderColor: ' #cddc39',
          color: '#cddc39',
        },
        '&.Mui-focused fieldset': {

          borderColor: ' #cddc39',
          color: '#cddc39',
        },
      },
    },
  })(TextField);

const InputTorre = (props) => {
    const action = (e) => props.action(e);
    return (
        <CssTextField 
            className={classes.margin}
            label="userename (example:jgcardenasa)"
            variant="outlined"
            id="custom-css-outlined-input"
            onChange={action}
      />
    )
}

export default InputTorre