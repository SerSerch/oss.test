import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import Navtop from 'containers/NavtopContainer';
import Footer from 'components/Footer';
import menu from './menu';

import './sass/main.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { themeoss } from './theme';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: [
            'Overpass:600',
            'Source Sans Pro:400,700',
            'sans-serif'
        ]
    }
});

function App() {
    return(
        <MuiThemeProvider theme={themeoss}>
            <div className="container">
                <Navtop menu={menu} />
                <main className="main">
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                    </Switch>
                </main>
            </div>
            <Footer />
        </MuiThemeProvider>
    );
}

export default App;