import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Contact, Home, ListPages, Usage, Admin, Dashboard } from '../pages/' 

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/usage-mode" component = {Usage} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/list-pages" component = {ListPages} />
                <Route exact path = "/admin" component = {Admin}/>
                <Route exact path = "/dashboard" component = {Dashboard}/>
                <Redirect to = "/"/>
            </Switch>
        </BrowserRouter>
    )
}
