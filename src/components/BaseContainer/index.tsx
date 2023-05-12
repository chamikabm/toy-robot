import React,
{
  FC,
  ReactNode,
} from 'react';
import Box from '@mui/material/Box';

type BaseContainerProps = {
    children: ReactNode;
};

const BaseContainer: FC<BaseContainerProps> = ({ children }) => {

    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
            }}
        >
            {children}
        </Box>
    );
};

export default BaseContainer;
