// lib/utils.ts
export const cn = (...inputs: (string | undefined)[]) => {
  return inputs.filter(Boolean).join(" ")
}