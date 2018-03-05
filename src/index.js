module.exports = function getZerosCount(number) {
  var zerosCountRes = 0;
  while (number > 0) {
    number = (number / 5);
    zerosCountRes = zerosCountRes + Math.floor(number);
  }
  return zerosCountRes;
}
