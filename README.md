# React Router Dom v6 Nested Routes Issue

This repository demonstrates a common issue encountered when using React Router v6:  routing failure when the `Routes` component is not a direct child of the `BrowserRouter` component.

## Problem
The provided `bug.js` file shows a typical React application structure where the `Routes` component is incorrectly nested within another component. This leads to the routes not functioning correctly.  The application may appear to load, but navigation to different routes will fail silently.

## Solution
The `bugSolution.js` file corrects the issue by ensuring that the `Routes` component is a direct child of `BrowserRouter`, as per the React Router v6 documentation.