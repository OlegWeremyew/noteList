import { rootReducer } from 'reduxStore/store';

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>;

export type AppRootStateType = ReturnType<typeof rootReducer>;
