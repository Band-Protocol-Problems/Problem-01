import { bossBabysRevenge } from "../src/bossBabysRevenge";

describe("Boss Baby's Revenge", () => {
  describe("Example test cases", () => {
    it("should return 'Good boy' for input 'SRSSRRR'", () => {
      expect(bossBabysRevenge("SRSSRRR")).toBe("Good boy");
    });
    it("should return 'Bad boy' for input 'RSSRR'", () => {
      expect(bossBabysRevenge("RSSRR")).toBe("Bad boy");
    });
    it("should return 'Bad boy' for input 'SSSRRRRS'", () => {
      expect(bossBabysRevenge("SSSRRRRS")).toBe("Bad boy");
    });
    it("should return 'Bad boy' for input 'SRRSSR'", () => {
      expect(bossBabysRevenge("SRRSSR")).toBe("Bad boy");
    });
    it("should return 'Good boy' for input 'SSRSRR'", () => {
      expect(bossBabysRevenge("SSRSRR")).toBe("Good boy");
    });
  });

  describe("Additional Test Cases", () => {
    it("should return 'Good boy' for input 'SRSRRRRRRRRSR'", () => {
      expect(bossBabysRevenge("SRSRRRRRRRRSR")).toBe("Good boy");
    });
    it("should return 'Good boy' for input 'SSSSRRRR'", () => {
      expect(bossBabysRevenge("SSSSRRRR")).toBe("Good boy");
    });
    it("should return 'Bad boy' for input 'RRRRSSSS'", () => {
      expect(bossBabysRevenge("RRRRSSSS")).toBe("Bad boy");
    });
    it("should return 'Good boy' for input 'SRSR'", () => {
      expect(bossBabysRevenge("SRSR")).toBe("Good boy");
    });
    it("should return 'Bad boy' for input 'R'", () => {
      expect(bossBabysRevenge("R")).toBe("Bad boy");
    });
    it("should return 'Bad boy' for input 'S'", () => {
      expect(bossBabysRevenge("S")).toBe("Bad boy");
    });
    it("should return 'Good boy' for input 'SRSRRR'", () => {
      expect(bossBabysRevenge("SRSRRR")).toBe("Good boy");
    });
    it("should return 'Good boy' for input 'SSRRRR'", () => {
      expect(bossBabysRevenge("SSRRRR")).toBe("Good boy");
    });
    it("should return 'Good boy' for input 'SSSRRRR'", () => {
      expect(bossBabysRevenge("SSSRRRR")).toBe("Good boy");
    });
    it("should return 'Bad boy' for input 'SRSRS'.repeat(200,000)", () => {
      expect(bossBabysRevenge("SRSRS".repeat(200_000))).toBe("Bad boy");
    });
    it("should return 'Good boy' for input 'S' + 'R'.repeat(999,999)", () => {
      expect(bossBabysRevenge("S" + "R".repeat(999_999))).toBe("Good boy");
    });
  });
});
