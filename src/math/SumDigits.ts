import { Split } from "../strings/Split.ts";
import { Sum } from "./Sum.ts";

// Take a numeric string and sum its digits
export type SumDigits<
  T extends string | number,
  R extends string[] = []
> = Sum<Split<T>>;

let _sumNumber: SumDigits<"16">; // 7
let _sumNumber2: SumDigits<"7116">; // 15
let _sumNumber3: SumDigits<"166">; // 13
let _sumNumber4: SumDigits<"71101273125">; // 30
let _sumNumber5: SumDigits<"220077">; // 18
let _sumNumber6: SumDigits<71101273125>; // 30
