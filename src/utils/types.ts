import {
  Facing,
  Coordinate,
} from '../types';

export type TProcessResult = {
  coordinate: Coordinate;
  facing: Facing;
  placed: boolean;
  success: boolean;
  processedCommand: string;
  processedCommandOutput: string;
  error: {
    message: string;
  };
};

export type TProcessCommandInputs = {
  commandExecuted: string;
  currCoordinate: Coordinate;
  currFacing: Facing;
  isPlaced: boolean;
};