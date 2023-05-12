import React,
{
    FC,
    Suspense,
} from 'react';
import {
    Route,
    Routes,
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
    }
];

const AllRoutes = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    {
                        appRoutes.map((route) => (
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
                            />
                        ))
                    }
                </Routes>
            </Layout>
        </Router>
    );
};

export default AllRoutes;
