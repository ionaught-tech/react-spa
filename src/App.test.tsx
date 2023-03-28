
import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(
        <MemoryRouter initialEntries={[""]}>
            <App />
        </MemoryRouter>)
    expect(wrapper).toBeTruthy();
  })
});
