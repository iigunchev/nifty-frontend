// const debounceFunction = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

function debounceFunction(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default debounceFunction;
