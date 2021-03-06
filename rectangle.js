//exports.perimeter = (x, y) => 2 * (x + y);
//exports.area = (x, y) => x * y;

module.exports = (x, y, callback) => {
  //use of first class function -callback
  if (x <= 0 || y <= 0)
    setTimeout(
      //takes two parameters, callback and the time
      () =>
        callback(
          new Error(
            "Rectangle dimensions should be greater than zero: l = " +
              x +
              ", and b = " +
              y
          ),
          null
        ),
      2000
    );
  else
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y, // return value is sent back to the index module
        }),
      2000
    );
};
