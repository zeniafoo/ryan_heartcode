'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { BOARD_WIDTH, BOARD_HEIGHT, TETROMINOES, COLORS, TetrominoType, createEmptyBoard, getRandomTetromino, rotateMatrix, isValidMove } from '../utils/tetrisUtils';
import { Button } from "@/components/ui/button"

export const TetrisGame: React.FC = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<number[][]>([]);
  const [currentType, setCurrentType] = useState<TetrominoType>('I');
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const spawnNewPiece = useCallback(() => {
    const newType = getRandomTetromino();
    const newPiece = TETROMINOES[newType];
    setCurrentPiece(newPiece);
    setCurrentType(newType);
    setCurrentPosition({ x: Math.floor(BOARD_WIDTH / 2) - Math.floor(newPiece[0].length / 2), y: 0 });

    if (!isValidMove(board, newPiece, Math.floor(BOARD_WIDTH / 2) - Math.floor(newPiece[0].length / 2), 0)) {
      setGameOver(true);
    }
  }, [board]);

  const mergePieceToBoard = useCallback(() => {
    const newBoard = board.map(row => [...row]);
    currentPiece.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          newBoard[y + currentPosition.y][x + currentPosition.x] = value;
        }
      });
    });
    return newBoard;
  }, [board, currentPiece, currentPosition]);

  const clearLines = useCallback((board: number[][]) => {
    let linesCleared = 0;
    const newBoard = board.filter(row => {
      if (row.every(cell => cell !== 0)) {
        linesCleared++;
        return false;
      }
      return true;
    });

    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }

    setScore(prevScore => prevScore + linesCleared * 100);
    return newBoard;
  }, []);

  const moveDown = useCallback(() => {
    if (isValidMove(board, currentPiece, currentPosition.x, currentPosition.y + 1)) {
      setCurrentPosition(prev => ({ ...prev, y: prev.y + 1 }));
    } else {
      const newBoard = mergePieceToBoard();
      setBoard(clearLines(newBoard));
      spawnNewPiece();
    }
  }, [board, currentPiece, currentPosition, mergePieceToBoard, clearLines, spawnNewPiece]);

  const moveHorizontally = useCallback((direction: number) => {
    if (isValidMove(board, currentPiece, currentPosition.x + direction, currentPosition.y)) {
      setCurrentPosition(prev => ({ ...prev, x: prev.x + direction }));
    }
  }, [board, currentPiece, currentPosition]);

  const rotate = useCallback(() => {
    if (!currentPiece || currentPiece.length === 0) return;
    const rotatedPiece = rotateMatrix(currentPiece);
    if (isValidMove(board, rotatedPiece, currentPosition.x, currentPosition.y)) {
      setCurrentPiece(rotatedPiece);
    }
  }, [board, currentPiece, currentPosition]);

  useEffect(() => {
    if (gameOver || isPaused) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === 'ArrowLeft') moveHorizontally(-1);
      if (event.key === 'ArrowRight') moveHorizontally(1);
      if (event.key === 'ArrowDown') moveDown();
      if (event.key === 'ArrowUp' && currentPiece && currentPiece.length > 0) rotate();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameOver, isPaused, moveHorizontally, moveDown, rotate, currentPiece]);

  useEffect(() => {
    if (gameOver || isPaused) return;

    const gameLoop = setInterval(moveDown, 1000);
    return () => {
      clearInterval(gameLoop);
    };
  }, [gameOver, isPaused, moveDown]);

  useEffect(() => {
    spawnNewPiece();
  }, []);

  const renderBoard = () => {
    const boardWithPiece = board.map(row => [...row]);
    if (currentPiece && currentPiece.length > 0) {
      currentPiece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value && boardWithPiece[y + currentPosition.y] && boardWithPiece[y + currentPosition.y][x + currentPosition.x] !== undefined) {
            boardWithPiece[y + currentPosition.y][x + currentPosition.x] = value;
          }
        });
      });
    }

    return boardWithPiece.map((row, y) => (
      <div key={y} className="flex">
        {row.map((cell, x) => (
          <div
            key={x}
            className={`w-6 h-6 border border-gray-700 ${cell ? COLORS[currentType] : 'bg-gray-900'}`}
          />
        ))}
      </div>
    ));
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const restartGame = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    spawnNewPiece();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-2">Tetris</h1>
        <p className='text-sm'>
        Please use arrow keys to move the blocks!
        </p>
      <div className="border-4 border-gray-600 p-2 bg-gray-900">
        {renderBoard()}
      </div>
      <div className="mt-4 text-xl">Score: {score}</div>
      <div className="mt-4 flex space-x-4">
        <Button onClick={togglePause} disabled={gameOver}>
          {isPaused ? 'Resume' : 'Pause'}
        </Button>
        <Button onClick={restartGame}>Restart</Button>
      </div>
      {gameOver && (
        <div className="mt-4 text-2xl font-bold text-red-500">Game Over!</div>
      )}
    </div>
  );
};

