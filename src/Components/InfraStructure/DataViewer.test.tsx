
import { describe, test, expect,vi } from 'vitest'
import { render, waitFor} from '@testing-library/react'
import DataViewer from './DataViewer'

describe('<DataViewer />', () => {

  test('Show Loading Screen', async() => {
    const view = vi.fn();
    const {getByText} = render(<DataViewer url='/data' view={view}/>)
    expect(getByText("Loading...")).toBeInTheDocument();
  })

  test('Data Viewer load now data', async() => {
    
    const useFetch = await import("../../Hooks/useFetch");

    useFetch.default = vi.fn().mockReturnValue({})

    const view = vi.fn();

    const {getByText} = render(<DataViewer url='/data' view={view}/>)

    await waitFor(() => expect(useFetch.default).toHaveBeenCalledTimes(1))

    expect(useFetch.default).toHaveBeenCalledWith(
      "/data"
    )
  
    expect(getByText("Nothing to Show")).toBeInTheDocument()

  })

  test('Render Error', async() => {
    
    const useFetch = await import("../../Hooks/useFetch");

    useFetch.default = vi.fn().mockReturnValue({
      error: {
        message: "Error While Loading"
      }
    })

    const view = vi.fn();

    const {getByText} = render(<DataViewer url='/data' view={view}/>)

    await waitFor(() => expect(useFetch.default).toHaveBeenCalledTimes(1))

    expect(useFetch.default).toHaveBeenCalledWith(
      "/data"
    )
  
    expect(getByText("Error While Loading")).toBeInTheDocument()

  })

  test('Render View', async() => {
    
    const useFetch = await import("../../Hooks/useFetch");

    const data = [
      {
        name: "Afsal"
      }
    ]
    useFetch.default = vi.fn().mockReturnValue({
      data: data
    })

    const view = vi.fn();

    render(<DataViewer url='/data' view={view}/>)

    await waitFor(() => expect(useFetch.default).toHaveBeenCalledTimes(1))

    expect(useFetch.default).toHaveBeenCalledWith(
      "/data"
    )
    expect(view).toBeCalledWith({data})

  })

});
