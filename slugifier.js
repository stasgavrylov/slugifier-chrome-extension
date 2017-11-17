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
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, '-and-')
    .replace(/[_\W]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

chrome.contextMenus.create({
  title: 'Slugifier',
  contexts: ['selection'],
  onclick: slugifySelection,
})
