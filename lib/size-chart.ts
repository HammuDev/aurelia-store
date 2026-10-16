export const sizeChart = [
  { size: 'S', minHeight: 145, maxHeight: 165, minBust: 30, maxBust: 36 },
  { size: 'M', minHeight: 150, maxHeight: 170, minBust: 36, maxBust: 40 },
  { size: 'L', minHeight: 155, maxHeight: 175, minBust: 40, maxBust: 44 },
  { size: 'XL', minHeight: 160, maxHeight: 185, minBust: 44, maxBust: 50 },
] as const

export function recommendSize(height: number, bust: number) {
  return sizeChart.find((row) => height >= row.minHeight && height <= row.maxHeight && bust >= row.minBust && bust <= row.maxBust)?.size ?? (bust > 40 ? 'L' : 'M')
}
