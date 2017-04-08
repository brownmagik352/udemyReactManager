import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDZOzppaR_K6PgsHw13KwBCpk4jgqieUe8',
            authDomain: 'manager-57ead.firebaseapp.com',
            databaseURL: 'https://manager-57ead.firebaseio.com',
            projectId: 'manager-57ead',
            storageBucket: 'manager-57ead.appspot.com',
            messagingSenderId: '490968371060'
        };

        firebase.initializeApp(config);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
