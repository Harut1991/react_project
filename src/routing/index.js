import { Home, Users, User, Posts, Post, AlbumList, Album } from '../components/index';
import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

export default class Routing extends React.Component {
    render(){
        return (
          <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/users/:id/posts" component={Posts}/>
            <Route exact path="/users/:id/posts/:postId" component={Post}/>
            <Route exact path="/users/:id/albums" component={AlbumList}/>
            <Route exact path="/users/:id/albums/:albumId" component={Album}/>
            <Route exact path="/users/:id" component={User}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        )
      }
}