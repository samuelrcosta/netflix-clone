import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';

export function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Switch>
        {/* Not logged routes */}
        <IsUserRedirect exact path={ROUTES.SIGN_IN} user={user} loggedInPath={ROUTES.BROWSE}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect exact path={ROUTES.SIGN_UP} user={user} loggedInPath={ROUTES.BROWSE}>
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect exact path={ROUTES.HOME} user={user} loggedInPath={ROUTES.BROWSE}>
          <Home />
        </IsUserRedirect>

        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
