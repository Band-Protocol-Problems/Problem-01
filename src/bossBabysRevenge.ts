export function bossBabysRevenge(str: string): string {
  if (!/^[SR]*$/.test(str)) {
    throw new Error("Invalid input: string must contain only 'S' and 'R'");
  }
  if (str.length < 1 || str.length > 1_000_000) {
    throw new Error(
      "Invalid input: string length must be between 1 and 1,000,000 characters"
    );
  }

  let unresolvedShots = 0;

  // Iterate through the string.
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "S") {
      unresolvedShots++; // Increment the unresolvedShots counter, indicating a new shot has been made.
    } else if (str[i] === "R") {
      if (unresolvedShots === 0) {
        if (i === 0) return "Bad boy"; // Initial check: Boss Baby should not start with a revenge shot.
        continue; // If unresolvedShots is 0 and i !== 0, continue to the next shot without making any changes to unresolvedShots counter as there’s no shot to avenge.
      }
      unresolvedShots--; // Otherwise, decrement the unresolvedShots counter, indicating a shot has been avenged.
    }
  }

  return unresolvedShots > 0 ? "Bad boy" : "Good boy"; // if unresolvedShots is still greater than 0, it means there are unresolved shots left and return "Bad boy". If unresolvedShots is less than or equal to 0, return "Good boy", indicating all shots have been properly avenged.
}
