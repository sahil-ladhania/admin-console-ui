import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

/**
 * ThemeToggle — Sun/Moon icon button that toggles between the
 * obsidian/gold dark theme and the cream/olive light theme.
 * Drop this anywhere in the navigation layout.
 */
export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          id="theme-toggle-btn"
          variant="ghost"
          size="icon"
          onClick={toggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="h-9 w-9 rounded-lg transition-colors duration-200 hover:bg-secondary/80"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-primary" />
          ) : (
            <Moon className="h-4 w-4 text-primary" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={8}>
        {isDark ? 'Light mode' : 'Dark mode'}
      </TooltipContent>
    </Tooltip>
  );
}
