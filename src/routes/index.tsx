import React,
{
    FC,
    Suspense,
    ReactElement,
} from 'react';
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter as Router,
} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import Layout from '../components/Layout';

// Routes
const Simulator = React.lazy(() => import('../pages/Simulator'));
const HowTo = React.lazy(() => import('../pages/HowTo'));

type Route = {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC,
};

export const appRoutes: Array<Route> = [
    {
        key: 'simulator',
        title: 'Simulator',
        path: '/',
        enabled: true,
        component: Simulator
    },
    {
        key: 'how-to',
        title: 'How To Simulate',
        path: '/howto',
        enabled: true,
        component: HowTo
    },
];

const AllRoutes: FC = (): ReactElement => {

    return (
        <Router>
            <Routes>
                <Route
                  element={<Layout />}
                >
                        {
                            appRoutes.map((route) => (
                              route.enabled ?
                                <Route
                                  key={route.key}
                                  path={route.path}
                                  element={
                                    <Suspense
                                      fallback={<CircularProgress />}
                                    >
                                        <route.component />
                                    </Suspense>
                                  }
                                /> : null
                            ))
                        }
                    <Route
                      path="*"
                      element={<Navigate to="/" replace={true} />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};

export default AllRoutes;
