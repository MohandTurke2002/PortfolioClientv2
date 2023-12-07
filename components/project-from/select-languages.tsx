"use client";
import { selectBoxData, selectTypes } from "@/data/select-box";
import { Select, SelectItem, Chip, SelectedItems } from "@nextui-org/react";
import { useState } from "react";

const SelectLanguages = () => {
  const [languages, setLanguages]: object[] = useState([]);
  return (
    <>
      <Select
        items={selectBoxData}
        onChange={(e) => {
          let mySelector: string = e.target.value.split(",").reverse()[0];
          let myValue: selectTypes | undefined = selectBoxData.find(
            ({ key }) => {
              return +key === +mySelector;
            },
          );
          setLanguages([...languages, myValue]);
        }}
        label="Select a language"
        variant="bordered"
        isMultiline={true}
        selectionMode="multiple"
        placeholder="Select a user"
        labelPlacement="outside"
        classNames={{
          base: "w-full",
          trigger: "min-h-unit-12 py-2",
        }}
        renderValue={(selectBoxData: SelectedItems<selectTypes>) => {
          return (
            <div className="flex flex-wrap gap-2">
              {selectBoxData.map(({ key, data }) => (
                <Chip key={key}>{data?.name}</Chip>
              ))}
            </div>
          );
        }}
      >
        {({ key, name }) => (
          <SelectItem key={key} textValue={name}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-small">{name}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
    </>
  );
};

export default SelectLanguages;
