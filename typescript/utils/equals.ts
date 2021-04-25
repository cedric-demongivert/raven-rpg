/**
 * 
 */
export function equals(left: any, right: any): boolean {
  return typeof left === 'object' && left.equals ? left.equals(right) : left === right
}