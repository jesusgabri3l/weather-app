import { HashRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/router/ProtectedRoute';
import HomeView from './modules/home/HomeView';
import LoginView from './modules/login/LoginView';

function App() {
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <HomeView />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
