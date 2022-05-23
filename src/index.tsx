import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = setupStore()

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    //background: teal;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <GlobalStyle/>
        <App />
    </Provider>
);
