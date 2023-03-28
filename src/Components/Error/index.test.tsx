
import { describe, test, expect,vi } from 'vitest'
import { fireEvent, render} from '@testing-library/react'
import Error from './'

describe('<Error />', () => {
  test('Error mounts properly', () => {
    const error = {
      message: "Test Error"
    };
    const reload = vi.fn();
    const {getByText,getByRole} = render(<Error error={error} reload={reload}/>)
    expect(getByText(error.message)).toBeInTheDocument()

    const button = getByRole("reload-button");

    fireEvent.click(button);
    expect(reload).toBeCalledTimes(1)

  })
});
