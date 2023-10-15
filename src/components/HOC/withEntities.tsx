import { Post, PostsPayload, User, UserPayload } from "./types";
import { useFetch } from "./useFetch";

export const withUsers = <P,>(
  WrappedComponent: (props: P & UserPayload) => JSX.Element
) => {
  return (props: P) => {
    const { data, error, isLoading } = useFetch<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return (
      <WrappedComponent
        {...props}
        users={{ data: data ?? [], isLoading, error }}
      />
    );
  };
};

export const withPosts = <P,>(
  WrappedComponent: (props: P & PostsPayload) => JSX.Element
) => {
  return (props: P) => {
    const { data, error, isLoading } = useFetch<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return (
      <WrappedComponent
        {...props}
        posts={{ data: data ?? [], isLoading, error }}
      />
    );
  };
};
