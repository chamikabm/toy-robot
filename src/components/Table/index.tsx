import React,
{
  FC,
  useMemo,
  ReactElement,
} from 'react';
import Grid from '@mui/material/Grid';
import Row from './Row';
import {
  CONFIG_BOARD_SIZE,
} from '../../constants';

const Table: FC = (): ReactElement => {

  const rows = useMemo(() => {
    const rows = Array.from(Array(CONFIG_BOARD_SIZE).keys());
    return rows.map(rowIndex => {
      return (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
        />
      );
    })
  }, [ ]);

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      data-cy={'simulator-table-grid'}
    >
      {rows}
    </Grid>
  );
};

export default Table;
