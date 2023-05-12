import {
    ORIENTATION,
    TABLE_DIMENSION,
    VALID_COMMAND,
    VALID_FACING_DIRECTIONS,
    VALID_VALID_COMMANDS
} from "../constants";
import {
    Facing,
    Direction,
    Coordinate,
    CoordinateObject,
} from "../types";

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
                // Handle command
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
        break;
        case VALID_COMMAND.LEFT:
            if (isPlaced) {
                // Handle command
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
        break;
        case VALID_COMMAND.RIGHT:
            if (isPlaced) {
                // Handle command
            } else {
                processedResult.error = {
                    message: 'Robot must be place on the table before executing other commands',
                };
            }
        break;
        case VALID_COMMAND.REPORT:
            if (isPlaced) {
                // Handle command
            } else {
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
