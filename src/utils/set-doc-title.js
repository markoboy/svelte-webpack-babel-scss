/**
 * Set the document's title
 * @param {string} title The title to set
 */
export default function setDocTitle(title) {
  if (title && title !== '') {
    document.title = title;
  }
}
