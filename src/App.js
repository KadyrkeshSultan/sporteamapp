import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import asyncComponent from './components/AsyncComponent';
import ButtonAppBar from './components/layout/ButtonAppBar'
import history from './components/layout/history';
import ScrollToTop from './components/layout/ScrollToTop';
const AsyncHome = asyncComponent(() => import('./components/anasayfa/Anasayfa'));
const AsyncLogin = asyncComponent(() => import('./components/auth/SignIn'));
const AsyncSignUp = asyncComponent(() => import('./components/auth/SignUp'));
const AsyncEventList = asyncComponent(() => import('./components/event/EventList'));
const AsyncMyEventList = asyncComponent(() => import('./components/event/MyEventList'));
const AsyncCreateEventForm = asyncComponent(() => import('./components/event/CreateEvent/CreateEventForm'));
const AsyncEventBoard = asyncComponent(() => import('./components/event/EventBoard'));
const AsyncAreaList = asyncComponent(() => import('./components/area/AreaList'));
const AsyncCreateAreaForm = asyncComponent(() => import('./components/area/CreateArea/CreateAreaForm'));
const AsyncAreaBoard = asyncComponent(() => import('./components/area/AreaBoard'));
const AsyncNotFoundPage = asyncComponent(() => import('./components/layout/NotFoundPage'));
const AsyncNewsBoard = asyncComponent(() => import('./components/news/NewsBoard'));
const AsyncNewsList = asyncComponent(() => import('./components/news/NewsList'));
const AsyncFeedback = asyncComponent(() => import('./components/about/Feedback'));
const AsyncAbout = asyncComponent(() => import('./components/about/About'));
const AsyncSettings = asyncComponent(() => import('./components/about/Settings'));
const AsyncUsers = asyncComponent(() => import('./components/user/UserList'));
const AsyncHome2 = asyncComponent(() => import('./components/anasayfa/Anasayfa2'));
class App extends Component {
  render() {
    return (
      <Router history={history}>
      <ScrollToTop>
        <div className="App" style={{background: 'lavender'}}>
        <ButtonAppBar />
          <Switch>
            <Route exact path='/' component={AsyncHome} />
            <Route path='/login' component={AsyncLogin} />
            <Route path='/signup' component={AsyncSignUp} />
            <Route exact path='/events' component={AsyncEventList} />
            <Route exact path='/myevents/:uid' component={AsyncMyEventList} />
            <Route path='/events/create' component={AsyncCreateEventForm} />
            <Route path='/events/:id' component={AsyncEventBoard} />
            <Route exact path='/areas' component={AsyncAreaList} />
            <Route path='/areas/create' component={AsyncCreateAreaForm} />
            <Route path='/areas/:id' component={AsyncAreaBoard} />
            <Route path='/404' component={AsyncNotFoundPage}/>
            <Route path='/news/:id' component={AsyncNewsBoard}/>
            <Route exact path='/news' component={AsyncNewsList}/> 
            <Route path="/feedback" component={AsyncFeedback} />
            <Route path='/about' component={AsyncAbout}/>
            <Route path='/settings' component={AsyncSettings}/>
            <Route path='/users' component={AsyncUsers} />
            <Route path='/secret' component={AsyncHome2} />
          </Switch>
          
        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
