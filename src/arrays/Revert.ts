// Reverse an array
export type Revert<Arr extends unknown[]> = Arr["length"] extends 0
  ? []
  : Arr extends [infer First, ...infer Rest]
  ? [...Revert<Rest>, First]
  : never;
let _revert: Revert<["1", "2", "3"]>;
