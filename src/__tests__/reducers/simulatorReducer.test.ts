import reducer,
{
  restart,
  initialState,
  processCommand,
} from '../../pages/Simulator/simulatorSlice';

describe('Testing: Reducer: simulatorReducer', () => {
  describe('processCommand', () => {
    test('should return initial state.', () => {
      expect(reducer(undefined, { type: undefined })).toEqual(initialState);
    });

    test('should show Invalid PLACE command error for invalid PLACE command action.', () => {
      const command = 'PLACE 0,0';
      const nextState =  {
        'commandHistory': [],
        'commandOutput': '',
        'coordinate': null,
        'error': 'Invalid PLACE command.',
        'facing': null,
        'hasRobotPlacedOnTheTable': false,
      }
      expect(reducer(initialState, processCommand(command))).toEqual(nextState);
    });

    test('should show out of range error for invalid PLACE command action.', () => {
      const command = 'PLACE 6,6, NORTH';
      const nextState =   {
        'commandHistory': [],
        'commandOutput': '',
        'coordinate': null,
        'error': 'Robot must be place on the table to start.',
        'facing': null,
        'hasRobotPlacedOnTheTable': false,
      }

      expect(reducer(initialState, processCommand(command))).toEqual(nextState);
    });

    test('should handle correctly process valid PLACE action.', () => {
      const command = 'PLACE 0,0,NORTH';
      const nextState =  {
        'commandHistory': ['PLACE 0,0,NORTH'],
        'commandOutput': '',
        'coordinate': {'x': 0, 'y': 0},
        'error': '',
        'facing': {'x': 0, 'y': 1},
        'hasRobotPlacedOnTheTable': true,
      };
      expect(reducer(initialState, processCommand(command))).toEqual(nextState);
    });

    test('should show correct error for invalid MOVE command action.', () => {
      const command = 'MOVE';
      const nextState = {
        'commandHistory': [],
        'commandOutput': '',
        'coordinate': null,
        'error': 'Robot must be place on the table before executing other commands',
        'facing': null,
        'hasRobotPlacedOnTheTable': false,
      };

      expect(reducer(initialState, processCommand(command))).toEqual(nextState);
    });

    test('should show Invalid PLACE command error for valid MOVE command action.', () => {
      const command = 'MOVE';
      const previousState = {
        'commandHistory': ['PLACE 0,0,NORTH'],
        'commandOutput': '',
        'coordinate': {'x': 0, 'y': 0},
        'error': '',
        'facing': {'x': 0, 'y': 1},
        'hasRobotPlacedOnTheTable': true,
      };
      const nextState = {
        'commandHistory': ['MOVE', 'PLACE 0,0,NORTH'],
        'commandOutput': '',
        'coordinate': {'x': 0, 'y': 1},
        'error': '',
        'facing': {'x': 0, 'y': 1},
        'hasRobotPlacedOnTheTable': true,
      };

      expect(reducer(previousState, processCommand(command))).toEqual(nextState);
    });

    test('should error if robot cannot move further for MOVE command action.', () => {
      const command = 'MOVE';
      const previousState = {
        'commandHistory': ['MOVE', 'MOVE', 'MOVE', 'MOVE', 'PLACE 0,0,NORTH'],
        'commandOutput': '',
        'coordinate': {'x': 0, 'y': 4},
        'error': '',
        'facing': {'x': 0, 'y': 1},
        'hasRobotPlacedOnTheTable': true,
      };
      const nextState = {
        'commandHistory': ['MOVE', 'MOVE', 'MOVE', 'MOVE', 'PLACE 0,0,NORTH'],
        'commandOutput': '',
        'coordinate': {'x': 0, 'y': 4},
        'error': 'Robot cannot move further on this direction.',
        'facing': {'x': 0, 'y': 1},
        'hasRobotPlacedOnTheTable': true,
      };

      expect(reducer(previousState, processCommand(command))).toEqual(nextState);
    });
  })

  describe('restart', () => {
    test('should reset the state to initial state.', () => {
      const previousState = {
        'commandHistory': ['MOVE', 'MOVE', 'MOVE', 'MOVE', 'PLACE 0,0,NORTH'],
        'commandOutput': '',
        'coordinate': {'x': 0, 'y': 4},
        'error': 'Robot cannot move further on this direction.',
        'facing': {'x': 0, 'y': 1},
        'hasRobotPlacedOnTheTable': true,
      };

      expect(reducer(previousState, restart())).toEqual(initialState);
    });
  });
});
