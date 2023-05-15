import {
  RotateDeg,
  Orientation,
} from '../types';

export const VALID_COMMAND = Object.freeze({
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT',
});
export const VALID_VALID_COMMANDS = Object.keys(VALID_COMMAND);
export const VALID_DIRECTION = Object.freeze({
  NORTH: 'NORTH',
  EAST: 'EAST',
  SOUTH: 'SOUTH',
  WEST: 'WEST',
});
export const VALID_FACING_DIRECTIONS = Object.keys(VALID_DIRECTION);
export const CONFIG_BOARD_SIZE = 5;
export const TABLE_DIMENSION = {
  x: CONFIG_BOARD_SIZE - 1,
  y: CONFIG_BOARD_SIZE - 1,
};

export const ORIENTATION: Orientation = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 }
};

export const ROTATE_DEG: RotateDeg = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270
};
