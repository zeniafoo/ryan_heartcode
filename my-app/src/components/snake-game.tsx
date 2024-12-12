'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

// Define types
type Point = {
  x: number
  y: number
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

const CANVAS_SIZE = 400
const SNAKE_SIZE = 20
const GAME_SPEED = 100

const SnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [snake, setSnake] = useState<Point[]>([{ x: 0, y: 0 }])
  const [food, setFood] = useState<Point>({ x: 0, y: 0 })
  const [direction, setDirection] = useState<Direction>('RIGHT')
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'w':
          setDirection('UP')
          break
        case 's':
          setDirection('DOWN')
          break
        case 'a':
          setDirection('LEFT')
          break
        case 'd':
          setDirection('RIGHT')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d')
    if (context) {
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
      context.fillStyle = '#4a5568'
      snake.forEach(({ x, y }) => context.fillRect(x, y, SNAKE_SIZE, SNAKE_SIZE))
      context.fillStyle = '#48bb78'
      context.fillRect(food.x, food.y, SNAKE_SIZE, SNAKE_SIZE)
    }
  }, [snake, food])

  useEffect(() => {
    if (!gameOver) {
      const moveSnake = setInterval(() => {
        setSnake((prevSnake) => {
          const newSnake = [...prevSnake]
          const head = { ...newSnake[0] }

          switch (direction) {
            case 'UP':
              head.y -= SNAKE_SIZE
              break
            case 'DOWN':
              head.y += SNAKE_SIZE
              break
            case 'LEFT':
              head.x -= SNAKE_SIZE
              break
            case 'RIGHT':
              head.x += SNAKE_SIZE
              break
          }

          // Check for collisions
          if (
            head.x < 0 ||
            head.y < 0 ||
            head.x >= CANVAS_SIZE ||
            head.y >= CANVAS_SIZE ||
            newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
          ) {
            setGameOver(true)
            clearInterval(moveSnake)
            return prevSnake
          }

          newSnake.unshift(head)

          // Check if snake ate the food
          if (head.x === food.x && head.y === food.y) {
            setScore((prevScore) => prevScore + 1)
            setFood({
              x: Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
              y: Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
            })
          } else {
            newSnake.pop()
          }

          return newSnake
        })
      }, GAME_SPEED)

      return () => clearInterval(moveSnake)
    }
  }, [direction, gameOver])

  const startNewGame = () => {
    setSnake([{ x: 0, y: 0 }])
    setFood({
      x: Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
      y: Math.floor(Math.random() * (CANVAS_SIZE / SNAKE_SIZE)) * SNAKE_SIZE,
    })
    setDirection('RIGHT')
    setGameOver(false)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-black text-white">
      <h2 className="text-4xl font-bold mb-4">My Favorite Game: Snake</h2>
      <p className="mb-4">Use W, A, S, D keys to control the snake</p>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="border-2 border-gray-300"
        />
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Game Over</h2>
              <p className="text-xl mb-4">Your score: {score}</p>
              <Button onClick={startNewGame}>Play Again</Button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 text-xl font-semibold">Score: {score}</div>
    </div>
  )
}

export default SnakeGame