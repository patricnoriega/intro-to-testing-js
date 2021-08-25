// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

describe("sayHello", function () {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when executed", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when executed", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it("should return the string 'Hello, Pat!' when executed", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it("should return the string 'Hello, World!' when executed", function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when true", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when false", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });


});

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return true when function input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when function input is "five" ', function () {
        expect(isFive("five")).toBe(true);
    });
    it('should return true when function input is "5"', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when function input is not 5', function () {
        expect(isFive()).toBe(false);
    });
});

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return true if input is 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true if input is -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false if input is 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with "banana" ', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with 8', function () {
        expect(isEven(8)).toBe(true)
    });
    it('should return false when called with infinity', function () {
        expect(isEven("infinity")).toBe(false);
    });
    it('should return false when called with a boolean input', function () {
        expect(isEven("true", "false")).toBe(false)
    });
    it('should  return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });


});

describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when "a" is passed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is passed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" is passed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when 4 is passed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called with a boolean input', function () {
        expect(isEven("true")).toBe(false)
    });
    it('should return false when called with a boolean input', function () {
        expect(isEven( "false")).toBe(false)
    });
    it('should return false when "banana" is passed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should  return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });

});

describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add ).toBe("function");
    });

});