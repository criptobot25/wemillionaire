# Lottery Number Generators

This project includes several algorithms for generating lottery number suggestions, accessible via the POST endpoint `/api/lottery/generate` (within the `nosmilhionario` project context) or the UI at `/generators`.

The core logic for these generators resides in `nosmilhionario/src/app/api/lottery/generate/route.ts`.

## Algorithms

### 1. Frequency-Based Generator (`frequency`)

- **Concept:** Analyzes historical draw data and pre-calculated `NumberStats` (frequency) to identify 'hot' numbers. Selects numbers using a weighted probability based on frequency and configurable randomness.
- **Implementation:** `generateByFrequency` function.
- **Parameters:**
    - `weightHot` (Default: 0.7): Controls the influence of historical frequency. Higher values favor more frequent numbers.
    - `weightRandom` (Default: 0.3): Controls the influence of randomness. Higher values introduce more unpredictability.

### 2. Monte Carlo Simulation (`monteCarlo`)

- **Concept:** Randomly samples numbers from past draws thousands of times to simulate potential outcomes. Identifies the combination that appeared most frequently during the simulations.
- **Implementation:** `generateByMonteCarlo` function.
- **Parameters:**
    - `simulations` (Default: 10000): Number of simulation runs to perform. More simulations can improve accuracy but increase computation time.

### 3. Markov Chain Generator (`markovChain`)

- **Concept:** Models the sequence of drawn numbers as a Markov chain. Predicts the next likely numbers based on the probability of transitions between number sequences (states) observed in past draws.
- **Implementation:** `generateByMarkovChain` function (uses helper `buildMarkovChain`).
- **Parameters:**
    - `order` (Default: 1): The order of the Markov chain (how many previous numbers influence the prediction for the next). Higher orders consider longer historical sequences.

### 4. Random Generator (`random`)

- **Concept:** Generates a set of purely random numbers within the lottery's range (1-47) with equal probability.
- **Implementation:** `generateRandom` function.
- **Parameters:** None.

## Usage

Send a POST request to `/api/lottery/generate` with a JSON body specifying the `algorithm` and any relevant `parameters`:

```json
{
  "algorithm": "frequency",
  "parameters": {
    "weightHot": 0.6,
    "weightRandom": 0.4
  }
}
```

The API will return the generated ticket details, including the numbers and algorithm used, and save the ticket to the database. 