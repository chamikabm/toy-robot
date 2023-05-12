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

    return processedResult;
};
