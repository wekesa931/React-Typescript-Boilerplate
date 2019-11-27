import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Application from './containers/TODO'
import AllPosts from './containers/posts/AllPosts'
import Header from './components/header/Header'
import SinglePost from './containers/posts/SinglePost'

const Router: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/todos" component={Application} />
                <Route exact path="/" component={AllPosts} />
                <Route exact path="/article/:id" component={SinglePost} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
