export interface Task {
  id: number;
  label: string;
  description: string;
  category: string;
  done: string;
  searchkey?: any;
}

export type TaskProps = Pick<Task, 'category' | 'label' | 'description' | 'done'>;
