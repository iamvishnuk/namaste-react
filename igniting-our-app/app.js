import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * * React.createElement basically a object when we render this in to DOM it will become a HTML tag
 *
 */

/**
 * * JSX -> HTML-like or XML-like syntax
 * * JSX gets compiled into React.createElement
 * * JSX -> React.createElement -> Object -> HTML ( Babel is doing this )
 * * JSX prevent cross-site scripting (XSS) attacks
 */

// React Element
const jsxHeading = (
  <h1 id='heading' className='head'>
    Hello from jsxHeading (React Element)
  </h1>
);

const Title = () => (
  <h1 id='heading' className='head'>
    Hello from jsx
  </h1>
);

/**
 * * React Component
 *   ! Class-based component - OLD
 *   ! Functional component - NEW
 * *
 */

// React Functional Component (Component composition)
const HeadingComponent = () => (
  <div className='container'>
    <Title /> {/* putting component inside component */}
    {jsxHeading}
    <h1>Hello from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading); => render a react element
root.render(<HeadingComponent />); // => render a React Component
