import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import { useState } from "react";

const SelectPorType = () => {
  const [projectType, setProjectType] = useState("");
  return (
    <>
      <Select
        label="Project Type"
        variant="bordered"
        placeholder="Select a type"
        className="w-full"
        onChange={(e) => {
          setProjectType(e.target.value);
        }}
      >
        <SelectSection title="project">
          <SelectItem key="Front-End">Front-End</SelectItem>
          <SelectItem key="Back-End">Back-End</SelectItem>
          <SelectItem key="Full-Stack">Full-Stack</SelectItem>
        </SelectSection>
      </Select>
    </>
  );
};

export default SelectPorType;
