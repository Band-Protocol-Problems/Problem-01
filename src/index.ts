import { bossBabysRevenge } from "./bossBabysRevenge";
import { createInterface } from "readline";

function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter your input: ", (input) => {
    if (!/^[SsRr]*$/.test(input)) {
      console.error("Invalid input: string must contain only 'S' and 'R'");
    } else {
      const result = bossBabysRevenge(input.toUpperCase());
      console.log("Result:", result);
    }

    rl.close();
  });
}

main();
