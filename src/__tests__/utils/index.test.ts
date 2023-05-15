import {
    getRotateBy,
    getDirection,
    arrayHasElements,
    getCommandValues,
    isExpectedCommand,
    isValidCoordinate,
    processCommandUtil,
    getFacingOrientation,
    isPlacedInsideTheTable,
    isValidaFacingDirection,
} from '../../utils';
import {
    ROTATE_DEG,
    ORIENTATION,
    VALID_COMMAND,
    VALID_DIRECTION,
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

        test('it should return [ PLACE, 0,0,NORTH ] if the command is PLACE 0,0,NORTH', () => {
            const result = getCommandValues('PLACE 0,0,NORTH');
            expect(result).toEqual([ 'PLACE', '0','0', 'NORTH' ]);
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

    describe('getFacingOrientation', () => {
        test('it should return { x: 0, y: 1 } facing orientation if the new direction is NORTH', () => {
            const facing = { x: 0, y: 1 };
            const result = getFacingOrientation(VALID_DIRECTION.NORTH);
            expect(result).toEqual(facing);
        });

        test('it should return { x: 0, y: 1 } facing orientation if the new direction is WEST', () => {
            const facing = { x: -1, y: 0 };
            const result = getFacingOrientation(VALID_DIRECTION.WEST);
            expect(result).toEqual(facing);
        });

        test('it should return { x: 0, y: 1 } facing orientation if the new direction is SOUTH', () => {
            const facing = { x: 0, y: -1 };
            const result = getFacingOrientation(VALID_DIRECTION.SOUTH);
            expect(result).toEqual(facing);
        });

        test('it should return { x: 1, y: 0 } facing orientation if the new direction is EAST', () => {
            const facing = { x: 1, y: 0 };
            const result = getFacingOrientation(VALID_DIRECTION.EAST);
            expect(result).toEqual(facing);
        });
    });

    describe('getRotateBy', () => {
        test('it should null if the direction is null', () => {
            const result = getRotateBy(null);
            expect(result).toBeNull();
        });

        test('it should undefined if the direction is UNKNOWN', () => {
            const direction = 'UNKNOWN';
            const result = getRotateBy(direction);
            expect(result).toBeUndefined();
        });

        test('it should null if the direction is EAST', () => {
            const direction = VALID_DIRECTION.EAST;
            const result = getRotateBy(direction);
            expect(result).toBe(ROTATE_DEG.EAST);
        });

        test('it should null if the direction is WEST', () => {
            const direction = VALID_DIRECTION.WEST;
            const result = getRotateBy(direction);
            expect(result).toBe(ROTATE_DEG.WEST);
        });

        test('it should null if the direction is NORTH', () => {
            const direction = VALID_DIRECTION.NORTH;
            const result = getRotateBy(direction);
            expect(result).toBe(ROTATE_DEG.NORTH);
        });

        test('it should null if the direction is SOUTH', () => {
            const direction = VALID_DIRECTION.SOUTH;
            const result = getRotateBy(direction);
            expect(result).toBe(ROTATE_DEG.SOUTH);
        });
    });

    describe('getDirection', () => {
        test('it should return null if facing coordinates are not in the rage', () => {
            const facing = { x: 2, y: 2 };
            const result = getDirection(facing);
            expect(result).toBe(null);
        });

        test('it should return NORTH if facing coordinates are { x: 0, y: 1 }', () => {
            const facing = { x: 0, y: 1 };
            const result = getDirection(facing);
            expect(result).toEqual(VALID_DIRECTION.NORTH);
        });

        test('it should return WEST if facing coordinates are { x: -1, y: 0 }', () => {
            const facing = { x: -1, y: 0 };
            const result = getDirection(facing);
            expect(result).toEqual(VALID_DIRECTION.WEST);
        });

        test('it should return SOUTH if facing coordinates are { x: 0, y: -1 }', () => {
            const facing = { x: 0, y: -1 };
            const result = getDirection(facing);
            expect(result).toEqual(VALID_DIRECTION.SOUTH);
        });

        test('it should return EAST if facing coordinates are { x: 1, y: 0 }', () => {
            const facing = { x: 1, y: 0 };
            const result = getDirection(facing);
            expect(result).toEqual(VALID_DIRECTION.EAST);
        });
    });

    describe('processCommandUtil', () => {
        test('it should not process invalid PLACE 0,0,UNKNOWN', () => {
            const processCommandInput  = {
                commandExecuted: 'PLACE 0,0,UNKNOWN',
                currCoordinate: { x: 0, y: 0},
                currFacing: ORIENTATION.NORTH,
                isPlaced: false,
            };
            const processCommandResult  = {
                'coordinate': {'x': 0, 'y': 0},
                'error': {'message': 'Invalid facing direction. Only allowed : NORTH,EAST,SOUTH,WEST'},
                'facing': {'x': 0, 'y': 1},
                'placed': false,
                'processedCommand': '',
                'processedCommandOutput': '',
                'success': false,
            };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });

        test('it should process PLACE 0,0,NORTH', () => {
            const processCommandInput  = {
                commandExecuted: 'PLACE 0,0,NORTH',
                currCoordinate: { x: 0, y: 0},
                currFacing: ORIENTATION.NORTH,
                isPlaced: false,
            };
            const processCommandResult  = {
                  coordinate: { 'x': 0, 'y': 0 },
                  error: { 'message': '' },
                  facing: { 'x': 0, 'y': 1 },
                  placed: true,
                  processedCommand: 'PLACE 0,0,NORTH',
                  processedCommandOutput: '',
                  success: true,
              };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });

        test('it should process MOVE', () => {
            const processCommandInput  = {
                commandExecuted: 'MOVE',
                currCoordinate: { x: 0, y: 0},
                currFacing: ORIENTATION.NORTH,
                isPlaced: true,
            };
            const processCommandResult  = {
                'coordinate': {'x': 0, 'y': 1},
                'error': {'message': ''},
                'facing': {'x': 0, 'y': 1},
                'placed': true,
                'processedCommand': 'MOVE',
                'processedCommandOutput': '',
                'success': true,
              };
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });

        test('it should not process if the command not found', () => {
            const processCommandInput  = {
                commandExecuted: 'NOT_A_COMMAND',
                currCoordinate: { x: 0, y: 0},
                currFacing: ORIENTATION.NORTH,
                isPlaced: false,
            };
            const processCommandResult  = {
                'coordinate': {'x': 0, 'y': 0},
                'error': {
                    'message': 'Invalid command. Only allowed : PLACE,MOVE,LEFT,RIGHT,REPORT',
                },
                'facing': {'x': 0, 'y': 1},
                'placed': false,
                'processedCommand': '',
                'processedCommandOutput': '',
                'success': false,
            }
            const result = processCommandUtil(processCommandInput);
            expect(result).toEqual(processCommandResult);
        });
    });
});
