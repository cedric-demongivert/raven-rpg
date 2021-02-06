export type Filter<From, To extends From = From> = (value: From) => value is To
