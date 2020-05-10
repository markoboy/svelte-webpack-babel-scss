/**
 * Check if an object has a property
 * @param {object} obj The object to check
 * @param {string} key The property to check
 */
export default function ownProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
