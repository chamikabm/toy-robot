import React from 'react';
import {
  screen,
} from '@testing-library/react';
import CommandOutput from '../../../components/CommandOutput';
import {
  renderWithProviders,
} from '../../../utils/test-utils';

describe('Testing: Component: CommandOutput',  () => {
  test('should not render other elements if there`s no command output.', () => {
    const {
      container,
    } = renderWithProviders(<CommandOutput />);

    expect(container.firstChild).toBeNull();
  });


  test('should render the alert if there`s a command output.', () => {
    renderWithProviders(<CommandOutput />, {
      preloadedState: {
        simulator: {
          'commandHistory': ['REPORT', 'PLACE 0,0,NORTH'],
          'commandOutput': '0,0,NORTH',
          'coordinate': {'x': 0, 'y': 0},
          'error': '',
          'facing': {'x': 0, 'y': 1},
          'hasRobotPlacedOnTheTable': true,
        },
      },
    });

    const element = screen.getByRole('command-output-alert-title')
    expect(element).not.toBeNull();
    expect(element).toHaveTextContent('Output: 0,0,NORTH');
  });
});
