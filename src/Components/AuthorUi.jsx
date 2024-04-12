import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function AuthorUi({
  name,
  biography,
  birhtday,
  deleteButton,
  editButton,
}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "lightblue", width: "750px" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Name-{name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          BioGraphy-{biography}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birthday-{birhtday}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {editButton}
        {deleteButton}
      </CardActions>
    </Card>
  );
}
