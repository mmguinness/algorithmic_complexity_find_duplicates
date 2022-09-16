const findDuplicates = require("./findDuplicates");

describe("findDuplicates", () => {
  it("Given an empty array, it returns an empty array", () => {
    expect(findDuplicates([])).toEqual([]);
  });

  it("Given an array with one word, it returns an empty array", () => {
    expect(findDuplicates(["one"])).toEqual([]);
  });

  it("Given an array with two different words, it returns an empty array", () => {
    expect(findDuplicates(["one", "two"])).toEqual([]);
  });

  it("Given an array with three different words, it returns an empty array", () => {
    expect(findDuplicates(["one", "two", "three"])).toEqual([]);
  });

  it("Given an array with two of the same word, it returns an array with the words that appear more than once", () => {
    expect(findDuplicates(["one", "one"])).toEqual(["one", "one"]);
  });

  it("Given an array with three words, two of which are the same, it returns an array with the words that appear more than once", () => {
    expect(findDuplicates(["one", "one", "two"])).toEqual(["one", "one"]);
  });

  it("Given an array with three words, all of which are the same, it returns an array with the words that appear more than once", () => {
    expect(findDuplicates(["one", "one", "one"])).toEqual([
      "one",
      "one",
      "one",
    ]);
  });

  it("Given an array with four words, three of which are the same, it returns an array with the words that appear more than once", () => {
    expect(findDuplicates(["one", "one", "one", "two"])).toEqual([
      "one",
      "one",
      "one",
    ]);
  });

  it("Given an array with five words, including two sets of pairs, it returns an array with the words that appear more than once", () => {
    expect(findDuplicates(["one", "one", "two", "two", "three"])).toEqual([
      "one",
      "one",
      "two",
      "two",
    ]);
  });

  it("Given an array with ten words, it returns an array with the words that appear more than once", () => {
    expect(findDuplicates(["one", "one", "two", "two", "three", "word", "is", "not", "a", "duplicate"])).toEqual([
      "one",
      "one",
      "two",
      "two",
    ]);
  });
});
