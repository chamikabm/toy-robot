export type CoordinateObject = {
  x: number;
  y: number;
}

export type FacingObject = {
  x: number;
  y: number;
}

export type Coordinate = CoordinateObject | null;
export type Facing = FacingObject | null;
export type Direction = 'NORTH' | 'SOUTH' | 'WEST' | 'EAST';
export type Orientation = Record<Direction | string, CoordinateObject>;
export type RotateDeg = Record<Direction | string, number>;
