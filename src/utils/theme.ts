/**
 * Check if user has a dark mode preference
 */
export const getPreferredColorScheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'light';
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

/**
 * Apply theme to HTML element
 */
export const applyTheme = (theme: 'dark' | 'light'): void => {
  const root = window.document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};