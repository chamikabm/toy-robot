import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    Provider,
} from 'react-redux';
import {
    store,
} from './store';
import ErrorBoundary from './components/ErrorBoundary';

const rootNode = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (!rootNode) {
    throw new Error('Could not find a root element with the ID \'root\'');
}

rootNode.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider
          store={store}
      >
          <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
