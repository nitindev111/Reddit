import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../components/Home';
import SubReddit from '../components/SubReddit';
import Container from '../components/Container';

export const routes = (
    <Route path="/" component={Home}>
        <IndexRoute component={Container} />
        <Route path="r/:subreddit" component={Container} />
    </Route>
)

export default routes;