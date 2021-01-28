import React,{ useState } from 'react'
import classes from './App.module.css'
import HexagonTorre from './components/hexagon/hexagonTorre'
import axios from 'axios';
import ButtonTorre from './components/buttonTorre/buttonTorre'
import InputTorre from './components/inputTorre/inputTorre'
import { Grid } from '@material-ui/core'
import GifLoader from 'react-gif-loader'



const App = (props) =>{ 
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [loading, setLoading] = useState(false);

  const [suggestedCompensation, setSuggestedCompensation] = useState('');
  const [personalInfo, setPersonalInfo] = useState({});

  axios.interceptors.request.use( request => {
    setLoading(true)
    return request
  }, error => {
    console.log(sessionStorage)
    return Promise.reject(error)
  })

  axios.interceptors.response.use( response => {
    setLoading(false)
  return response
  }, error => {
    setLoading(false)
    return Promise.reject(error.response);
  })


  const usernameChange = (e) => {
    setUsername(e.target.value);
  }
  const buttonHandler = (e) => {
    
    if(username){
    axios.post('ec2-3-101-14-165.us-west-1.compute.amazonaws.com:3000/api/v1/calculator/'+username, {
            }).then((response) => {
              console.log('mierda')
              if(response.status===200){
                setShowResume(true)
                setPersonalInfo(response.data.person)
                setSuggestedCompensation(response.data.suggestedCompensation)
              }
              
            }).catch( error => {
                setError(true)
               console.log(error)
            },[]);
  }
}
    return (
      <Grid  container direction="row" justify="center">
        <Grid className={classes.App} container direction="column" alignItems="center">
          
          <Grid container direction="row" justify="center">
            <InputTorre action={ usernameChange }/><br/>
            <ButtonTorre action={ buttonHandler }>
              <span>Go !</span>
            </ButtonTorre>
          </Grid>
          { showResume &&
            <Grid container direction="row" justify="center">
              <Grid item>
                  <HexagonTorre urlImage={ personalInfo.picture } />
              </Grid>
              <Grid item>
                <HexagonTorre>{ personalInfo.professionalHeadline }</HexagonTorre>
              </Grid>
              <Grid item>
                <HexagonTorre>{ suggestedCompensation }</HexagonTorre>
              </Grid>
            </Grid>
          }{ error && 
            <Grid container direction="row" justify="center">
              <Grid item>
          <HexagonTorre>Please try again !!! </HexagonTorre>
              </Grid>
            </Grid>          
          } 
        </Grid>
        { loading && <GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
                overlayBackground="rgba(0,0,0,0.5)"
            />
        }
      </Grid>
      
    )
  }

export default App;
