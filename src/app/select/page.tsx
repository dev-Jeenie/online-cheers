import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";

const Select = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h1">친구와 건배할 술 고르기!</Typography>
        <Stack direction="row">
          <Button>와인 이미지</Button>
          <Button>맥주 이미지</Button>
          <Button>소주 이미지</Button>
          <Button>막걸리 이미지</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">술잔에 태그 달기 🔖</Typography>
        <TextField
          id="my_goal"
          type="text"
          placeHolder="목표 멋지다 힘내! 곧 보자구 건배 🍻"
        />
      </Box>
      <Link href="/table/jeenie">
        <Button onClick={() => {}}>
          <Typography variant="subtitle1">친구에게 건배 보내기!</Typography>
        </Button>
      </Link>
    </Box>
  );
};

export default Select;
