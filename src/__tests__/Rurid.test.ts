import rurid from '../rurid';

describe('Rurid', () => {
  it('generates titles from 2 language constructs', () => {
    expect(rurid(undefined, [' ']).split(' ').length).toBe(2);
  });

  test('behaves as expected when passed a supported language argument', () => {
    expect(() => {
      rurid('en');
    }).toBeTruthy();
  });

  test('throws an error when called with unsupported language argument', () => {
    expect(() => {
      rurid('es');
    }).toThrow(TypeError);
  });

  test('uses default lang arg when called without args', () => {
    expect(typeof rurid()).toBe('string');
  });

  test('rurid uses specified separators', () => {
    expect(rurid('en', ['@'])).toContain('@');
  });
});
