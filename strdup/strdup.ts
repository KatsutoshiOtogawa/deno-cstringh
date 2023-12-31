import { load } from "./load_library.js";

function strdup(s: Uint8Array): Deno.PointerValue {
  const {strdup, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strdup(s);
  } finally {
      library.close();
  }
  return s;
}

export {
  strdup
}
