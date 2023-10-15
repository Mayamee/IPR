import { PostsList } from "./components/HOC/PostsList";
import { UsersList } from "./components/HOC/UserList";

export const App = () => {
  return (
    <>
      <UsersList />
      <PostsList />
    </>
  );
};
