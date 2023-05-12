import {
    ROTATE_DEG,
    ORIENTATION,
    VALID_COMMAND,
    TABLE_DIMENSION,
    VALID_DIRECTION,
    VALID_VALID_COMMANDS,
    VALID_FACING_DIRECTIONS,
} from '../constants';
import {
    Facing,
    Direction,
    Coordinate,
    CoordinateObject,
} from '../types';

export const getCommandValues = (command: string) => {
    try {
        return command.split(/[\s,]+/);
    } catch (e) {
        console.error('Error while splitting the commands. Error : ', e);
        return null;
    }
};

export const arrayHasElements = (arr: string[], expectedElementCount = 1 ) => {
    return Array.isArray(arr) && (arr.length >= expectedElementCount);
};

export const isExpectedCommand = (expected: string, received: string) => {
    try {
        const regex = new RegExp(`^${expected}\\s*$`, 'i');
        return regex.test(received);
    } catch (e) {
        return false;
    }
};

export const isValidCoordinate = (coordinate: number) => {
    return Number.isInteger(coordinate) && Math.sign(coordinate) >= 0;
};

export const isValidaFacingDirection = (facingDirection: string) => {
    return facingDirection && VALID_FACING_DIRECTIONS.includes(facingDirection);
};

export const isPlacedInsideTheTable = ({ x, y }: CoordinateObject) => {
    return x >= 0 && x <= TABLE_DIMENSION.x && y >= 0 && y <= TABLE_DIMENSION.y;
};

export const getFacingOrientation = (newOrientation: Direction) => {
    return ORIENTATION[newOrientation];
};

export const getRotateBy = (direction: string | null) => {
    if (!direction) {
        return null;
    }

    return ROTATE_DEG[direction];
};

export const getDirection = (facing: Facing) => {

    if (facing) {
        const x = facing.x;
        const y = facing.y;

        if (x === 0 && y === 1) {
            return VALID_DIRECTION.NORTH;
        } else if (x === 0 && y === -1) {
            return VALID_DIRECTION.SOUTH;
        } else if (x === 1 && y === 0) {
            return VALID_DIRECTION.EAST;
        } else if (x === -1 && y === 0) {
            return VALID_DIRECTION.WEST;
        }
    }

    return null;
};

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

export const processCommandUtil = ({
                                       isPlaced,
                                       currFacing,
                                       currCoordinate,
                                       commandExecuted,
                                   }: TProcessCommandInputs): TProcessResult => {
    const commandValues = getCommandValues(commandExecuted);

    const processedResult: TProcessResult = {
        facing: currFacing,
        placed: isPlaced,
        success: false,
        coordinate: currCoordinate,
        processedCommand: '',
        processedCommandOutput: '',
        error: {
            message: '',
        },
    };

    if (!commandValues) {
        processedResult.error.message = 'Invalid command';
        return processedResult;
    }

    if (!arrayHasElements(commandValues)) {
        processedResult.error.message = 'Invalid command';
        return processedResult;
    }

    const command = commandValues[0];
    switch (command) {
        case VALID_COMMAND.PLACE:
        {
            if (!isExpectedCommand(VALID_COMMAND.PLACE, command)) {
                processedResult.error = {
                    message: 'Robot must be place on the table to start.',
                };

                return processedResult;
            }

            if (!arrayHasElements(commandValues, 4)) {
                processedResult.error = {
                    message: 'Invalid PLACE command.',
                };

                return processedResult;
            }

            const x = parseInt(commandValues[1], 10);
            const y = parseInt(commandValues[2], 10);
            if (!isValidCoordinate(x) || !isValidCoordinate(y)) {
                processedResult.error = {
                    message: 'Invalid coordinates.',
                };

                return processedResult;
            }

            const facingDirection = commandValues[3];
            if (!isValidaFacingDirection(facingDirection)) {
                processedResult.error = {
                    message: `Invalid facing direction. Only allowed : ${VALID_FACING_DIRECTIONS}`,
                };

                return processedResult;
            }

            if (isPlacedInsideTheTable({ x, y })) {
                const coordinate = {
                    x,
                    y,
                };
                processedResult.facing = getFacingOrientation(facingDirection as Direction);
                processedResult.coordinate = coordinate;
                processedResult.placed = true;
                processedResult.success = true;
                processedResult.processedCommand = commandExecuted;
                processedResult.processedCommandOutput = '';
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table to start.',
                };
            }
        }
        break;
        case VALID_COMMAND.MOVE:
            if (isPlaced) {
                const currentX = currCoordinate ? currCoordinate.x : 0;
                const currentY = currCoordinate ? currCoordinate.y : 0;
                const newCoordinates = {
                    x: currentX + (currFacing ? currFacing.x : 0),
                    y: currentY + (currFacing ? currFacing.y : 0),
                };

                if (isPlacedInsideTheTable(newCoordinates)) {
                    processedResult.facing = currFacing;
                    processedResult.coordinate = newCoordinates;
                    processedResult.placed = true;
                    processedResult.success = true;
                    processedResult.processedCommand = commandExecuted;
                    processedResult.processedCommandOutput = '';
                } else {
                    processedResult.error = {
                        message: 'Robot cannot move further on this direction.',
                    }
                }
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
            break;
        case VALID_COMMAND.LEFT:
            if (isPlaced) {
                const currentFacingCoordinates = {
                    x: currFacing ? currFacing.x : 0,
                    y: currFacing ? currFacing.y : 0,
                };

                processedResult.facing = {
                    x: currentFacingCoordinates.y === 0 ? 0 : -currentFacingCoordinates.y,
                    y: currentFacingCoordinates.x,
                }
                processedResult.coordinate = currCoordinate;
                processedResult.placed = true;
                processedResult.success = true;
                processedResult.processedCommand = commandExecuted;
                processedResult.processedCommandOutput = '';
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
            break;
        case VALID_COMMAND.RIGHT:
            if (isPlaced) {
                const currentFacingCoordinates = {
                    x: currFacing ? currFacing.x : 0,
                    y: currFacing ? currFacing.y : 0,
                };
                processedResult.facing = {
                    x: currentFacingCoordinates.y,
                    y: currentFacingCoordinates.x === 0 ?  0 : -currentFacingCoordinates.x,
                };
                processedResult.coordinate = currCoordinate;
                processedResult.placed = true;
                processedResult.success = true;
                processedResult.processedCommand = commandExecuted;
                processedResult.processedCommandOutput = '';
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
            break;
        case VALID_COMMAND.REPORT:
            if (isPlaced) {
                const facingDirection = getDirection(currFacing);
                const currentX = currCoordinate ? currCoordinate.x : 0;
                const currentY = currCoordinate ? currCoordinate.y : 0;

                processedResult.success = true
                processedResult.processedCommand = commandExecuted;
                processedResult.processedCommandOutput =
                  `${currentX},${currentY},${facingDirection}`;
            } else  {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
            break;
        default:
            processedResult.error = {
                message: `Invalid facing direction. Only allowed : ${VALID_VALID_COMMANDS}`,
            };
            break;
    }

    return processedResult;
};


