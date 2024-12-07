```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code snippet uses `react-router-dom` version 6.  A common error is forgetting that the `Routes` component must be a direct child of the `BrowserRouter`.  If you nest `Routes` within another component, routing may not work as expected.