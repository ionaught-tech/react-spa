
import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import EmptyPlaceholder from './'

describe('<EmptyPlaceholder />', () => {
  test('Empty Placeholder mounts properly', () => {
    const emptyMessage = "Nothing to Show";
    const {getByText} = render(<EmptyPlaceholder/>)
    expect(getByText(emptyMessage)).toBeInTheDocument()
  })
});
