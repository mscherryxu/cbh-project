const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a string", () => {
    const trivialKey = deterministicPartitionKey();
    expect(typeof trivialKey).toBe("string");
  });

  it("Returns a truthy value", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBeTruthy();
  });

  it("Is a function", () => {
    const mockFunc = jest.fn();
    expect(typeof mockFunc).toBe("function");
  });

  it("Returned answer is greater than or equal to length of 1", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey.length).toBeGreaterThanOrEqual(1);
  });
});
