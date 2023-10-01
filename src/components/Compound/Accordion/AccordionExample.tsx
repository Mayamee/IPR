import { Accordion } from "./Accordion";

export const AccordionExample = () => {
  return (
    <Accordion.Container>
      <Accordion.Item title="Item 1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          eveniet!
        </p>
      </Accordion.Item>
      <Accordion.Item title="Item 2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem!
        </p>
      </Accordion.Item>
    </Accordion.Container>
  );
};
