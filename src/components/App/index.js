import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppShell from '../AppShell';
import AsyncComponent from '../../hoc/AsyncComponent';

const asyncIntroduce = AsyncComponent(() => {
    return import('../Introduce');
});
const asyncNotification = AsyncComponent(() => {
    return import('../Notification');
});

class App extends Component {
    render() {
        return (
                <AppShell>
                    <div>
                        <Switch>
                            <Route exact path="/" component={asyncIntroduce}/>
                            <Route path="/notification" component={asyncNotification}/>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </AppShell>
        );
    }
}

export default withRouter(App);