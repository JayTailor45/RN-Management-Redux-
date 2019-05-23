import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { CONFIG } from './constants/firebase';
import Firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    Firebase.initializeApp(CONFIG);
  }

  render() {

    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
          <LoginForm/>
        </Provider>
    )
  }
}

export default App