"use client";

import { Box } from "@nwaycorp/global-designsystem";
import styled from "styled-components";

export const StyledComposeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const StyledDiv = styled.div`
  background: green;
`;

export const StyledBox = styled(Box)`
  background: grey;
  flex: 1;
`;
