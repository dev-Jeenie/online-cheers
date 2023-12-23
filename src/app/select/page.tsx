import {
  Box,
  Button,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";

const Select = () => {
  return (
    <Box>
      <Typography variant="h1">친구와 건배할 술을 골라보자</Typography>
      <TextField id="my_goal" type="text" placeHolder="술잔에 태그달기" />
      <Button>
        <Typography variant="subtitle1">친구에게 건배 보내기!</Typography>
      </Button>
    </Box>
  );
};

export default Select;
