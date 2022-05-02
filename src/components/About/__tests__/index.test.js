import React from "react";
import { render, cleanup } from '@testing-library/react'; // Retrieve some functions from the React Testing Library.
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
  })