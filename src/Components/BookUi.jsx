import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function BookUi({
  author,
  publication,
  isbn,
  title,
  deleteButton,
  editButton,
}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "lightblue", width: "400px" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Title</b> - {title}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Author</b> - {author}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>ISBN</b> - {isbn}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Publication</b> - {publication}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {editButton}
        {deleteButton}
      </CardActions>
    </Card>
  );
}
