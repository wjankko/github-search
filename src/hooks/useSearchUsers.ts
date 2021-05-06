import axios from "axios";
import { useEffect, useState } from "react";
import { uniqBy } from 'lodash';
import { TUserList } from '../utils/types'
import { token, useStickyState, resultsPerPage } from '../utils/utils';

export default function useSearchUsers(sinceId: number) {
  const [users, setUsers] = useStickyState([], 'users');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchData =() => {setLoading(true);
    setError('');
    axios
      .get("https://api.github.com/users", {
        params: { since: sinceId, per_page: resultsPerPage },
        headers: {
            Authorization: `token ${token}`
        }
        
      })
      .then((response) => {
        setUsers((prevUsers: TUserList) => {
            return uniqBy([...prevUsers, ...response.data], 'id')
        });
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }
  useEffect(() => {
    fetchData()
  }, [sinceId, setUsers]);
  return { loading, error, users, fetchData };
}
