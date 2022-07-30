import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import TodoProvider from './context/context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<TodoProvider>
        <App/>
    </TodoProvider>
);

reportWebVitals();
