import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  BasicModal  from "./Modal";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="Heading"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Heading
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">VIEW</Button>
        <Button  size="small">EDIT</Button>
      </CardActions>
    </Card>
  );
}