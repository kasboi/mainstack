import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

import Sidebar from '../components/Sidebar/Sidebar';

describe('Sidebar component', () => {
  it('renders all icons with tooltips', () => {
    render(<Sidebar />);

    // Check if all icons are rendered
    expect(screen.getByAltText('icons')).toBeInTheDocument();
    
    // Add more specific checks if needed, e.g., check if tooltips are rendered
    expect(screen.getByTestId('my-tooltip-link').getAttribute('data-tooltip-content')).toBe('Link in Bio');
    expect(screen.getByTestId('my-tooltip-store').getAttribute('data-tooltip-content')).toBe('Store');
    expect(screen.getByTestId('my-tooltip-media-kit').getAttribute('data-tooltip-content')).toBe('Media Kit');
    expect(screen.getByTestId('my-tooltip-invoicing').getAttribute('data-tooltip-content')).toBe('Invoicing');
  });

  // Add more test cases as needed
});
