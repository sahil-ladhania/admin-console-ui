import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleTheme } from '@/store/slices/themeSlice';

/**
 * useTheme — reads the persisted theme from Redux and keeps the
 * `.dark` class on <html> in sync. Call this once at the App root
 * so it is always active.
 */
export function useTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return {
    theme,
    toggle: () => dispatch(toggleTheme()),
    isDark: theme === 'dark',
  };
}
