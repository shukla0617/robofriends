# Release Notes

## Version v26.2.0

### New Features
- **React Hooks Implementation**: Migrated from class components to functional components using React hooks for better performance and cleaner code.
  - `useState` for managing robots list and search field state.
  - `useEffect` for fetching user data from the API on component mount.
- **Live Search**: Real-time filtering of robots based on search input.
- **Reset Button**: Added a reset button to clear the search field.
- **Error Boundary**: Implemented error boundary component for better error handling.
- **Scroll Component**: Added scrollable container for the robot cards.
- **Git Hooks Support**: Added support for Git hooks in App.js.

### Components
- `App`: Main container using hooks.
- `CardList`: Displays list of robot cards.
- `Card`: Individual robot card component.
- `SearchBox`: Search input component.
- `Scroll`: Scrollable wrapper.
- `ErrorBoundry`: Error boundary for catching JavaScript errors.

### Dependencies
- React 17+
- Tachyons for styling

### API
- Fetches user data from https://jsonplaceholder.typicode.com/users