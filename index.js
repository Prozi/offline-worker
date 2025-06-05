module.exports = function register(path = './worker.js') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(path)
  }
}
