class SimpleTest {
  assert(message = "No context provided", options = {}) {
    if (!("expected" in options)) {
      throw new Error("Missing 'expected' value in options.");
    }
    if (!("target" in options)) {
      throw new Error("Missing 'target' value in options.");
    }

    let result = options["expected"] === options["target"];

    console.log("----");
    if (result) {
      console.log("\x1b[32m[OK] " + message + "\x1b[0m");
    } else {
      console.log("\x1b[31m[ERROR] " + message + "\x1b[0m");
      console.log(`  Expected: ${options["expected"]}`);
      console.log(`  Target: ${options["target"]}`);
    }
    console.log("----\n");
  }
}

module.exports = {
  SimpleTest,
};
