import { Button } from '@material-ui/core/'

import classes from './buttonTorre.module.css'

const ButtonTorre = (props) => {

    const action = (e) => props.action(e);

    return (
        <Button variant="contained"
                className={ classes.green }
                onClick={ action }
                onKeyDown={ action }
                fullWidth={ props.fullWith }
                >
            {props.children}
        </Button>
    )
}

export default ButtonTorre