export function convertWeight(
  originalWeight: number | null,
  originalUnit: string,
  unit: string
) {
  if (!originalWeight) return 0;
  if (originalUnit === unit) return originalWeight;
  if (unit === "KG") return Math.round(originalWeight / 2.2);
  return Math.round(originalWeight * 2.2);
}
