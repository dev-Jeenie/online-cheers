import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "@nwaycorp/global-designsystem";
import Link from "next/link";
import { Fragment } from "react";

const Table = () => {
  return (
    <Fragment>
      <Box>
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
      </Box>
      <Modal open={false} onClose={() => {}}>
        <Typography variant="h1">친구에게 응원의 건배를 보냈어!</Typography>
        <Link href="/compose">
          <Button variant="solid" color="primary">
            <Typography variant="h6">나도 2024년 식탁 만들기</Typography>
          </Button>
        </Link>
        <Button>
          <Typography variant="h6">닫기</Typography>
        </Button>
      </Modal>
    </Fragment>
  );
};

export default Table;
