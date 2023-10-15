import { ClockWidget } from "./components/RenderProps/Clock/ClockWidget";
import { AccordionExample } from "./components/Compound/Accordion/AccordionExample";
import { PostsList } from "./components/HOC/PostsList";
import { UsersList } from "./components/HOC/UserList";

export const App = () => {
  return (
    <>
      <ClockWidget />
      <AccordionExample />
      <UsersList />
      <PostsList />
    </>
  );
};
