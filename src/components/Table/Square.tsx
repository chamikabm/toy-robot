import React,
{
  NamedExoticComponent,
  memo,
} from 'react';
import {
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Text from '../Text';
import ToyRobot from '../ToyRobot';
import {
  CONFIG_BOARD_SIZE,
} from '../../constants';
import {
  TSquare,
} from './types';
import {
  useAppSelector,
} from '../../hooks';
import {
  selectCoordinate,
} from '../../pages/Simulator/simulatorSlice';

const Square: NamedExoticComponent<TSquare> = memo(({ rowIndex, colIndex }: TSquare) => {
  const coordinate = useAppSelector(selectCoordinate);
  const theme = useTheme();

  const isDarkSquare = (rowIndex + colIndex) % 2 === 1;
  const color = isDarkSquare ? theme.palette.secondary.dark : theme.palette.secondary.light;
  const rowReverseIndex = CONFIG_BOARD_SIZE - rowIndex - 1;
  const squareName = `${colIndex}-${rowReverseIndex}`;
  let robotSquare = false;

  if (coordinate) {
    robotSquare = coordinate
      && coordinate.x === colIndex
      && coordinate.y === rowReverseIndex;
  }

  return (
    <Grid
      key={squareName}
      item
      data-cy={`simulator-table-square-grid-item-${rowIndex}-${colIndex}`}
    >
      <Paper
        sx={{
          width: '8vw',
          height: '8vw',
          backgroundColor: color,
          padding: {
            xs: '2px',
            md: 1,
          },
        }}
        data-cy={`simulator-table-square-paper-${rowIndex}-${colIndex}`}
      >
        <Text
          text={squareName}
          type={'overline'}
          data-cy={`simulator-table-square-text-index-${rowIndex}-${colIndex}`}
        />
        {
          <ToyRobot
            showRobot={robotSquare}
          />
        }
      </Paper>
    </Grid>
  );
});

export default Square;
