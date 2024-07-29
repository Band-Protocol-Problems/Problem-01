import { bossBabysRevenge } from "./bossBabysRevenge";
import { createInterface } from "readline";

function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter your input: ", (input) => {
    const result = bossBabysRevenge(input);
    console.log("Result:", result);

    rl.close();
  });
}

main();
