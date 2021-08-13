const tableB = [
  [0, 0, 0, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50, 10000000],
  [0, 1, 0, 8, 10, 18, 29, 46, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [0, 2, 0, 8, 12, 21, 33, 50, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [0, 3, 0, 11, 18, 32, 48, 68, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 1, 0, 8, 10, 18, 29, 46, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 2, 0, 8, 12, 21, 33, 50, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 3, 0, 11, 18, 32, 48, 68, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 1, 0, 7, 9, 14, 22, 33, 63, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 2, 0, 8, 10, 17, 25, 37, 67, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 3, 0, 10, 15, 26, 39, 53, 87, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 1, 0, 7, 9, 12, 18, 26, 49, 81, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 2, 0, 8, 10, 15, 21, 30, 53, 85, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 3, 0, 9, 14, 23, 33, 45, 72, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 1, 0, 7, 8, 11, 16, 23, 41, 66, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 2, 0, 8, 9, 13, 19, 26, 45, 70, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 3, 0, 9, 13, 21, 30, 39, 62, 90, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 1, 0, 7, 8, 11, 15, 20, 35, 56, 83, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 2, 0, 7, 9, 12, 17, 23, 39, 61, 88, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 3, 0, 8, 12, 19, 27, 36, 56, 79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 1, 0, 7, 8, 10, 13, 17, 28, 44, 64, 89, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 2, 0, 7, 8, 11, 15, 20, 32, 48, 69, 93, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 3, 0, 8, 11, 17, 24, 31, 47, 66, 88, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 1, 0, 7, 8, 9, 12, 15, 24, 37, 53, 72, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 2, 0, 7, 8, 10, 14, 18, 28, 41, 57, 77, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 3, 0, 8, 10, 15, 21, 28, 41, 57, 76, 97, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 1, 0, 7, 8, 9, 11, 14, 21, 32, 45, 62, 81, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 2, 0, 7, 8, 10, 13, 16, 25, 36, 49, 66, 85, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 3, 0, 8, 10, 14, 20, 25, 38, 51, 67, 85, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 1, 0, 7, 7, 8, 10, 12, 18, 26, 36, 48, 62, 79, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 2, 0, 7, 8, 9, 11, 14, 21, 29, 40, 52, 67, 84, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 3, 0, 8, 9, 13, 17, 22, 32, 44, 56, 70, 86, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [100, 1, 0, 7, 7, 8, 9, 11, 16, 22, 30, 40, 51, 65, 80, 97, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [100, 2, 0, 7, 8, 9, 11, 13, 18, 25, 34, 44, 56, 69, 84, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [100, 3, 0, 7, 9, 12, 16, 20, 29, 39, 49, 61, 74, 89, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [150, 1, 0, 7, 7, 8, 9, 10, 13, 17, 22, 29, 37, 46, 56, 67, 79, 93, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [150, 2, 0, 7, 7, 8, 10, 11, 15, 20, 26, 33, 41, 50, 60, 71, 84, 97, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [150, 3, 0, 7, 8, 11, 13, 17, 24, 31, 39, 48, 57, 68, 79, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [250, 1, 0, 7, 7, 7, 8, 9, 10, 13, 16, 20, 25, 30, 36, 43, 51, 59, 68, 87, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [250, 2, 0, 7, 7, 8, 9, 10, 12, 15, 19, 24, 28, 34, 40, 47, 55, 63, 72, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [250, 3, 0, 7, 8, 9, 11, 14, 19, 24, 30, 36, 43, 50, 57, 65, 73, 82, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [350, 1, 0, 7, 7, 7, 8, 8, 9, 11, 14, 16, 20, 24, 28, 33, 38, 44, 50, 64, 81, 99, 100, 100, 100, 100, 100, 100, 100],
  [350, 2, 0, 7, 7, 8, 8, 9, 11, 13, 16, 19, 23, 27, 32, 37, 42, 48, 55, 69, 85, 100, 100, 100, 100, 100, 100, 100, 100],
  [350, 3, 0, 7, 8, 9, 10, 12, 16, 21, 25, 30, 36, 41, 47, 53, 59, 66, 73, 88, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [500, 1, 0, 7, 7, 7, 7, 8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 37, 47, 59, 71, 100, 100, 100, 100, 100, 100, 100],
  [500, 2, 0, 7, 7, 7, 8, 8, 10, 12, 14, 16, 19, 22, 25, 29, 33, 37, 41, 52, 63, 76, 100, 100, 100, 100, 100, 100, 100],
  [500, 3, 0, 7, 7, 8, 9, 11, 14, 18, 22, 25, 30, 34, 38, 43, 48, 53, 58, 70, 82, 96, 100, 100, 100, 100, 100, 100, 100],
  [1000, 1, 0, 7, 7, 7, 7, 7, 8, 9, 9, 10, 12, 13, 14, 16, 18, 20, 22, 27, 33, 39, 58, 82, 100, 100, 100, 100, 100],
  [1000, 2, 0, 7, 7, 7, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 21, 23, 26, 31, 37, 43, 63, 86, 100, 100, 100, 100, 100],
  [1000, 3, 0, 7, 7, 8, 8, 9, 11, 13, 16, 19, 21, 24, 27, 30, 33, 36, 39, 46, 53, 60, 82, 100, 100, 100, 100, 100, 100],
  [2000, 1, 0, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 10, 11, 12, 13, 14, 15, 17, 20, 23, 33, 44, 58, 74, 93, 100, 100],
  [2000, 2, 0, 7, 7, 7, 7, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 23, 27, 37, 49, 63, 79, 97, 100, 100],
  [2000, 3, 0, 7, 7, 7, 8, 8, 9, 11, 12, 14, 16, 18, 19, 21, 23, 25, 27, 32, 36, 40, 53, 66, 82, 99, 100, 100, 100],
  [10000000, 1, 0, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 10, 11, 12, 13, 14, 15, 17, 20, 23, 33, 44, 58, 74, 93, 100, 100],
  [10000000, 2, 0, 7, 7, 7, 7, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 23, 27, 37, 49, 63, 79, 97, 100, 100],
  [10000000, 3, 0, 7, 7, 7, 8, 8, 9, 11, 12, 14, 16, 18, 19, 21, 23, 25, 27, 32, 36, 40, 53, 66, 82, 99, 100, 100, 100],
];

const tableC = [
  [0, 0, 0, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 10000000],
  [0, 1, 0, 4, 5, 9, 15, 23, 46, 77, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [0, 2, 0, 4, 6, 10, 17, 25, 48, 79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [0, 3, 0, 5, 9, 16, 24, 34, 58, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 1, 0, 4, 5, 9, 15, 23, 46, 77, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 2, 0, 4, 6, 10, 17, 25, 48, 79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 3, 0, 5, 9, 16, 24, 34, 58, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 1, 0, 4, 5, 7, 11, 16, 32, 53, 79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 2, 0, 4, 5, 8, 13, 18, 34, 55, 82, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 3, 0, 5, 8, 13, 19, 26, 43, 66, 93, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 1, 0, 4, 4, 6, 9, 13, 25, 40, 61, 85, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 2, 0, 4, 5, 7, 11, 15, 27, 43, 63, 87, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 3, 0, 5, 7, 11, 17, 22, 36, 53, 74, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 1, 0, 4, 4, 6, 8, 11, 20, 33, 49, 69, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 2, 0, 4, 5, 7, 9, 13, 22, 35, 51, 71, 94, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 3, 0, 4, 6, 10, 15, 20, 31, 45, 62, 82, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 1, 0, 4, 4, 5, 7, 10, 18, 28, 42, 58, 77, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 2, 0, 4, 4, 6, 9, 12, 20, 30, 44, 60, 80, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 3, 0, 4, 6, 10, 14, 18, 28, 40, 54, 71, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 1, 0, 4, 4, 5, 6, 8, 14, 22, 32, 44, 59, 76, 94, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 2, 0, 4, 4, 6, 8, 10, 16, 24, 34, 47, 61, 78, 97, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 3, 0, 4, 5, 8, 12, 15, 23, 33, 44, 57, 72, 89, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 1, 0, 4, 4, 5, 6, 7, 12, 18, 26, 36, 48, 61, 76, 93, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 2, 0, 4, 4, 5, 7, 9, 14, 20, 29, 38, 50, 63, 79, 95, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 3, 0, 4, 5, 8, 11, 14, 21, 29, 38, 48, 61, 74, 90, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 1, 0, 4, 4, 4, 5, 7, 11, 16, 23, 31, 40, 52, 64, 78, 94, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 2, 0, 4, 4, 5, 6, 8, 12, 18, 25, 33, 43, 54, 66, 81, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 3, 0, 4, 5, 7, 10, 13, 19, 26, 34, 43, 53, 64, 77, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 1, 0, 4, 4, 4, 5, 6, 9, 13, 18, 24, 31, 40, 49, 60, 71, 84, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 2, 0, 4, 4, 5, 6, 7, 10, 15, 20, 26, 33, 42, 51, 62, 74, 86, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 3, 0, 4, 5, 6, 9, 11, 16, 22, 28, 35, 43, 52, 62, 73, 85, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [100, 1, 0, 4, 4, 4, 5, 5, 8, 11, 15, 20, 26, 32, 40, 48, 58, 68, 79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [100, 2, 0, 4, 4, 4, 5, 6, 9, 13, 17, 22, 28, 35, 42, 51, 60, 70, 81, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [100, 3, 0, 4, 4, 6, 8, 10, 14, 19, 25, 31, 37, 44, 52, 61, 71, 81, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [150, 1, 0, 4, 4, 4, 4, 5, 6, 8, 11, 14, 18, 23, 28, 33, 40, 46, 54, 70, 89, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [150, 2, 0, 4, 4, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 49, 56, 73, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [150, 3, 0, 4, 4, 5, 7, 8, 12, 16, 20, 24, 29, 34, 39, 46, 52, 59, 67, 84, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [250, 1, 0, 4, 4, 4, 4, 4, 5, 7, 8, 10, 12, 15, 18, 22, 25, 29, 34, 44, 55, 68, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [250, 2, 0, 4, 4, 4, 4, 5, 6, 8, 10, 12, 14, 17, 20, 24, 27, 32, 36, 46, 57, 70, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [250, 3, 0, 4, 4, 5, 6, 7, 9, 12, 15, 18, 21, 25, 28, 32, 37, 41, 46, 56, 68, 81, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [350, 1, 0, 4, 4, 4, 4, 4, 5, 6, 7, 8, 10, 12, 14, 16, 19, 22, 25, 32, 40, 49, 77, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [350, 2, 0, 4, 4, 4, 4, 4, 5, 7, 8, 10, 12, 14, 16, 18, 21, 24, 27, 34, 43, 52, 79, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [350, 3, 0, 4, 4, 4, 5, 6, 8, 10, 13, 15, 18, 21, 23, 26, 30, 33, 36, 44, 53, 62, 90, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [500, 1, 0, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 11, 13, 14, 16, 19, 24, 29, 36, 55, 78, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [500, 2, 0, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 11, 13, 14, 16, 18, 21, 26, 31, 38, 57, 80, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [500, 3, 0, 4, 4, 4, 5, 5, 7, 9, 11, 13, 15, 17, 19, 21, 24, 26, 29, 35, 41, 48, 68, 92, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [1000, 1, 0, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11, 14, 16, 20, 29, 41, 55, 71, 89, 100, 100, 100, 100, 100, 100],
  [1000, 2, 0, 4, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18, 22, 31, 43, 57, 73, 91, 100, 100, 100, 100, 100, 100],
  [1000, 3, 0, 4, 4, 4, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 16, 18, 20, 23, 26, 30, 41, 53, 68, 84, 100, 100, 100, 100, 100, 100, 100],
  [2000, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 9, 10, 12, 16, 22, 29, 37, 46, 56, 68, 80, 94, 100, 100],
  [2000, 2, 0, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 9, 10, 12, 13, 18, 24, 31, 39, 49, 59, 70, 83, 96, 100, 100],
  [2000, 3, 0, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 26, 33, 41, 50, 59, 70, 81, 94, 100, 100, 100],
  [10000000, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 9, 10, 12, 16, 22, 29, 37, 46, 56, 68, 80, 94, 100, 100],
  [10000000, 2, 0, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 9, 10, 12, 13, 18, 24, 31, 39, 49, 59, 70, 83, 96, 100, 100],
  [10000000, 3, 0, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 26, 33, 41, 50, 59, 70, 81, 94, 100, 100, 100]
];

const tableD = [
  [0, 0, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10000000],
  [0, 0, 16, 24, 42, 66, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 0, 16, 24, 42, 66, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 0, 16, 20, 34, 50, 74, 100, 100, 100, 100, 100, 100, 100],
  [20, 0, 16, 20, 30, 42, 60, 100, 100, 100, 100, 100, 100, 100],
  [25, 0, 16, 18, 26, 38, 52, 90, 100, 100, 100, 100, 100, 100],
  [30, 0, 14, 18, 24, 34, 46, 78, 100, 100, 100, 100, 100, 100],
  [40, 0, 14, 16, 22, 30, 40, 64, 96, 100, 100, 100, 100, 100],
  [50, 0, 14, 16, 20, 28, 36, 56, 82, 100, 100, 100, 100, 100],
  [60, 0, 14, 16, 20, 26, 32, 50, 72, 98, 100, 100, 100, 100],
  [80, 0, 14, 16, 18, 22, 28, 42, 58, 80, 100, 100, 100, 100],
  [100, 0, 14, 16, 18, 22, 26, 36, 50, 68, 88, 100, 100, 100],
  [150, 0, 14, 14, 16, 20, 22, 30, 40, 52, 66, 82, 100, 100],
  [10000000, 0, 14, 14, 16, 20, 22, 30, 40, 52, 66, 82, 100, 100],
];

const tableE = [
  [0, 0, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 10000000],
  [0, 0, 8, 12, 20, 34, 50, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [10, 0, 8, 12, 20, 34, 50, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [15, 0, 8, 10, 16, 26, 36, 68, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [20, 0, 8, 10, 14, 22, 30, 54, 86, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [25, 0, 8, 10, 14, 18, 26, 44, 70, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [30, 0, 8, 8, 12, 18, 24, 40, 60, 88, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [40, 0, 8, 8, 12, 16, 20, 32, 48, 68, 94, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [50, 0, 8, 8, 10, 14, 18, 28, 40, 58, 76, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  [60, 0, 8, 8, 10, 12, 16, 24, 36, 50, 66, 86, 100, 100, 100, 100, 100, 100, 100, 100],
  [80, 0, 8, 8, 10, 12, 14, 20, 30, 40, 52, 66, 84, 100, 100, 100, 100, 100, 100, 100],
  [100, 0, 8, 8, 8, 10, 12, 18, 26, 34, 44, 56, 70, 84, 100, 100, 100, 100, 100, 100],
  [150, 0, 8, 8, 8, 10, 12, 16, 20, 26, 32, 40, 50, 60, 72, 84, 98, 100, 100, 100],
  [200, 0, 8, 8, 8, 8, 10, 14, 18, 22, 28, 34, 42, 50, 60, 68, 80, 92, 100, 100],
  [10000000, 0, 8, 8, 8, 8, 10, 14, 18, 22, 28, 34, 42, 50, 60, 68, 80, 92, 100, 100]
];

const constTable = [
  ['1h', 'Noncombustible', 'Noncombustible'],
  ['1h', 'Combustible', 'Noncombustible'],
  ['45min', 'Combustible', 'Noncombustible'],
  ['45min', 'Combustible', 'Combustible'],
  ['2h', 'Noncombustible', 'Noncombustible'],
  ['2h', 'Combustible', 'Noncombustible'],
  ['1h', 'Combustible', 'Noncombustible'],
  ['1h', 'Combustible', 'Combustible']
]
