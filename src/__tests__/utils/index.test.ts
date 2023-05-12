import {
    testFunction,
} from '../../utils';

describe('Testing: app/utils', () => {
    describe('testFunction', () => {
        test('it should return true if the function executed.', () => {
            expect(testFunction()).toBeTruthy();
        });
    });
});
