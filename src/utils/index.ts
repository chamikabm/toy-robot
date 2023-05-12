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

export type TProcessResult = {
    success: boolean;
    error: {
        message: string;
    };
};

export type TProcessCommandInputs = {
    commandExecuted: string;
};

export const processCommandUtil = ({
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
