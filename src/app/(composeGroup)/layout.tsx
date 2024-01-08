import {
  StyledBox,
  StyledComposeBox,
  StyledDiv,
} from "@/app/(composeGroup)/styles";
import { Box, Button, Stack, Typography } from "@nwaycorp/global-designsystem";
import { ReactNode } from "react";

const ComposeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComposeBox>
      <StyledBox>{children}</StyledBox>
      <Stack direction="row">
        <Button block variant="outlined">
          <Typography>이전</Typography>
        </Button>
        <Button block color="error">
          <Typography color="#fff">다음으로</Typography>
        </Button>
      </Stack>
    </StyledComposeBox>
  );
};

export default ComposeLayout;
