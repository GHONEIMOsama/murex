export interface Tickets {
  tickets: Ticket[];
}

export enum Category {
  LIBRARY = 'LIBRARY',
  BLOG = 'BLOG',
  DOCUMENTATION = 'DOCUMENTATION'
}

export enum Status {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  FORWARD = 'FORWARD',
  OK = 'OK'
}
export interface Ticket {
  id: string;
  title: string;
  category: Category;
  status: Status;
  description: string;
  user: string;
  internal: boolean;
}
