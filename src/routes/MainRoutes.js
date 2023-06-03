import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/UniversityMemberEntryForm')));
const Color = Loadable(lazy(() => import('pages/components-overview/OutsiderEntryForm')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/ExitForm')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'eVisitorEntry',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'exit',
      element: <Shadow />
    },
    {
      path: 'universityMemberEntry',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
