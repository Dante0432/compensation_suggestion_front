import Hexagon from 'react-hexagon'

import classes from './hexagonTorre.module.css';

const HexagonTorre = (props) => {
    return (
        <Hexagon
            backgroundImage = { props.urlImage }
            backgroundScale={1.05}
            style={ { strokeWidth:10, stroke:"#5E626B",text: "#5E626B"} } 
            className={classes.hexagon}
            class="text"
        >
            <text className={classes.info} x="15%" y="50%">{ props.children }</text>
            
        </Hexagon>
    )
}

export default HexagonTorre;
