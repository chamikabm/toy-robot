import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import {
  useAppSelector,
} from '../../hooks';
import {
  selectError,
} from '../../pages/Simulator/simulatorSlice';

const CommandError = () => {
  const error = useAppSelector(selectError);

  if (!error) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        p: '0.5rem',
      }}
    >
      <Alert
        severity="error"
        sx={{
          mt: 1,
        }}
      >
        {error}
      </Alert>
    </Box>
  );
};

export default CommandError;

