import { Repeat } from "../arrays/Repeat.ts";
import { FromString } from "./FromString.ts";

type DecrementNum<T extends number> = Repeat<T> extends [...infer R, infer U]
  ? R["length"]
  : never;

// Decrement a number by 1, as long as it's positive. For 0, keep it at 0.
export type Decrement<T extends number | string> = T extends string
  ? DecrementNum<FromString<T>>
  : T extends number
  ? DecrementNum<T>
  : never;

let _dec: Decrement<0>; // 0
let _dec2: Decrement<10>; // 9
let _dec3: Decrement<99>; // 98
let _dec4: Decrement<"0">; // 0
let _dec5: Decrement<"10">; // 9
let _dec6: Decrement<"99">; // 98
