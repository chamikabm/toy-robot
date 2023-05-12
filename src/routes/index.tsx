import React,
{
    FC,
} from 'react';
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '../components/Layout';

// Routes
import Simulator from '../pages/Simulator';
import HowTo from '../pages/HowTo';

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
                                element={<route.component />}
                            />
                        ))
                    }
                </Routes>
            </Layout>
        </Router>
    );
};

export default AllRoutes;
