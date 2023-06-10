import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { green, orange, purple, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function Create() {
  const apiUrl = import.meta.env.VITE_SOME_KEY;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (!title) setTitleError(true);

    if (!details) setDetailsError(true);

    if (title && details) {
      fetch(apiUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          color="secondary"
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "block",
          }}
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          color="secondary"
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "block",
          }}
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormLabel sx={{ marginTop: "20px" }} component="legend">
          Note Category
        </FormLabel>
        <FormControl
          sx={{
            marginBottom: "20px",
            display: "block",
          }}
        >
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={
                <Radio
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={
                <Radio
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              }
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={
                <Radio
                  sx={{
                    color: red[800],
                    "&.Mui-checked": {
                      color: red[600],
                    },
                  }}
                />
              }
              label="Reminders"
            />

            <FormControlLabel
              value="word"
              control={
                <Radio
                  sx={{
                    color: green[800],
                    "&.Mui-checked": {
                      color: green[600],
                    },
                  }}
                />
              }
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
