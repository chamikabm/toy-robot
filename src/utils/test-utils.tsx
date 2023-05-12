import React,
{
  PropsWithChildren,
} from 'react';
import {
  render,
} from '@testing-library/react';
import type {
  RenderOptions,
} from '@testing-library/react';
import {
  configureStore,
} from '@reduxjs/toolkit';
import type {
  PreloadedState,
} from '@reduxjs/toolkit';
import {
  Provider,
} from 'react-redux';

import type {
  AppStore,
  RootState,
} from '../store';

// As a basic setup, import your same slice reducers
import simulatorSlice from '../pages/Simulator/simulatorSlice';

// This type interface extends the default options for render from RTL, as well
// as allows to specify other things such as initialState, store.
type ExtendedRenderOptions = {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
} & Omit<RenderOptions, 'queries'>

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        simulator: simulatorSlice,
      },
      preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    })
  };
}
