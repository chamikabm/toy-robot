import React,
{
  useState,
  useCallback,
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';
import Divider from '@mui/material/Divider';
import {
  restart,
  processCommand,
} from '../../pages/Simulator/simulatorSlice';
import {
  useAppDispatch,
} from '../../hooks';
import {
  VALID_VALID_COMMANDS,
} from '../../constants';

const CommandsInput = () => {
  const [ command, setCommand ] = useState<string|null>('');
  const dispatch = useAppDispatch();

  const onChange = useCallback((e: React.SyntheticEvent, value: string | null) => {
    setCommand(value);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!command) return;

    dispatch(processCommand(command));

    setCommand('');
  };

  const handleStartOver = () => {
    dispatch(restart());
    setCommand('');
  };

  return  (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        p: '1rem'
      }}
      onSubmit={handleSubmit}
      data-cy={'simulator-command-input-box'}
    >
      <Stack
        spacing={2}
        direction={{
          md: 'row',
          xs: 'column',
        }}
        alignItems={{
          md: 'center',
        }}
        justifyContent={'flex-end'}
        data-cy={'simulator-command-input-stack'}
      >
        <Autocomplete
          sx={{
            flex: 1,
          }}
          id="command"
          freeSolo
          options={VALID_VALID_COMMANDS}
          renderInput={(params) => <TextField {...params} label="Command" />}
          onInputChange={onChange}
          value={command}
          data-cy={'simulator-command-input-auto-complete'}
        />
        <Button
          type={'submit'}
          sx={{
            mt: {
              xs: '0.5rem',
            }
          }}
          variant="contained"
          endIcon={<SendIcon />}
          data-cy={'simulator-command-input-button-send'}
          disabled={!command}
        >
          Send
        </Button>
        <Divider
          sx={{
            height: 28,
            m: 0.5,
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
          orientation="vertical"
          data-cy={'simulator-command-input-divider'}
        />
        <Button
          sx={{
            mt: {
              xs: '0.5rem',
            },
          }}
          variant="contained"
          color="success"
          endIcon={<RefreshIcon />}
          data-cy={'simulator-command-input-button-start-over'}
          onClick={handleStartOver}
        >
          Start Over
        </Button>
      </Stack>
    </Box>
  );
};

export default CommandsInput;
