import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';


const theme={
    primary:'#0064EB',
    text:'#000',
    icons:'#808080',
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
document.getElementById('root')
)
;
