import { Switch, Route, Redirect } from 'react-router';
import { publicRoutes } from './routes';

const AppRouter = () => (
  <Switch>
    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} component={Component} exact />
    ))}
    <Redirect to={process.env.REACT_APP_HOME_ROUTE} />
  </Switch>
);

export default AppRouter;
