import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'


function Routes() {
    return(
      
        <BrowserRouter>
            {/* O switch faz com que apenas uma rota seja chamada por vez */}
            <Switch>
                {/* path = rota */}
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>


        </BrowserRouter>

    );

} 
export default Routes