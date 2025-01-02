function formatInput(input: string | number): string {
    if (typeof input === "string") {
      return input.toUpperCase();
    }
    return input.toFixed(2);
  }
  
  console.log(formatInput("hello")); // "HELLO"
  console.log(formatInput(123.456)); // "123.46"
  