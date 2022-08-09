export type ToString<T extends unknown> = T extends string
    ? T
    : T extends number
    ? `${T}`
    : T extends unknown[]
    ? `${T["length"]}`
    : T extends boolean
    ? `${T}`
    : never;
     