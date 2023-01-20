import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type FeToBeMap = typeof frontendToBackendEnumMap;
type BackendModuleKeys = keyof FeToBeMap;

// if the indexed access type is a union, return type will also be a union
// so we create a union of all keys in the object and use it as the indexed access type to get the types pertaining to those keys
type BackendModuleEnum = typeof frontendToBackendEnumMap[BackendModuleKeys];

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >
];
