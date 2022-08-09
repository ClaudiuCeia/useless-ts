import { Revert } from "./arrays/Revert.ts";
import { Decrement } from "./math/Decrement.ts";
import { IsDiv15,IsDiv3,IsDiv5 } from "./math/Div.ts";

// The FizzBuzz check, assign Fizz, Buzz, FizzBuzz, or the number itself
type Check<T extends number> = IsDiv15<`${T}`> extends true
  ? "FizzBuzz"
  : IsDiv3<`${T}`> extends true
  ? "Fizz"
  : IsDiv5<`${T}`> extends true
  ? "Buzz"
  : T;

// For an array of 1 to N, apply the Check function to each number and
// return an array of the results
export type FizzBuzz<T extends number, Acc extends unknown[] = []> = T extends 0
  ? Acc
  : FizzBuzz<Decrement<T>, [...Acc, Check<T>]>;

// [16, "FizzBuzz", 14, 13, "Fizz", 11, "Buzz", "Fizz", ... ]
let _fizzBuzz: FizzBuzz<16>;
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", ... ]
let _fizzBuzz2: Revert<FizzBuzz<16>>;
