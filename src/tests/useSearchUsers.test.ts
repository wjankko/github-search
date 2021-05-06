import { renderHook, act } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react'
import useSearchUsers from '../hooks/useSearchUsers'

test('should find one hundred users - whole page', async () => {
    const { result } = renderHook(() => useSearchUsers(1))
    act(() => {
        result.current.fetchData()
      })
      await waitFor(() => { expect(result.current.users.length).toBe(100) })
      
  })