module.exports = function (array) {
  if (!Array.isArray(array)) {
    return false;
  }

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === '--force' || array[i] === 'force') {
      return true;
    }
  };

  return false;
};