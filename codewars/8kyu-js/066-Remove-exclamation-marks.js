/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

console.log("******Solucion 1********");
const removeExclamationMarks = (s) => {
  return s.replace(/!/g, "");
  // return s.replaceAll('!', '');
  // return s.split('!').join('');
};

console.log(removeExclamationMarks("Hello World!"));
