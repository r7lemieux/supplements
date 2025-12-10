import type {AppTypes, RouteId} from '$app/types'

type Record<K extends keyof any, T> = {
  [P in K]: T;
}
export type LayoutParams<T extends RouteId> = T extends keyof ReturnType<AppTypes['LayoutParams']>
                                              ? ReturnType<AppTypes['LayoutParams']>[T]
                                              : Record<string, never>;

const rec1:Record<string, string> = {a:"A", b:"B", c:"C"};
const fnames = Object.keys(rec1)
console.log(fnames)