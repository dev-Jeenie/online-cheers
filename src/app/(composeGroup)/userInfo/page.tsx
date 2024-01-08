import {
  Box,
  Button,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";

const Compose = () => {
  return (
    <Box>
      <Typography variant="h1">어떤 이름으로 목표를 세울까요?</Typography>
      <Box>
        <Typography variant="caption1">닉네임</Typography>
        <TextField id="nickname" type="text" placeHolder="닉네임" />
      </Box>
      <Box>
        <Typography variant="caption1">이메일(선택)</Typography>
        <TextField
          id="email"
          type="email"
          placeHolder="예시) onlinecheers@gmail.com"
        />
      </Box>
      <Button color="primary" block>
        <Typography variant="subtitle1">계정 만들기</Typography>
      </Button>
    </Box>
  );
};

export default Compose;
