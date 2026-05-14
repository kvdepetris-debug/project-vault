export type Project = {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  status: string;
  percent: number;
  due_date: string | null;
  next_action: string | null;
  created_at: string;
};

export type Task = {
  id: string;
  project_id: string;
  name: string;
  due_date: string | null;
  priority: string;
  done: boolean;
  created_at: string;
};

export type Note = {
  id: string;
  project_id: string;
  title: string;
  content: string;
  created_at: string;
};

export type ProjectFile = {
  id: string;
  project_id: string;
  name: string;
  file_type: string;
  storage_path: string;
  created_at: string;
};

export type Reminder = {
  id: string;
  project_id: string;
  title: string;
  remind_at: string;
  priority: string;
  sent: boolean;
  created_at: string;
};
