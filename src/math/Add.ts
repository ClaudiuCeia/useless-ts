import { Repeat } from "../arrays/Repeat.ts";

// combined length.
export type Add<U extends string | number, V extends string | number> = [
  ...Repeat<U>,
  ...Repeat<V>
]["length"];

let _add: Add<"5", "16">; // 21
let _add2: Add<"5", 16>; // 21
let _add3: Add<"0", 16>; // 16
let _add4: Add<"0", "0">; // 0
