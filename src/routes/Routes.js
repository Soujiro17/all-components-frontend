import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from '../components/authcontext/AuthContext';
import { Contact, Home, ListPages, Admin, Dashboard } from '../pages/' ;


export default function Routes() {
    
    const { loggedIn } = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/list-pages" component = {ListPages} />
                <Route exact path = "/admin" component = {Admin}/>
                <PrivateRoute exact path = "/dashboard" component = {Dashboard} authed = {loggedIn}/>
                <Redirect to = "/"/>
            </Switch>
        </BrowserRouter>
    )
}

const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render = {(props) => authed
          ? <Component {...props} />
          : <Redirect to = {{pathname: '/', state: {from: props.location}}} />}
      />
    )
}
