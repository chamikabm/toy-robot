import {
    getCommandValues,
} from '../../utils';
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
});
