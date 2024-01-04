"use client";

import { Button, Stack, Typography } from "@nwaycorp/global-designsystem";
import Link from "next/link";
import { StyledBox } from "./styles";

const Table = () => {
  return (
    <>
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
      <Link href="/completed">
        <Button variant="solid" color="primary">
          select 제출을 완료하면 /completed로 이동시킴
        </Button>
      </Link>
    </>
  );
};

export default Table;
