import { SearchForm } from '../components';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchForm component', () => {

  let citySearch = '';
  function setCitySearch(str) {
    citySearch = str;
  }

  let zip = false;
  function setZip(bool) {
    zip = bool;
  }

  it('Component renders', () => {
    render(<SearchForm />);
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toHaveTextContent('Search');
    expect(screen.getByRole('combobox')).toHaveTextContent('City Search');
  })

  it('Component functions to set citySearch variable', () => {
    render(<SearchForm setCitySearch={setCitySearch} zip={zip} setZip={setZip} />);
    const input = screen.getByRole('textbox');
    act(() => {
      fireEvent.change(input, {target: {value: "Nashville, TN"}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(citySearch).toBe('Nashville, TN');
    expect(zip).toBe(false);
  })

  it('Component functions to set zip bool to true', () => {
    render(<SearchForm setCitySearch={setCitySearch} zip={zip} setZip={setZip} />);
    const input = screen.getByRole('textbox');
    act(() => {
      fireEvent.change(input, {target: {value: "99362"}});
    })
    const dropdown = screen.getByRole('combobox');
    act(() => {
      fireEvent.change(dropdown, {target: {value: 'Zip Code Search'}})
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(citySearch).toBe('99362');
    expect(zip).toBe(true);
  })
})
