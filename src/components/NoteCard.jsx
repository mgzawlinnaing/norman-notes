import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { green, purple, red, yellow } from "@mui/material/colors";

function NoteCard({ note, handleDelete }) {
  const cardBackground = (category) => {
    if (category === "work") return green[500];

    if (category === "money") return yellow[600];

    if (category === "todos") return purple[700];

    if (category === "reminders") return red[600];
  };

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor: cardBackground(note.category),
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
          sx={{
            "& .MuiCardHeader-subheader": {
              textTransform: "capitalize",
            },
          }}
        />
        <CardContent>
          <Typography variants="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
