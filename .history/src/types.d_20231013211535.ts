export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
  onHandleRemove: () => void;

}

export type ListOfTodos = Todo[];

export interface Props {
  todos: ListOfTodos;
  onHandleRemove: () => void;
}