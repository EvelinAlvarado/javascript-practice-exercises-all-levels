import { likes } from "../003-who-like-it";

describe("likes function", () => {
  it('should return "no one likes this" when array is empty', () => {
    expect(likes([])).toBe("no one likes this");
  });

  it('should return "<name> likes this" when there is only one person', () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });

  it('should return "<name1> and <name2> like this" when there are two people', () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });

  it('should return "<name1>, <name2> and <name3> like this" when there are three people', () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  it('should return "<name1>, <name2> and X others like this" when there are more than three people', () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
    expect(likes(["Alex", "Jacob", "Mark", "Max", "Link"])).toBe(
      "Alex, Jacob and 3 others like this"
    );
  });
});
