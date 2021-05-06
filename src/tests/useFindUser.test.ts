import { renderHook, act } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'
import useFindUser from '../hooks/useFindUser'

test('should find one user', async () => {
    const { result } = renderHook(() => useFindUser('wjankko'))
    act(() => {
        result.current.fetchData()
      })
      await waitFor(() => { expect(result.current.users.length).toBe(1) })
      
  })