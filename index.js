module.exports = function (path = '/worker.js') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(path);
  }
};
