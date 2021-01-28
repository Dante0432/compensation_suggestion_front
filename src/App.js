import classes from './App.module.css'
import HexagonTorre from './components/hexagon/hexagonTorre'
import axios from 'axios';
import ButtonTorre from './components/buttonTorre/buttonTorre'
import InputTorre from './components/inputTorre/inputTorre'
import { Grid, TextField,withStyles } from '@material-ui/core'



const App = () =>{ 
  const buttonHandler = (e) => {
  axios.post('/login', {
                email: email,
                password: password
            }).then((response) => {
                // Respuesta del servidor
                sessionStorage.setItem("TOKEN", response.data.authorizationToken);
                sessionStorage.setItem("AUTH_ITEMS", JSON.stringify(response.data.permissions));
                sessionStorage.setItem("IS_LOGGED", "TRUE");
                window.location='/home';
            }).catch((error) => {
                error.status===403 ? setErrorPassword('error') : console.log(error);
            },[]);
  }

    return (
      <Grid  container direction="row" alignItems="center">
        <Grid className={classes.App} container direction="row" justify="center">
          <InputTorre/><br/>
          <ButtonTorre action={ buttonHandler }>
            <span>Go !</span>
          </ButtonTorre>
      
        </Grid>
      </Grid>
    )
  }

export default App;
