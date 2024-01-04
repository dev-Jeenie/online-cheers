"use client";

import { Box, Button, Link, Typography } from "@nwaycorp/global-designsystem";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const CheersCompletedModal = () => {
  console.log("CheersCompletedModal 열림");

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return (
    <Box background="green">
      <Typography variant="h1">친구에게 응원의 건배를 보냈어!</Typography>
      <Link href="/compose">
        <Button variant="solid" color="primary">
          <Typography variant="h6">나도 2024년 식탁 만들기</Typography>
        </Button>
      </Link>
      <Button variant="outlined" color="primary" onClick={onClickClose}>
        <Typography variant="h6">닫기</Typography>
      </Button>
    </Box>
  );
};

export default CheersCompletedModal;
