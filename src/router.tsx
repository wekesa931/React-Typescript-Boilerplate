import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Application from './containers/TODO'
import AllPosts from './containers/posts/AllPosts'

const Router: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/todos" component={Application} />
                <Route exact path="/" component={AllPosts} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
