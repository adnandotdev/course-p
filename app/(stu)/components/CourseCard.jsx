import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CourseCard() {
  return (
    <div className="m-4">
      <Card
        sx={{
          maxWidth: 345,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px) scale(1.05)",
            boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/javascript.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React & Django: Full Stack Development
          </Typography>
          <div className="flex justify-between">
            <span className="text-2xl text-cyan-800 font-bold">₹7777</span>
            <span className="line-through flex items-center">₹9999</span>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant=""
            size="small"
            sx={{
              width: "100%",
              padding: "8px", // adjust as needed
              color: "white",
              backgroundColor: "#155e75",
              "&:hover": { backgroundColor: "#0e3e4e" }, // Optional hover state
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
