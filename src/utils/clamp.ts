/**
 * Ворклет, который зажимает проценты, завершения между 0 и 1
 */
export const clamp = (x: number, min: number, max: number) => {
  'worklet';
  if (x < min) {
    return min;
  }
  if (x > max) {
    return max;
  }
  return x;
};
