import { useEffect, useState, useCallback, useRef } from 'react';

export const token = ''

export const resultsPerPage = 100;

export function useStickyState(defaultValue: any, key: string) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

export function useEndlessScroll(loading: boolean, onReachBottom: Function) {
    const observer = useRef<IntersectionObserver>();
    const lastElementRef = useCallback(
      (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
  
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
              onReachBottom()
          }
        });
        if (node) observer.current.observe(node);
      },
      [loading, onReachBottom]
    );
    return lastElementRef
}