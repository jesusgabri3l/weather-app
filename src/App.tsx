import { HashRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/router/ProtectedRoute';
import { useAuthOut } from './modules/login/hooks/useAuth';
import LoginView from './modules/login/LoginView';

function App() {
  const authOut = useAuthOut();
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <div className="pt-1">
                  <h1>Home page</h1>
                  <button onClick={authOut}>Logout</button>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
