import React,
{
  FC,
} from 'react';
import {
  Outlet,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout: FC = (): React.ReactElement => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                maxWidth: '100vw',
                flexGrow: 1,
            }}
            data-cy={'simulator-layout'}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Layout;
