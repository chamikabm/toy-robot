import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {
  useAppSelector,
} from '../../hooks';
import {
  selectCommandOutput,
} from '../../pages/Simulator/simulatorSlice';

const CommandOutput = () => {
  const commandOutput = useAppSelector(selectCommandOutput);

  if (!commandOutput) {
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
        severity="success"
      >
        <AlertTitle
          role={'command-output-alert-title'}
        >
          Output: {commandOutput}
        </AlertTitle>
      </Alert>
    </Box>
  );
};

export default CommandOutput;
