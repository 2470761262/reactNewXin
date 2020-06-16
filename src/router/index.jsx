import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import renderRouter from './router';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                {
                    renderRouter.map((item, index) => {
                        return <Route key={index} path={item.path}
                            exact={item.exact} component={item.component}></Route>
                    })
                }

            </Switch>
        </BrowserRouter>
    )
}