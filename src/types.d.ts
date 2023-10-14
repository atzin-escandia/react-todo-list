export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}

export type ListOfTodos = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];