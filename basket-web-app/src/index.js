import React from 'react';
import {store, persistor} from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import styled, {createGlobalStyle} from 'styled-components'
import AppContainer from "./App-Container";
import {PersistGate} from "redux-persist/integration/react"

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI";


  }
`

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <Global/>
                <AppContainer/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

