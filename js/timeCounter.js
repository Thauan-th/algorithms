class TimeCounter {
  static wrapper(fn = () => {}, ...args) {
    if (typeof fn !== "function") {
      throw new Error("The argument must be a function");
    }

    console.time(fn.name || "Execution Time");
    const result = fn(...args);
    console.timeEnd(fn.name || "Execution Time");

    return result;
  }
}

module.exports = {
  TimeCounter,
};
