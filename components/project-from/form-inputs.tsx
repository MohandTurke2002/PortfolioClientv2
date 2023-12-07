"use client";
import { Button } from "@nextui-org/react";
import InputTitle from "./input-title";
import SelectLanguages from "./select-languages";
import SelectPorType from "./select-pro-type";

const FormInputs = () => {
  return (
    <form className="bg-content1 w-1/2 flex justify-end gap-y-5 flex-wrap p-5 rounded-xl shadow-medium">
      <InputTitle />
      <SelectLanguages />
      <SelectPorType />
      <Button color="primary" variant="solid">
        Create Project
      </Button>
    </form>
  );
};

export default FormInputs;
