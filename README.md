# Problem 1: Boss Baby's Revenge

## Table of Contents

- [Problem Description](#problem-description)
  - [Input](#input)
  - [Output](#output)
  - [Note](#note)
  - [Examples](#examples)
- [Solution](#solution)
  - [Ideation](#ideation)
  - [Chosen Approach](#chosen-approach)
    - [How It Works](#how-it-works)
    - [Complexity](#complexity)
    - [Why Not Stack?](#why-not-stack)
- [Running the Code](#running-the-code)
- [Testing](#testing)

## Problem Description

Boss Baby, known for his cool and clever ways, deals with teasing from the neighborhood kids who shoot
water guns at his house. In response, Boss Baby seeks revenge by shooting at least one shot back, but only
if the kids have already shot at him first. As Boss Baby's assistant, your task is to check if Boss Baby has sought revenge for every shot aimed at him at least once and hasn't initiated any shooting himself.

### Input:

A string (`str`, `1 <= len(str) <= 1,000,000`) containing characters `S` and `R`, where `S` represents a shot and `R`
represents revenge. The string represents the sequence of events for one day.

### Output:

Return `Good boy` if all shots have been revenged at least once and Boss Baby doesn’t initiate any shots at
the neighborhood kids first. Return `Bad boy` if these conditions are not satisfied.

### Note:

Boss Baby doesn’t need to shoot back before the next shots of the kids. He can shoot back whenever
he wants as long as he doesn’t shoot first.

### Examples

**Input:**

```
SRSSRRR
```

**Output:**

```
Good boy
```

**Input:**

```
RSSRR
```

**Output:**

```
Bad boy
```

**Input:**

```
SSSRRRRS
```

**Output:**

```
Bad boy
```

**Input:**

```
SRRSSR
```

**Output:**

```
Bad boy
```

**Input:**

```
SSRSRR
```

**Output:**

```
Good boy
```

#### Explanation:

In the first example, the first shot `S` has been avenged by the second action. The next two shots `SS` have been avenged by the following retaliation shots `RRR`.

In the second example, the first action is revenge `R`, which makes Boss Baby a bad boy as he shouldn’t shoot first.

In the third example, the first three shots `SSS` are avenged by at least 3 shots `RRRR`. However, the last shot has no revenge, hence making Boss Baby a bad boy.

## Solution

### Ideation

Initially, this problem resembles the “Matching Parentheses” problem with a twist, which is typically solved using a stack. As each shot (`S`) could be pushed onto the stack, and each revenge (`R`) could pop from it. However, since our problem involves straightforward tracking of shots and their responses without nesting, a simpler approach can be used.

### Chosen Approach

The iterative approach with a single integer counter to track the number of unresolved shots.

#### How It Works

1. **Traverse Through the String**

   - Iterate over each shot (character in the string).

2. **Processing the String**:

   - **For every `S`**: Increment the `unresolvedShots` counter, indicating a new shot has been made.
   - **For every `R`**:
     - If `R` is the first character of the string, return `"Bad boy"`, as Boss Baby should not start with a revenge shot.
     - If `unresolvedShots` is `0` and it's not a revenge shot as the first shot (`i !== 0`), continue to the next shot without making any changes to `unresolvedShots` counter as there’s no shot to avenge.
     - Otherwise, decrement the `unresolvedShots` counter, indicating a shot has been avenged.

3. **Final Check**:

   - After processing the string, if `unresolvedShots` is still greater than `0`, it means there are unresolved shots left. Return `Bad boy`.
   - If `unresolvedShots` is `0`, return `Good boy`, indicating all shots have been properly avenged.

### Complexity

- Time Complexity: `O(n)` (a For Loop)
- Space Complexity: `O(1)` (the `unresolvedShots` counter)

### Why Not Stack?

As mentioned earlier,

- **Memory Complexity**: The stack can grow to the size of the input in the worst case, resulting in (`O(n)`) memory complexity.
- **Usage**: The stack is useful for problems where you need to track nested or hierarchical structures, such as matching parentheses or managing complex sequences of operations.

**Iterative Approach with Counter**:

- **Simplicity**: Iterative approach with counter uses a single integer to track unresolved shots. It’s straightforward and easier to understand.
- **Performance and Memory Efficiency**: Both provide the same (`O(n)`) time complexity, but iterative approach with counter only requires (`O(1)`) space, while Stack approach requires at least an array (`O(n)`).

## Running the Code

To run the code:

1. Ensure you have packages installed.
   ```bash
   npm install
   ```
2. Compile and run the _TypeScript_ code using `ts-node`:
   ```bash
   npm start
   ```

## Testing

1. Run the `test` script.
   ```bash
   npm test
   ```
