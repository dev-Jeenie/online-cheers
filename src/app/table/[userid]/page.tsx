import { Box, Button, Stack, Typography } from "@nwaycorp/global-designsystem";
import Link from "next/link";

const Table = () => {
  return (
    <Box>
      <Typography variant="h1">
        0x4c의 식탁이야. 친구의 목표를 응원해줘!
      </Typography>
      <Stack direction="row">
        <Link href="/select">
          <Button variant="solid" color="primary">
            건배로 친구의 목표 응원하러 가기
          </Button>
        </Link>
        <Link href="/compose">
          <Button variant="solid" color="primary">
            나도 올해의 식탁 만들기
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Table;
