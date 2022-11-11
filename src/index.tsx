import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";

//ReactDOM.render(<App />,  document.getElementById('root'));
//ReactDOM.render(<AppWithReducers />,  document.getElementById('root'));
//ReactDOM.render(<AppWithRedux />,  document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>, document.getElementById('root')
)

serviceWorker.unregister();
