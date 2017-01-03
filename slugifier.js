'use strict'

function slugifySelection({ selectionText }) {
  copyToClipboard(slugify(selectionText))
}

function copyToClipboard(text) {
  const input = document.createElement('input')
  input.value = text
  document.body.append(input)
  input.select()
  document.execCommand('Copy')
  input.remove()
}

function slugify(text) {
  return text.trim().toLowerCase()
    .replace(/&/g, '-and-')
    .replace(/[_\s]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

chrome.contextMenus.create({
  title: 'Slugifier',
  contexts: ['selection'],
  onclick: slugifySelection,
})
