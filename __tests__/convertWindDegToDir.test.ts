import { convertWindDegToDir } from '../services';

describe('convertWindDegToDir service', () => {

  it('Service functions to convert given deg to compass directions', () => {
    const testN = convertWindDegToDir(0);
    const testW = convertWindDegToDir(270);
    const testS = convertWindDegToDir(180);
    const testE = convertWindDegToDir(90);
    expect(testN).toBe('N');
    expect(testW).toBe('W');
    expect(testS).toBe('S');
    expect(testE).toBe('E');
  })

  it('Additional cardinal directions', () => {
    const testNW = convertWindDegToDir(315);
    const testNE = convertWindDegToDir(45);
    const testSW = convertWindDegToDir(225);
    const testSE = convertWindDegToDir(135);
    expect(testNW).toBe('NW');
    expect(testNE).toBe('NE');
    expect(testSW).toBe('SW');
    expect(testSE).toBe('SE');
  })

  it('Returns an empty string if passed invalid data', () => {
    const test = convertWindDegToDir(10000);
    expect(test).toBe('');
  })

  it('Additional error test', () => {
    const test = convertWindDegToDir(361);
    expect(test).toBe('');
  })

  it('Assigns N', () => {
    const test = convertWindDegToDir(358);
    expect(test).toBe('N');
  })

  it('Additional N test', () =>{
    const test = convertWindDegToDir(4);
    expect(test).toBe('N');
  })

  it('Assigns NNW', () => {
    const test = convertWindDegToDir(332);
    expect(test).toBe('NNW');
  })

  it('Assigns NW', () => {
    const test = convertWindDegToDir(320);
    expect(test).toBe('NW');
  })

  it('Assigns WNW', () => {
    const test = convertWindDegToDir(300);
    expect(test).toBe('WNW');
  })

  it('Assigns W', () => {
    const test = convertWindDegToDir(275);
    expect(test).toBe('W');
  })

  it('Assigns WSW', () => {
    const test = convertWindDegToDir(255);
    expect(test).toBe('WSW');
  })

  it('Assigns SW', () => {
     const test = convertWindDegToDir(223);
     expect(test).toBe('SW');
  })

  it('Assigns SSW', () => {
    const test = convertWindDegToDir(195);
    expect(test).toBe('SSW');
  })

  it('Assigns S', () => {
    const test = convertWindDegToDir(188);
    expect(test).toBe('S');
  })

  it('Assigns SSE', () => {
    const test = convertWindDegToDir(165);
    expect(test).toBe('SSE');
  })

  it('Assigns SE', () => {
    const test = convertWindDegToDir(132);
    expect(test).toBe('SE');
  })

  it('Assigns ESE', () => {
    const test = convertWindDegToDir(107);
    expect(test).toBe('ESE');
  })

  it('Assigns E', () => {
    const test = convertWindDegToDir(99);
    expect(test).toBe('E');
  })

  it('Assigns ENE', () => {
    const test = convertWindDegToDir(75);
    expect(test).toBe('ENE');
  })

  it('Assigns NE', () => {
    const test = convertWindDegToDir(40);
    expect(test).toBe('NE');
  })

  it('Assigns NNE', () => {
    const test = convertWindDegToDir(15);
    expect(test).toBe('NNE');
  })
})
