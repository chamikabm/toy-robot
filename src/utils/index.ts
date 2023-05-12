export const getCommandValues = (command: string) => {
    try {
        return command.split(/[\s,]+/);
    } catch (e) {
        console.error('Error while splitting the commands. Error : ', e);
        return null;
    }
};

export const processCommandUtil = (commandExecuted: string) => {
    const commandValues = getCommandValues(commandExecuted);
    console.log(commandValues);
};
