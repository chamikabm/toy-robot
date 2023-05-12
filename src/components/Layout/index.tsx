import React,
{
    FC,
    ReactNode,
} from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Footer from '../Footer';

type LayoutProps = {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
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
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
