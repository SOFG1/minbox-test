export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type TabType = "all" | "active" | "completed";
