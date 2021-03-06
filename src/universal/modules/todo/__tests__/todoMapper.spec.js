import { Map } from 'immutable';

import Todo from '../../../containers/Todo';
import toMap from '../todoMapper';

// sorted: 1, 0, 2
const todoArray = [
  { id: 2, text: 'todo2' },
  { id: 1, text: 'todo1' },
  { id: 3, text: 'todo3' },
];

describe('todo mapper', () => {
  it('should return an empty Map', () => {
    const mappedTodos = toMap([]);
    const expectedTodos = new Map();

    expect(expectedTodos.equals(mappedTodos)).toBe(true);
  });

  it('should map todo array to Map', () => {
    const mappedTodos = toMap(todoArray);
    const expectedTodos = new Map()
      .set(1, new Todo(todoArray[1]))
      .set(2, new Todo(todoArray[0]))
      .set(3, new Todo(todoArray[2]));

    expect(expectedTodos.equals(mappedTodos)).toBe(true);
  });
});
