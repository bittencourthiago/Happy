import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Orphanage from './pages/Orphanage'
import OrphanagesMap from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
    return(
      
        <BrowserRouter>
            {/* O switch faz com que apenas uma rota seja chamada por vez */}
            <Switch>
                {/* path = rota */}
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
                
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>


        </BrowserRouter>

    );

} 
export default Routes