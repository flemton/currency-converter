import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Test suite for the Navbar component', () => {
  let navbar;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    navbar = screen.getByText(/Currency Converter/i);
  });

  it('Should test if the Navbar component is inside the document', () => {
    expect(navbar).toBeInTheDocument();
  });

  it('Should render a snapshot of the Navbar component', () => {
    expect(navbar).toMatchSnapshot();
  });
});
