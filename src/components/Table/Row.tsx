import React,
{
  memo,
  useMemo,
  NamedExoticComponent,
} from 'react';
import Grid from '@mui/material/Grid';
import Square from './Square';
import {
  CONFIG_BOARD_SIZE,
} from '../../constants';
import {
  TRow,
} from './types';

const  Row: NamedExoticComponent<TRow> = memo(({ rowIndex }: TRow)  => {

  const squares = useMemo(() => {
    const squares = Array.from(Array(CONFIG_BOARD_SIZE).keys());
    return squares.map(colIndex => {
      return (
        <Square
          key={colIndex}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      );
    })
  }, [ rowIndex ]);


  return (
    <Grid
      container
      key={rowIndex}
      spacing={0}
      sx={{
        display: 'flex',
        width: 'auto',
      }}
      data-cy={`simulator-table-grid-container-row-${rowIndex}`}
    >
      {squares}
    </Grid>
  );
});

export default Row;
