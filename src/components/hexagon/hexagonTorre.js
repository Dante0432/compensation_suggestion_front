import Hexagon from 'react-hexagon'

import classes from './hexagonTorre.module.css';

const HexagonTorre = (props) => {

    const action = (e) => props.action(e);

    return (
        <Hexagon
            backgroundImage = "https://starrgate.s3.amazonaws.com:443/users/ab858f56bb435c3ebc55d77bdb4167027246a924/profile_OeOceqL.jpg"  
            backgroundScale={1.1}
            style={ { strokeWidth:10, stroke:"#5E626B" } } 
            className={classes.hexagon}
            onClick={ action }
        >
        </Hexagon>
    )
}

export default HexagonTorre;
