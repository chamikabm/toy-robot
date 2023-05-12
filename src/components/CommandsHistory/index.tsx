import React,
{
  useMemo,
} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import {
  useAppSelector,
} from '../../hooks';
import {
  selectCommandHistory,
} from '../../pages/Simulator/simulatorSlice';
import {
  arrayHasElements,
} from '../../utils';

const CommandsHistory = () => {
  const commands = useAppSelector(selectCommandHistory);

  const commandsList = useMemo(() => {
    return commands.map((command, index) => {
      return (
        <ListItem key={index} sx={{ borderBottom: '1px solid grey' }}>
          <ListItemIcon>
            <ArrowForwardIos />
          </ListItemIcon>
          <ListItemText primary={command} />
        </ListItem>
      );
    });
  }, [ commands ]);

  if (!arrayHasElements(commands, 1)) {
    return null;
  }

  return  (
    <Box
      sx={{
        width: '100%',
        maxHeight: {
          sx: 100,
          lg: 500,
        },
        overflow: 'auto',
        bgcolor: 'background.paper',
      }}
      data-cy={'simulator-command-history-box'}
    >
      <List>
        {commandsList}
      </List>
    </Box>
  );
};

export default CommandsHistory;
