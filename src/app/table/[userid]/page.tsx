import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "@nwaycorp/global-designsystem";
import Link from "next/link";
import { Fragment } from "react";
import { StyledBox } from "./styles";

const Table = () => {
  return (
    <Fragment>
      <StyledBox>
        <Typography variant="h1">
          jeenie의 식탁이야. 친구의 목표를 응원해줘!
        </Typography>
        <Stack direction="row">
          <Link href="/select">
            <Button variant="solid" color="primary">
              건배로 친구의 목표 응원하러 가기
            </Button>
          </Link>
        </Stack>
      </StyledBox>
      <Box>
        <Typography variant="h1">친구에게 응원의 건배를 보냈어!</Typography>
        <Link href="/compose">
          <Button variant="solid" color="primary">
            <Typography variant="h6">나도 2024년 식탁 만들기</Typography>
          </Button>
        </Link>
        <Button variant="outlined" color="secondary">
          <Typography variant="h6">닫기</Typography>
        </Button>
      </Box>
    </Fragment>
  );
};

export default Table;
