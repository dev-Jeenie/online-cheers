"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";
import { useState } from "react";

const Accessibility = () => {
  return (
    <Box>
      <Typography variant="h1">
        내 목표를 응원할 수 있는 사람을 설정하세요
      </Typography>
    </Box>
  );
};
const MessageVisibility = () => {
  return (
    <Box>
      <Typography variant="h1">
        받은 메시지 내용을 다른사람에게도 공개할까요?
      </Typography>
    </Box>
  );
};
const CountVisibility = () => {
  return (
    <Box>
      <Typography variant="h1">
        받은 메시지 개수 공개여부 설정을 선택하세요
      </Typography>
    </Box>
  );
};

const Page = () => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return <Accessibility />;
    case 1:
      return <MessageVisibility />;
    case 2:
      return <CountVisibility />;
    default:
      <Box>
        <Typography>Loading ... </Typography>
      </Box>;
  }
};

export default Page;
