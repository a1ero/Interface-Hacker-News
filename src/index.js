import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import StoryPage from './components/StoryPage';
import HackerNews from './pages/HackerNews';
import Past from './pages/Past';
import Comments from './pages/Comments';
import Ask from './pages/Ask';
import Show from './pages/Show';
import Newest from './pages/Newest';
import Jobs from './pages/Jobs';
import Submit from './pages/Submit';
import Login from './pages/Login';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/storyPage/:id" component={StoryPage} />
            <Route exact path="/hackerNews" component={HackerNews} />
            <Route exact path="/past" component={Past} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/ask" component={Ask} />
            <Route exact path="/show" component={Show} />
            <Route exact path="/newest" component={Newest} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/submit" component={Submit} />
            <Route exact path="/login" component={Login} />
          </Switch>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
