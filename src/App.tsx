import { HashRouter, Route, Routes } from 'react-router-dom';

import TheLayout from './components/layout/TheLayout';
import ProtectedRoute from './components/router/ProtectedRoute';
import HomeView from './modules/home/HomeView';
import LoginView from './modules/login/LoginView';

function App() {
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Routes>
          <Route path="login" element={<LoginView />} />
          <Route path="/" element={<TheLayout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <HomeView />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
