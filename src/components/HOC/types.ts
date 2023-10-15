export type User = {
  name: string;
  email: string;
  phone: string;
  id: number;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type UserPayload = {
  users: {
    data: User[];
    isLoading: boolean;
    error: string;
  };
};

export type PostsPayload = {
  posts: {
    data: Post[];
    isLoading: boolean;
    error: string;
  };
};
