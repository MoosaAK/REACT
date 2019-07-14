import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Helloworld from './App';
import Method from './Method';

// import * as serviceWorker from './serviceWorker';

// var h1 = <h1 title="REACT">Hello World!</h1>

ReactDOM.render(
    <div>
        <Helloworld link="https://www.google.com" linkText="GOOGLE" />
        <Helloworld link="https://www.facebook.com" linkText="FACEBOOK" />
        <Helloworld link="https://www.yahoo.com" linkText="YAHOO" />
        <Method/>
    </div>
    , document.getElementById('root'),
);


