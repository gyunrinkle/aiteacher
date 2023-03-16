import { useState } from "react";
import { Overlay, Grid, Flex, Button } from "@mantine/core";
import CardDemo from "../Home/Card";
import SyntaxErrorCard from "./Second step/SyntaxErrorCard";
import LogicalErrorCard from "./Second step/LogicalErrorCard";

function TypeSelector({ typeValue, setTypeValue }) {
  return (
    <>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <SyntaxErrorCard typeValue={typeValue} setTypeValue={setTypeValue} />
        <LogicalErrorCard typeValue={typeValue} setTypeValue={setTypeValue} />
      </Flex>
    </>
  );
}

export default TypeSelector;
