import { IsChar } from "../strings/IsChar.ts";
import { ToString } from "../strings/ToString.ts";
import { Decrement } from "./Decrement.ts";
import { FromString } from "./FromString.ts";
import { SumDigits } from "./SumDigits.ts";

// Sum all of the digits of a numeric string until the result is a single digit
type RecursiveSumDigits<
  T extends string,
  Iter extends number = 10,
> = {
  single_digit: FromString<T>;
  recurse: RecursiveSumDigits<
    ToString<SumDigits<T>>,
    Decrement<Iter>
  >;
}[Iter extends 0
  ? "single_digit"
  : IsChar<T> extends true
  ? "single_digit"
  : "recurse"];

let _sumUntilSingleDigit: RecursiveSumDigits<"7116">; // 6
let _sumUntilSingleDigit1: RecursiveSumDigits<"3456194">; // 5
