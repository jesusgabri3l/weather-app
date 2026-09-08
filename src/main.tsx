import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// styles.scss loads last so our overrides win over slick-theme's defaults
// (arrow size/color, dot color) instead of losing the cascade to them.
import './styles/styles.scss';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { loadPersistedState, persistLocationState } from './store/persistence';
import { setupStore } from './store/store';

const store = setupStore(loadPersistedState());
store.subscribe(() => persistLocationState(store.getState()));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
