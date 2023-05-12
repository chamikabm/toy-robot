import {
    arrayHasElements,
    getCommandValues, isExpectedCommand, isValidCoordinate,
    processCommandUtil
} from "../../utils";
import {
    VALID_COMMAND,
} from '../../constants';

describe('Testing: app/utils', () => {

    describe('getCommandValues', () => {
        test('it should return [ "FSDFSD"] if the command is FSDFSD', () => {
            const command = 'FSDFSD';
            const result = getCommandValues(command);
            expect(result).toEqual([ command ]);
        });

        test('it should return [ MOVE ] if the command is MOVE', () => {
            const result = getCommandValues(VALID_COMMAND.MOVE);
            expect(result).toEqual([ VALID_COMMAND.MOVE ]);
        });

        test('it should return [ LEFT ] if the command is LEFT', () => {
            const result = getCommandValues(VALID_COMMAND.LEFT);
            expect(result).toEqual([ VALID_COMMAND.LEFT ]);
        });

        test('it should return [ RIGHT ] if the command is RIGHT', () => {
            const result = getCommandValues(VALID_COMMAND.RIGHT);
            expect(result).toEqual([ VALID_COMMAND.RIGHT ]);
        });

        test('it should return [ REPORT ] if the command is REPORT', () => {
            const result = getCommandValues(VALID_COMMAND.REPORT);
            expect(result).toEqual([ VALID_COMMAND.REPORT ]);
        });
    });

    describe('arrayHasElements', () => {
        test('it should return false if if array is empty', () => {
            const arr: string[] = [];
            const result = arrayHasElements(arr, 1);
            expect(result).toBe(false);
        });

        test('it should return false if if array has more elements than expected count', () => {
            const arr = [ '1', '2', '3', '4', '5' ];
            const result = arrayHasElements(arr, 7);
            expect(result).toBe(false);
        });

        test('it should return true if if array has one element', () => {
            const arr = [ '1' ];
            const result = arrayHasElements(arr, 1);
            expect(result).toBe(true);
        });

        test('it should return true if if array has 4 elements', () => {
            const arr = [ '1', '2', '3', '4' ];
            const result = arrayHasElements(arr, 4);
            expect(result).toBe(true);
        });
    });

    describe('isExpectedCommand', () => {
        test('it should return false if the command is INVALID and expected PLACE', () => {
            const command = 'INVALID';
            const result = isExpectedCommand(VALID_COMMAND.PLACE, command);
            expect(result).toBe(false);
        });

        test('it should return true if the command is PLACE and expected PLACE', () => {
            const command = VALID_COMMAND.PLACE;
            const result = isExpectedCommand(command, command);
            expect(result).toBe(true);
        });

        test('it should return true if the command is MOVE and expected MOVE', () => {
            const command = VALID_COMMAND.MOVE;
            const result = isExpectedCommand(command, command);
            expect(result).toBe(true);
        });

        test('it should return true if the command is LEFT and expected LEFT', () => {
            const command = VALID_COMMAND.LEFT;
            const result = isExpectedCommand(command, command);
            expect(result).toBe(true);
        });

        test('it should return true if the command is RIGHT and expected RIGHT', () => {
            const command = VALID_COMMAND.RIGHT;
            const result = isExpectedCommand(command, command);
            expect(result).toBe(true);
        });

        test('it should return true if the command is REPORT and expected REPORT', () => {
            const command = VALID_COMMAND.REPORT;
            const result = isExpectedCommand(command, command);
            expect(result).toBe(true);
        });
    });

    describe('isValidCoordinate', () => {
        test('it should return false if the coordinate is not a number', () => {
            const coordinate = 1.1;
            const result = isValidCoordinate(coordinate);
            expect(result).toBe(false);
        });

        test('it should return true if the coordinate is a number', () => {
            const coordinate = 1;
            const result = isValidCoordinate(coordinate);
            expect(result).toBe(true);
        });

        test('it should return true if the coordinate is 0', () => {
            const coordinate = 0;
            const result = isValidCoordinate(coordinate);
            expect(result).toBe(true);
        });

        test('it should return true if the coordinate is 5', () => {
            const coordinate = 0;
            const result = isValidCoordinate(coordinate);
            expect(result).toBe(true);
        });
    });

    describe('processCommandUtil', () => {
        test('it should not process invalid UNKNOWN command.', () => {
            const processCommandInput  = {
                commandExecuted: 'UNKNOWN',
            };
            const processCommandResult  = {
                'error': {'message': 'Invalid command'},
                'success': false,
            };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });
    });
});
