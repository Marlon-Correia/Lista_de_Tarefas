import * as React from 'react';
import * as C from './styled'

const Button = ({ children, onclick }) => {
    return (
        <C.Button onClick={onclick}>{children}</C.Button>
    )
}
export default Button