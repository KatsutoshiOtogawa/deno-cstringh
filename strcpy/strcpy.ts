import { load } from "./load_library.ts";

function strcpy(s1: Uint8Array, s2: Uint8Array): Deno.PointerValue {
  const {strcpy, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strcpy(s1, s2);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  strcpy
}
