# Exercise: Giphy App (now with Hooks!)

## Instructions

- Refactor the class-based Giphy App to use functional components hooks.

- Create `LoginPage.js` component.

- Create custom `useAuth()` hook and `AuthProvider` context.  

- Create `RequireAuth.js` wrapper component that calls `useAuth()` and navigates users to `LoginPage.js` if user is not currently stored.

- Wrap `SearchPage.js` and `SavedPage.js` with `RequireAuth.js`. 

- Conditionally render login/logout button in `Navbar.js` based on user value from `useAuth` hook.