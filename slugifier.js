function slugifySelection({ selectionText }) {
  copyToClipboard(slugify(selectionText))
}

function copyToClipboard(text) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
}

function slugify(text) {
  return text.toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

chrome.contextMenus.create({
  "title": 'Slugifier',
  "contexts":['selection'],
  "onclick": slugifySelection,
})
