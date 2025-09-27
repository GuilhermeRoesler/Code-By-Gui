# AI Development Rules for this Project

This document outlines the rules and conventions for the AI assistant working on this codebase. Adhering to these rules ensures consistency, maintainability, and leverages the chosen tech stack effectively.

## Tech Stack Overview

This is a modern web application built with the following technologies:

-   **Framework**: React with Vite for a fast development experience.
-   **Language**: TypeScript for type safety and improved developer experience.
-   **UI Components**: A comprehensive set of pre-built, accessible components from **shadcn/ui**.
-   **Styling**: **Tailwind CSS** for a utility-first styling approach.
-   **Routing**: **React Router** (`react-router-dom`) for all client-side navigation.
-   **Data Fetching**: **TanStack React Query** for managing server state, caching, and data synchronization.
-   **Forms**: **React Hook Form** for performance-optimized form state management, paired with **Zod** for schema validation.
-   **Icons**: **Lucide React** for a consistent and clean set of icons.
-   **Notifications**: **Sonner** and the built-in shadcn/ui `Toaster` for user feedback.

## Library Usage Rules

To maintain consistency, please follow these specific rules when adding or modifying features:

1.  **UI Components**:
    -   **ALWAYS** use components from the `src/components/ui` directory (shadcn/ui) for all standard UI elements like buttons, inputs, dialogs, cards, etc.
    -   Do not create custom components for functionality that already exists in shadcn/ui.
    -   When creating new, custom components, place them in `src/components` and compose them using shadcn/ui primitives whenever possible.

2.  **Styling**:
    -   **ONLY** use Tailwind CSS utility classes for styling.
    -   Do not write custom CSS in `.css` files unless it's for a global style that cannot be achieved with Tailwind.
    -   Use the `cn` utility function from `src/lib/utils.ts` to conditionally apply or merge Tailwind classes.

3.  **Icons**:
    -   Use icons **exclusively** from the `lucide-react` package. Do not add other icon libraries or use inline SVGs.

4.  **Routing**:
    -   All page routes must be defined in `src/App.tsx` using `<Route>` components from `react-router-dom`.
    -   New pages should be created as components within the `src/pages` directory.

5.  **State Management & Data Fetching**:
    -   For fetching, caching, or mutating data from an API, **ALWAYS** use TanStack React Query (`useQuery`, `useMutation`).
    -   For simple, local component state, use React's built-in `useState` and `useReducer` hooks. Avoid complex global state management libraries unless absolutely necessary.

6.  **Forms**:
    -   All forms must be built using **React Hook Form**.
    -   Define form validation schemas using **Zod**.
    -   Integrate React Hook Form with the shadcn/ui `Form` component (`src/components/ui/form.tsx`) for proper structure and accessibility.

7.  **Notifications (Toasts)**:
    -   For simple, non-critical feedback (e.g., "Settings saved!"), use the `toast()` function from `sonner`.
    -   For notifications that are more central to the user flow or require actions, use the `useToast()` hook from `src/hooks/use-toast.ts` which integrates with the main shadcn/ui `Toaster`.

8.  **File Structure**:
    -   **Pages**: `src/pages`
    -   **Reusable Components**: `src/components`
    -   **Custom Hooks**: `src/hooks`
    -   **Utility Functions**: `src/lib`
    -   **Static Assets**: `src/assets`