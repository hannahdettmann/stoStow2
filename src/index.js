import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import {GoogleAPI} from 'react-google-oauth'
import { BrowserRouter } from 'react-router-dom'
 

const store = createStore(reducer, middleware)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <GoogleAPI clientId="810017428603-bfgilkcrc5iqmbdadj68nu371qltiaj3.apps.googleusercontent.com"
                    onUpdateSigninStatus={Function}
                    onInitFailure={Function} >
            <App />
            </GoogleAPI>
        </Provider>
</BrowserRouter>, document.getElementById('root'))