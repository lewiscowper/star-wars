module.exports = function (array) {
  if (!Array.isArray(array)) {
    return false;
  } else if (array.indexOf('force') > -1 || array.indexOf('--force') > -1) {
    return true;
  }
};
