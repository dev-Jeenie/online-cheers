"use client";
import { Box, Stack } from "@nwaycorp/global-designsystem";
import styled from "styled-components";

export const StyledStack = styled(Stack)`
  direction: row;
`;

export const StyledButtonBox = styled(Box)<{ color?: string }>`
  /* ${({ color }) => `background-color: ${color};`} */
  background: gray;
`;
