import { VALID_COMMAND, VALID_VALID_COMMANDS } from "../constants";

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

export type TProcessResult = {
    success: boolean;
    error: {
        message: string;
    };
};

export type TProcessCommandInputs = {
    isPlaced: boolean;
    commandExecuted: string;
};

export const processCommandUtil = ({
                                       isPlaced,
                                       commandExecuted,
                                   }: TProcessCommandInputs): TProcessResult => {
    const commandValues = getCommandValues(commandExecuted);

    const processedResult: TProcessResult = {
        success: false,
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
