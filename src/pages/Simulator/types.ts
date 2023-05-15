import {
  Facing,
  Coordinate,
} from '../../types';

export type TSimulatorState = {
  commandHistory: string[];
  commandOutput: string;
  hasRobotPlacedOnTheTable: boolean;
  coordinate: Coordinate;
  facing: Facing;
  error: null | string;
};