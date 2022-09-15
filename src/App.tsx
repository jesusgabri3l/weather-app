import { HashRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/router/ProtectedRoute';
import { useAuthOut } from './modules/login/hooks/useAuth';
import LoginView from './modules/login/LoginView';

function App() {
  const authOut = useAuthOut();
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <>
                  <h1>Home page</h1>
                  <button onClick={authOut}>Logout</button>
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
