import { Repeat } from "../arrays/Repeat.ts";
import { FromString } from "./FromString.ts";

type IncrementNum<T extends number> = [...Repeat<T>, 1]["length"];

// Increment a number by 1, as long as it's positive.
export type Increment<T extends number | string> = T extends string
  ? IncrementNum<FromString<T>>
  : T extends number
  ? IncrementNum<T>
  : never;

let _inc: Increment<0>; // 1
let _inc2: Increment<10>; // 11
let _inc3: Increment<99>; // 100
let _inc4: Increment<"0">; // 1
let _inc5: Increment<"10">; // 11
let _inc6: Increment<"99">; // 100
