import {
  Box,
  Button,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";

const Compose = () => {
  return (
    <Box>
      <Typography variant="h1">내 목표를 작성해보자</Typography>
      <TextField id="my_goal" type="text" placeHolder="목표 작성하기!" />
      <Button block color="primary">
        <Typography variant="subtitle1">내 목표 공유하고 응원 받기</Typography>
      </Button>
    </Box>
  );
};

export default Compose;
