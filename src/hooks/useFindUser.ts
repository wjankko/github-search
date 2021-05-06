import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { TUserList } from "../utils/types";
import { token, resultsPerPage } from "../utils/utils";

export default function useFindUser(query: string) {
  const [users, setUsers] = useState<TUserList | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData =() => {
    if (query !== "") {
      setLoading(true);
      setError("");
      axios
        .get("https://api.github.com/search/users", {
          params: { q: query, per_page: resultsPerPage },
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((response) => {
          setUsers(response.data.items);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
        });
    }
  }

  useEffect(() => {
    setUsers([]);
  }, [query]);
  useEffect(() => {
    fetchData()
    
  }, [query]);
  return { loading, error, users, fetchData };
}
