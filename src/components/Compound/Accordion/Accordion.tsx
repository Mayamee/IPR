import React, { useState } from "react";

type AccordionItemInteractionProps = {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Accordion = ({
  children,
}: {
  children: React.ReactElement<AccordionItemInteractionProps>[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: () => handleItemClick(index),
          });
        }
        return child;
      })}
    </div>
  );
};

const AccordionItem = ({
  title,
  children,
  isActive,
  onClick,
}: Partial<AccordionItemInteractionProps> & {
  title: string;
  children: React.ReactElement;
}) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <h2>{title}</h2>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export { Accordion, AccordionItem };
