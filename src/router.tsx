import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Application from './containers/TODO'
import AllPosts from './containers/posts/AllPosts'
import Header from './components/header/Header'
import SinglePost from './containers/posts/SinglePost'
import MyPosts from './components/myPosts/MyPosts'
import Favorites from './components/favorites/favorites'

const Router: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/todos" component={Application} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/my-posts" component={MyPosts} />
                <Route exact path="/" component={AllPosts} />
                <Route exact path="/article/:id" component={SinglePost} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
