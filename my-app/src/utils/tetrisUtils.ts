export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export const TETROMINOES: { [key in TetrominoType]: number[][] } = {
  'I': [[1, 1, 1, 1]],
  'O': [[1, 1], [1, 1]],
  'T': [[0, 1, 0], [1, 1, 1]],
  'S': [[0, 1, 1], [1, 1, 0]],
  'Z': [[1, 1, 0], [0, 1, 1]],
  'J': [[1, 0, 0], [1, 1, 1]],
  'L': [[0, 0, 1], [1, 1, 1]]
};

export const COLORS: { [key in TetrominoType]: string } = {
  'I': 'bg-cyan-400',
  'O': 'bg-yellow-400',
  'T': 'bg-purple-400',
  'S': 'bg-green-400',
  'Z': 'bg-red-400',
  'J': 'bg-blue-400',
  'L': 'bg-orange-400'
};

export function createEmptyBoard(): number[][] {
  return Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));
}

export function getRandomTetromino(): TetrominoType {
  const tetrominoes: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
  return tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
}

export function rotateMatrix(matrix: number[][]): number[][] {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return matrix; // Return the original matrix if it's empty or invalid
  }
  const N = matrix.length;
  const rotated = matrix[0].map((val, index) => 
    matrix.map(row => row[index]).reverse()
  );
  return rotated;
}

export function isValidMove(board: number[][], piece: number[][], x: number, y: number): boolean {
  for (let row = 0; row < piece.length; row++) {
    for (let col = 0; col < piece[row].length; col++) {
      if (piece[row][col]) {
        const newX = x + col;
        const newY = y + row;
        if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || (newY >= 0 && board[newY][newX])) {
          return false;
        }
      }
    }
  }
  return true;
}

