import {
    arrayHasElements,
    getCommandValues, isExpectedCommand, isPlacedInsideTheTable, isValidaFacingDirection, isValidCoordinate,
    processCommandUtil
} from "../../utils";
import {
    VALID_COMMAND, VALID_DIRECTION
} from "../../constants";

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


    describe('isValidaFacingDirection', () => {
        test('it should return true if the facing direction is UNKNOWN', () => {
            const facingDirection = 'UNKNOWN';
            const result = isValidaFacingDirection(facingDirection);
            expect(result).toBe(false);
        });

        test('it should return true if the facing direction is NORTH', () => {
            const facingDirection = VALID_DIRECTION.NORTH;
            const result = isValidaFacingDirection(facingDirection);
            expect(result).toBe(true);
        });

        test('it should return true if the facing direction is SOUTH', () => {
            const facingDirection = VALID_DIRECTION.SOUTH;
            const result = isValidaFacingDirection(facingDirection);
            expect(result).toBe(true);
        });

        test('it should return true if the facing direction is EAST', () => {
            const facingDirection = VALID_DIRECTION.EAST;
            const result = isValidaFacingDirection(facingDirection);
            expect(result).toBe(true);
        });

        test('it should return true if the facing direction is WEST', () => {
            const facingDirection = VALID_DIRECTION.WEST;
            const result = isValidaFacingDirection(facingDirection);
            expect(result).toBe(true);
        });
    });

    describe('isPlacedInsideTheTable', () => {
        test('it should return true if the middle coordinates within the table.', () => {
            const coordinates = {
                x: 3,
                y: 4,
            };
            const result = isPlacedInsideTheTable(coordinates);
            expect(result).toBe(true);
        });

        test('it should return true if the far edge coordinates within the table.', () => {
            const coordinates = {
                x: 4,
                y: 4,
            };
            const result = isPlacedInsideTheTable(coordinates);
            expect(result).toBe(true);
        });

        test('it should return true if the close edge coordinates within the table.', () => {
            const coordinates = {
                x: 0,
                y: 0,
            };
            const result = isPlacedInsideTheTable(coordinates);
            expect(result).toBe(true);
        });

        test('it should return true if the one x edge coordinate is not within the table.', () => {
            const coordinates = {
                x: 6,
                y: 0,
            };
            const result = isPlacedInsideTheTable(coordinates);
            expect(result).toBe(false);
        });

        test('it should return false if the one y edge coordinate is not within the table.', () => {
            const coordinates = {
                x: 0,
                y: 6,
            };
            const result = isPlacedInsideTheTable(coordinates);
            expect(result).toBe(false);
        });

        test('it should return false if all edge coordinates are not within the table.', () => {
            const coordinates = {
                x: 6,
                y: 6,
            };
            const result = isPlacedInsideTheTable(coordinates);
            expect(result).toBe(false);
        });
    });

    describe('processCommandUtil', () => {
        test('it should not process invalid UNKNOWN command.', () => {
            const processCommandInput  = {
                commandExecuted: 'UNKNOWN',
                isPlaced: false,
            };
            const processCommandResult  = {
                'error': {'message': 'Invalid command'},
                'success': false,
            };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });
        test('it should not process invalid MOVE command.', () => {
            const processCommandInput  = {
                commandExecuted: 'MOVE',
                isPlaced: false,
            };
            const processCommandResult  = {
                'error': {'message': 'Robot must be place on the table before executing other commands'},
                'success': false,
            };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });
        test('it should not process invalid REPORT command.', () => {
            const processCommandInput  = {
                commandExecuted: 'MOVE',
                isPlaced: false,
            };
            const processCommandResult  = {
                'error': {'message': 'Robot must be place on the table before executing other commands'},
                'success': false,
            };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });
        test('it should not process invalid PLACE command.', () => {
            const processCommandInput  = {
                commandExecuted: 'PLACE 7,7,NORTH',
                isPlaced: false,
            };
            const processCommandResult  = {
                'error': {'message': 'Robot must be place on the table to start.', },
                'success': false,
            };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });
    });
});
