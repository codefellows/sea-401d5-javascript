"use strict";
module.exports = function(str) {
  return new Promise((resolve, reject) => {
    try {
      let jsonObj = JSON.parse(str);
      resolve(jsonObj);

    } catch (e) {
      reject("json parse fail");
    }
  });
}
