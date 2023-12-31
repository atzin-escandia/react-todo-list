export interface TodoType {
  id: string;
  title: string;
  completed: boolean;

}

export type ListOfTodos = Todo[];

export interface Props {
  todos: ListOfTodos;
  onHandleRemove: () => void;
}