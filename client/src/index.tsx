import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './components/redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

// const client = new ApolloClient({
//     uri:'http://localhost:5000/graphql',
//     cache:new InMemoryCache()
// })

//const store=createStore(rootReducer)
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));



ReactDOM.render(
    <React.StrictMode>
        {/* <ApolloProvider client={client}> */}
             <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        {/* </ApolloProvider> */}
    </React.StrictMode>,
    document.getElementById('root'),
);


