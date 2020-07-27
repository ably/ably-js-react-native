// Implementation of Node.js#assert
// Only the functionality that we need of it.
export function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
