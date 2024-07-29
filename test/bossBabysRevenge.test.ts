import { bossBabysRevenge } from "../src/bossBabysRevenge";

test("Example test cases", () => {
  expect(bossBabysRevenge("SRSSRRR")).toBe("Good boy");
  expect(bossBabysRevenge("RSSRR")).toBe("Bad boy");
  expect(bossBabysRevenge("SSSRRRRS")).toBe("Bad boy");
  expect(bossBabysRevenge("SRRSSR")).toBe("Bad boy");
  expect(bossBabysRevenge("SSRSRR")).toBe("Good boy");
});

test("Additional test cases", () => {
  expect(bossBabysRevenge("SRSRRRRRRRRSR")).toBe("Good boy");
  expect(bossBabysRevenge("SSSSRRRR")).toBe("Good boy");
  expect(bossBabysRevenge("RRRRSSSS")).toBe("Bad boy");
  expect(bossBabysRevenge("SRSR")).toBe("Good boy");
  expect(bossBabysRevenge("R")).toBe("Bad boy");
  expect(bossBabysRevenge("S")).toBe("Bad boy");
  expect(bossBabysRevenge("")).toBe("Good boy");
  expect(bossBabysRevenge("SRSRRR")).toBe("Good boy");
  expect(bossBabysRevenge("SSRRRR")).toBe("Good boy");
  expect(bossBabysRevenge("SSSRRRR")).toBe("Good boy");
  expect(bossBabysRevenge("SRSRS".repeat(20000))).toBe("Bad boy");
  expect(bossBabysRevenge("S" + "R".repeat(999999))).toBe("Good boy");
});
