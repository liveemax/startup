import { Switch, Route, Redirect } from 'react-router';
import { publicRoutes } from './routes';

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
      <Redirect to={'/'} />
    </Switch>
  );
};

export default AppRouter;
