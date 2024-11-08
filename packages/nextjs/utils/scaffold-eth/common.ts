// To be used in JSON.stringify when a field might be bigint
// https://wagmi.sh/react/faq#bigint-serialization
export const replacer = (_key: string, value: unknown) => (typeof value === "bigint" ? value.toString() : value);
export const wrapInTryCatch = (func: () => any) => {
    try {
      func();
    } catch (error) {
      console.error('Error in "wrapInTryCatch":', error);
    }
  };
  