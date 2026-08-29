'use client';

import { useDispatch, useSelector } from '@/store';
import { setTheme as setThemeAction } from '@/store/slices/theme';
import { Theme } from '@/types/Theme';
import { useCallback, useEffect } from 'react';

export const useThemeContext = () => {
  const theme = useSelector((state) => state.theme.theme) as Theme;
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.add('disable-transitions');
    document.documentElement.classList.toggle('bg-body', theme === 'light');
    document.documentElement.classList.toggle('bg-body-emphasis', theme !== 'light');

    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('disable-transitions');
    }, 0);

    return () => {
      clearTimeout(timeout);
      document.documentElement.classList.remove('disable-transitions');
    };
  }, [theme]);

  // `dispatch` is stable, so `setTheme` keeps a stable identity across renders —
  // consumers can safely use it in hook dependency arrays.
  const setTheme = useCallback(
    (next: Theme) => {
      dispatch(setThemeAction(next));
    },
    [dispatch]
  );

  return { theme, setTheme };
};
