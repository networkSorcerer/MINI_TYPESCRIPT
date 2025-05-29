type TWithDefault<T> = {
  [K in keyof T]: [T[K], T[K]];
};

type Original = { id: number; name: string; isActive: boolean };
type TWithDefaults = TWithDefault<Original>;
