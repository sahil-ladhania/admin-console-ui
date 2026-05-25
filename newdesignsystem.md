# TBK Villas — New Design System Implementation Plan

> **Scope**: Design tokens + Dark/Light theme switch only.
> **Hard Rule**: Zero logic changes, zero component restructuring, zero API changes, zero routing changes. Only CSS variables, fonts, and a theme-toggle mechanism.

---

## Current State (What Exists)

### Stack
- **Framework**: React + Vite (NOT Next.js — no monorepo)
- **Styling**: Tailwind CSS v3 (JS config — `tailwind.config.ts`)
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Dark Mode Strategy**: `darkMode: ["class"]` — Tailwind reads `.dark` class on root element
- **Token Strategy**: CSS custom properties (`--background`, `--foreground`, etc.) consumed via `hsl(var(--token))`

### Current Theme Palette (to be replaced)
- **Light**: Warm Goa coastal oranges (`#f97316`-ish primary), sand secondaries, ocean-blue accent
- **Dark**: Generic shadcn dark (deep navy `222.2 84% 4.9%`, no brand alignment)
- **Fonts**: Browser default / system fonts (no Google Font loading configured)
- **Sidebar tokens**: Separate `--sidebar-*` variables (must be kept and updated)

### Three Dashboards in One App
All three dashboards (Admin, Owner, Agent) live in the **same single Vite app** — not separate apps. They share one `index.css` and one `tailwind.config.ts`. The design system doc planned per-app themes for a future monorepo, but since we're keeping the single-app setup, the approach is:
- **One shared token file** (`index.css`) with proper light + dark values
- **Admin** = dark theme by default (primary theme = obsidian/gold)
- **Owner + Agent** = light theme consumers (cream/olive/bark palette)
- The theme toggle will let the user switch between the two palettes globally

---

## New Design Tokens (Source of Truth)

### Dark Theme Palette — Obsidian (Admin primary)

| CSS Variable Role | New Value (Hex) | HSL Equivalent | Notes |
|---|---|---|---|
| `--background` | `#0d0d0d` (obsidian) | `0 0% 5%` | Primary page background |
| `--foreground` | `#f5f5f0` (ivory) | `60 14% 96%` | Primary text color |
| `--card` | `#1a1a1a` (charcoal) | `0 0% 10%` | Card/surface background |
| `--card-foreground` | `#f5f5f0` (ivory) | `60 14% 96%` | Card text |
| `--popover` | `#1a1a1a` (charcoal) | `0 0% 10%` | Popovers/dropdowns |
| `--popover-foreground` | `#f5f5f0` (ivory) | `60 14% 96%` | Popover text |
| `--primary` | `#c9a84c` (gold) | `42 53% 54%` | CTAs, highlights, active nav |
| `--primary-foreground` | `#0d0d0d` (obsidian) | `0 0% 5%` | Text on gold buttons |
| `--primary-glow` | `#d4b96a` | `42 55% 63%` | Glow/hover variant |
| `--secondary` | `#2a2a2a` | `0 0% 16%` | Secondary surfaces |
| `--secondary-foreground` | `#f5f5f0` (ivory) | `60 14% 96%` | Text on secondary |
| `--muted` | `#242424` | `0 0% 14%` | Muted backgrounds |
| `--muted-foreground` | `#a0a0a0` | `0 0% 63%` | Muted/subtle text |
| `--accent` | `#c9a84c` (gold) | `42 53% 54%` | Accent highlights |
| `--accent-foreground` | `#0d0d0d` (obsidian) | `0 0% 5%` | Text on accent |
| `--destructive` | `#c0392b` (error) | `5 64% 46%` | Destructive actions |
| `--destructive-foreground` | `#f5f5f0` | `60 14% 96%` | Text on destructive |
| `--success` | `#4a7c59` (success) | `141 25% 39%` | Success states |
| `--success-foreground` | `#f5f5f0` | `60 14% 96%` | Text on success |
| `--warning` | `#c4843a` (warning) | `30 53% 49%` | Warning states |
| `--warning-foreground` | `#f5f5f0` | `60 14% 96%` | Text on warning |
| `--border` | `#2d2d2d` | `0 0% 18%` | Borders/dividers |
| `--input` | `#2d2d2d` | `0 0% 18%` | Input borders |
| `--ring` | `#c9a84c` (gold) | `42 53% 54%` | Focus rings |
| `--sidebar-background` | `#111111` | `0 0% 7%` | Sidebar bg (slightly darker than obsidian) |
| `--sidebar-foreground` | `#f5f5f0` (ivory) | `60 14% 96%` | Sidebar text |
| `--sidebar-primary` | `#c9a84c` (gold) | `42 53% 54%` | Active sidebar item |
| `--sidebar-primary-foreground` | `#0d0d0d` | `0 0% 5%` | Text on active sidebar |
| `--sidebar-accent` | `#1e1e1e` | `0 0% 12%` | Hover state in sidebar |
| `--sidebar-accent-foreground` | `#f5f5f0` | `60 14% 96%` | Hover text in sidebar |
| `--sidebar-border` | `#2d2d2d` | `0 0% 18%` | Sidebar border |
| `--sidebar-ring` | `#c9a84c` | `42 53% 54%` | Sidebar focus ring |

**Dark theme gradients:**
```css
--gradient-primary: linear-gradient(135deg, hsl(42 53% 54%), hsl(42 55% 63%));
--gradient-secondary: linear-gradient(135deg, hsl(0 0% 10%), hsl(0 0% 14%));
--gradient-accent: linear-gradient(135deg, hsl(42 53% 54% / 0.2), hsl(42 53% 54% / 0.05));
--gradient-sunset: linear-gradient(135deg, hsl(42 53% 54%), hsl(30 53% 49%), hsl(5 64% 46%));
```

**Dark theme shadows (gold glow tint):**
```css
--shadow-soft:   0 2px 8px -2px hsl(42 53% 54% / 0.15);
--shadow-medium: 0 8px 25px -8px hsl(42 53% 54% / 0.20);
--shadow-large:  0 20px 40px -12px hsl(42 53% 54% / 0.25);
```

**Chart colors (dark):**
```css
--chart-1: 42 53% 54%;   /* gold */
--chart-2: 141 25% 39%;  /* success green */
--chart-3: 30 53% 49%;   /* warning amber */
--chart-4: 5 64% 46%;    /* error red */
--chart-5: 0 0% 63%;     /* muted gray */
```

---

### Light Theme Palette — Cream (Owner + Agent)

| CSS Variable Role | New Value (Hex) | HSL Equivalent | Notes |
|---|---|---|---|
| `--background` | `#faf7f2` (cream) | `37 44% 97%` | Primary page background |
| `--foreground` | `#3d3526` (bark) | `38 26% 20%` | Primary text color |
| `--card` | `#f0ead8` (parchment) | `42 44% 89%` | Card/surface background |
| `--card-foreground` | `#3d3526` (bark) | `38 26% 20%` | Card text |
| `--popover` | `#f0ead8` (parchment) | `42 44% 89%` | Popovers/dropdowns |
| `--popover-foreground` | `#3d3526` (bark) | `38 26% 20%` | Popover text |
| `--primary` | `#7a7a50` (olive) | `60 22% 40%` | CTAs, highlights, active nav |
| `--primary-foreground` | `#faf7f2` (cream) | `37 44% 97%` | Text on olive buttons |
| `--primary-glow` | `#8f8f60` | `60 22% 47%` | Glow/hover variant |
| `--secondary` | `#e8e0cc` | `42 36% 85%` | Secondary surfaces |
| `--secondary-foreground` | `#3d3526` (bark) | `38 26% 20%` | Text on secondary |
| `--muted` | `#f0ead8` (parchment) | `42 44% 89%` | Muted backgrounds |
| `--muted-foreground` | `#7a6a50` | `38 22% 40%` | Muted/subtle text |
| `--accent` | `#7a7a50` (olive) | `60 22% 40%` | Accent highlights |
| `--accent-foreground` | `#faf7f2` (cream) | `37 44% 97%` | Text on accent |
| `--destructive` | `#c0392b` (error) | `5 64% 46%` | Destructive actions |
| `--destructive-foreground` | `#faf7f2` | `37 44% 97%` | Text on destructive |
| `--success` | `#4a7c59` (success) | `141 25% 39%` | Success states |
| `--success-foreground` | `#faf7f2` | `37 44% 97%` | Text on success |
| `--warning` | `#c4843a` (warning) | `30 53% 49%` | Warning states |
| `--warning-foreground` | `#faf7f2` | `37 44% 97%` | Text on warning |
| `--border` | `#d8d0bc` | `42 26% 79%` | Borders/dividers |
| `--input` | `#d8d0bc` | `42 26% 79%` | Input borders |
| `--ring` | `#7a7a50` (olive) | `60 22% 40%` | Focus rings |
| `--sidebar-background` | `#ede7d5` | `42 40% 88%` | Sidebar bg |
| `--sidebar-foreground` | `#3d3526` (bark) | `38 26% 20%` | Sidebar text |
| `--sidebar-primary` | `#7a7a50` (olive) | `60 22% 40%` | Active sidebar item |
| `--sidebar-primary-foreground` | `#faf7f2` (cream) | `37 44% 97%` | Text on active sidebar |
| `--sidebar-accent` | `#e8e0cc` | `42 36% 85%` | Hover state in sidebar |
| `--sidebar-accent-foreground` | `#3d3526` (bark) | `38 26% 20%` | Hover text in sidebar |
| `--sidebar-border` | `#d8d0bc` | `42 26% 79%` | Sidebar border |
| `--sidebar-ring` | `#7a7a50` | `60 22% 40%` | Sidebar focus ring |

**Light theme gradients:**
```css
--gradient-primary: linear-gradient(135deg, hsl(60 22% 40%), hsl(60 22% 47%));
--gradient-secondary: linear-gradient(135deg, hsl(42 44% 89%), hsl(42 36% 85%));
--gradient-accent: linear-gradient(135deg, hsl(60 22% 40% / 0.15), hsl(60 22% 40% / 0.05));
--gradient-sunset: linear-gradient(135deg, hsl(60 22% 40%), hsl(30 53% 49%), hsl(42 44% 89%));
```

**Light theme shadows (bark/olive warm tint):**
```css
--shadow-soft:   0 2px 8px -2px hsl(38 26% 20% / 0.08);
--shadow-medium: 0 8px 25px -8px hsl(38 26% 20% / 0.12);
--shadow-large:  0 20px 40px -12px hsl(38 26% 20% / 0.16);
```

**Chart colors (light):**
```css
--chart-1: 60 22% 40%;   /* olive */
--chart-2: 141 25% 39%;  /* success green */
--chart-3: 30 53% 49%;   /* warning amber */
--chart-4: 5 64% 46%;    /* error red */
--chart-5: 38 22% 40%;   /* muted bark */
```

---

### Shared Tokens (both themes)

```css
--radius: 0.625rem;   /* slightly tighter than current 0.75rem — editorial luxury feel */
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:   all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

---

### Typography

Three Google Fonts to load — added via `<link>` in `index.html` (no next/font, this is Vite):

| Role | Font | CSS Variable |
|---|---|---|
| `display` | Cormorant Garant (300, 400, 500, 600) | `--font-display` |
| `body` | DM Sans (400, 500, 600) | `--font-body` |
| `mono` | JetBrains Mono (400, 500) | `--font-mono` |

**In `tailwind.config.ts`** — extend `fontFamily`:
```ts
fontFamily: {
  display: ['Cormorant Garant', 'Georgia', 'serif'],
  body:    ['DM Sans', 'system-ui', 'sans-serif'],
  mono:    ['JetBrains Mono', 'Menlo', 'monospace'],
}
```

**In `index.css` `body`**:
```css
body {
  font-family: var(--font-body, 'DM Sans'), system-ui, sans-serif;
}
```

**Apply globally to `<html>`/`<body>`** using the `font-body` Tailwind utility.

---

### Additional Tailwind Color Utilities

Extend the Tailwind config to expose the raw palette names as utilities (so they can be used explicitly when needed):

```ts
colors: {
  // existing hsl(var(...)) map stays intact — add these alongside
  obsidian: '#0d0d0d',
  charcoal: '#1a1a1a',
  gold:     '#c9a84c',
  ivory:    '#f5f5f0',
  cream:    '#faf7f2',
  parchment:'#f0ead8',
  olive:    '#7a7a50',
  bark:     '#3d3526',
}
```

---

## Theme Toggle — Implementation Strategy

### Mechanism
Tailwind's `darkMode: ["class"]` is already enabled. The `.dark` class on `<html>` switches the theme. We need:
1. A **Redux slice** (`themeSlice.ts`) storing `"light" | "dark"` — persisted via `redux-persist` (already set up)
2. A **hook** (`useTheme.ts`) that reads/writes the slice and syncs the `.dark` class to `<html>`
3. A **ThemeToggle component** — a simple icon button (Sun/Moon) placed inside the `Navigation.tsx` sidebar

### Files to create (new — no existing file touched for logic):

#### `src/store/slices/themeSlice.ts` (NEW)
```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = { theme: 'dark' }; // Admin default = dark

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

#### `src/hooks/useTheme.ts` (NEW)
```ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleTheme } from '@/store/slices/themeSlice';

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
```

#### `src/components/common/ThemeToggle.tsx` (NEW)
A small Sun/Moon toggle button using existing `Button` + lucide icons. Calls `useTheme().toggle()`. No new dependencies needed.

### Where the toggle lives in the UI
- **Desktop sidebar** — placed just above the user profile section in `Navigation.tsx`
- **Mobile sheet sidebar** — same position within the Sheet content

> **Important**: We are NOT restructuring `Navigation.tsx` logic. We are adding ~10 lines of JSX (the toggle button) and the `useTheme` hook call at the top of the component. That is the only touch to an existing file.

### Redux Persist Integration
The `themeSlice` reducer needs to be added to the persisted reducer in `src/store/persist.ts`. This ensures the theme preference survives page refresh.

---

## Files to Change — Complete Checklist

| File | Change Type | What Changes |
|---|---|---|
| `src/index.css` | **MODIFY** | Replace all `:root` and `.dark` CSS variable values with new palette. Add font family CSS vars. |
| `tailwind.config.ts` | **MODIFY** | Add `fontFamily` extension. Add raw palette color names. Keep all existing structure intact. |
| `index.html` | **MODIFY** | Add Google Fonts `<link>` preconnect + stylesheet for Cormorant Garant, DM Sans, JetBrains Mono. |
| `src/store/slices/themeSlice.ts` | **NEW** | Theme Redux slice (light/dark toggle, persisted). |
| `src/store/persist.ts` | **MODIFY** | Add `themeReducer` to the combined persisted reducer. |
| `src/hooks/useTheme.ts` | **NEW** | Hook: reads theme from Redux, syncs `.dark` class to `<html>`. |
| `src/components/common/ThemeToggle.tsx` | **NEW** | Sun/Moon toggle button component. |
| `src/components/common/Navigation.tsx` | **MODIFY** | Call `useTheme()` hook at top. Add `<ThemeToggle />` to sidebar (desktop + mobile). ~10 lines added total. |
| `src/App.tsx` | **MODIFY** | Call `useTheme()` at the App root level so the `.dark` class syncs on initial load from persisted state. |

**Total**: 4 new files, 5 modified files.

---

## What Is NOT Changing

- ❌ No page components restructured
- ❌ No API calls touched
- ❌ No routing changes
- ❌ No business logic changes
- ❌ No shadcn/ui component internals changed (they pick up new tokens automatically via CSS vars)
- ❌ No new npm packages (uses existing lucide-react, redux-toolkit, redux-persist)
- ❌ No Tailwind version upgrade

---

## Execution Order

1. `index.html` — add Google Fonts links first (so fonts load immediately)
2. `src/index.css` — replace all CSS custom property values (light `:root` + dark `.dark`)
3. `tailwind.config.ts` — add `fontFamily` + raw palette colors
4. `src/store/slices/themeSlice.ts` — create slice
5. `src/store/persist.ts` — wire in theme reducer
6. `src/hooks/useTheme.ts` — create hook
7. `src/components/common/ThemeToggle.tsx` — create toggle button
8. `src/components/common/Navigation.tsx` — add toggle to sidebar
9. `src/App.tsx` — call `useTheme()` at root for initial sync

---

## Verification

After implementation:
- [ ] Light mode shows cream (#faf7f2) background with olive (#7a7a50) accent
- [ ] Dark mode shows obsidian (#0d0d0d) background with gold (#c9a84c) accent  
- [ ] Theme toggle button visible in sidebar (desktop + mobile)
- [ ] Theme preference persists across page refresh
- [ ] All existing shadcn/ui components (Button, Card, Input, etc.) pick up new colors automatically
- [ ] Cormorant Garant, DM Sans, JetBrains Mono load correctly
- [ ] `font-display`, `font-body`, `font-mono` Tailwind utilities work
- [ ] Print styles unaffected

---

## Open Questions for You

1. **Default theme**: Should the app open in **dark mode** by default (obsidian/gold) for all users, or **light mode** (cream/olive)? Currently I've defaulted to dark since the design doc lists Admin = dark.

2. **Theme toggle visibility**: Should non-admin users (Owner, Agent) also see the toggle, or should their dashboards be locked to light mode only?

3. **`border-radius`**: I've set `--radius: 0.625rem` (slightly tighter than the current `0.75rem`). Do you want to keep current 0.75rem, go tighter (0.5rem for a more editorial feel), or go rounder?

4. **Font loading strategy**: Loading all 3 fonts from Google Fonts (via CDN link in `index.html`). If you want to self-host for performance, we can do that in a follow-up. For now CDN is fastest to implement.
