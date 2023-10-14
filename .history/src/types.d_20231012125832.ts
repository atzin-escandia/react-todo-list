export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type ListOfTodos = Todo[];

export interface Props {
  todos: ListOfTodos;
}