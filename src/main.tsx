import './index.css';
import './styles/styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
);
