"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";

const InputTitle = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <Input
        variant="bordered"
        color={error ? "danger" : "default"}
        radius="sm"
        placeholder="Title"
        errorMessage={error && "This field can't be empty"}
        isInvalid={error ? true : false}
        isRequired={true}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onBlur={() => {
          if (title === "") {
            setError(true);
          } else {
            setError(false);
          }
        }}
      />
    </>
  );
};

export default InputTitle;
