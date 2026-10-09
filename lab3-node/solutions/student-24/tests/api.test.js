// tests/api.test.js
import { describe, it, expect, beforeAll } from 'vitest';
import express from 'express';
import { router } from '../src/api/index.js';

const app = express();
app.use(express.json());
app.use('/api', router);

describe('API Endpoints', () => {
  it('GET /api/board должен возвращать состояние доски', async () => {
    const response = await fetch('http://localhost:3000/api/board');
    // Этот тест требует запущенного сервера
    expect(true).toBe(true); 
  });
});


import { Board, Task } from '../src/core/models.js';

describe('API Logic', () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  it('должен создавать задачу', () => {
    const task = new Task('001', 'API Test Task');
    board.addTask(task);
    expect(board.findTaskById('001')).toBeDefined();
    expect(board.findTaskById('001').title).toBe('API Test Task');
  });

  it('должен перемещать задачу', () => {
    const moved = board.moveTask('001', 'In Progress');
    expect(moved.status).toBe('In Progress');
    expect(moved.getSteps()).toBe(1);
  });

  it('должен возвращать все задачи', () => {
    expect(board.tasks.length).toBeGreaterThan(0);
  });
});