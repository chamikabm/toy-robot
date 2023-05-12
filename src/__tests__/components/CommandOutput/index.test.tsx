import {
  render,
} from '@testing-library/react';
import {
  Provider,
} from 'react-redux';
import {
  setupStore,
} from '../../../store';
import CommandOutput from '../../../components/CommandOutput';

describe('Testing: Component: CommandOutput',  () => {
  test('should not render other elements if there`s no command output.', () => {
    const { container } = render(
      <Provider store={setupStore()}>
        <CommandOutput />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });
});
