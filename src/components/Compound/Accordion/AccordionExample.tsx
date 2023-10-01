import { Accordion, AccordionItem } from "./Accordion";

export const AccordionExample = () => {
  return (
    <Accordion>
      <AccordionItem title="Item 1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          eveniet!
        </p>
      </AccordionItem>
      <AccordionItem title="Item 2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem!
        </p>
      </AccordionItem>
    </Accordion>
  );
};
