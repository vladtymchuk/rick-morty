import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import { GlobalStyle } from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = setupStore()



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <GlobalStyle/>
        <App />
    </Provider>
);
