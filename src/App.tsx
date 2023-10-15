import { AccordionExample } from "./components/Compound/Accordion/AccordionExample";
import { PostsList } from "./components/HOC/PostsList";
import { UsersList } from "./components/HOC/UserList";

export const App = () => {
  return (
    <>
      <AccordionExample />
      <UsersList />
      <PostsList />
    </>
  );
};
