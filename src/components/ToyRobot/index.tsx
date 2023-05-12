import React,
{
  memo,
  useMemo,
} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {
  getRotateBy,
  getDirection,
} from '../../utils';
import {
  useAppSelector,
} from '../../hooks';
import {
  selectFacing,
} from '../../pages/Simulator/simulatorSlice';

type TToyRobot = {
  showRobot: boolean;
};

const ToyRobot = memo(({ showRobot }: TToyRobot) => {
  const facing = useAppSelector(selectFacing);

  const direction = useMemo(() => {
    return getDirection(facing)
  }, [ facing ]);

  const rotateBy = useMemo(() => {
    return getRotateBy(direction)
  }, [ direction ]);

  if (!showRobot) {
    return null;
  }

  return (
    <Card
      sx={{
        width: '80%',
        height: '80%',
        margin: 'auto',
      }}
    >
      <CardMedia
        sx={{
          transform: `rotate(${rotateBy}deg)`,
        }}
        component='img'
        image={require('../../assets/Simulator/robot.png')}
        alt={`Robot facing ${direction}`}
      />
    </Card>
  );
});

export default ToyRobot;
