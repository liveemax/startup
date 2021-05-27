import Empty from '../pages/Empty';
import User from '../pages/User';

export const publicRoutes = [
  {
    path: process.env.REACT_APP_USER_ROUTE,
    Component: User,
  },
  {
    path: process.env.REACT_APP_HOME_ROUTE,
    Component: Empty,
  },
];
