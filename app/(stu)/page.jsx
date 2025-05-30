import React from "react";
import { Box, Typography, Button, Paper, Tooltip } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.5s",
          p: 2,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", color: "#3f51b5", my: "40px" }}
          >
            Unlock Your Potential with{" "}
            <span style={{ color: "#2196F3" }}>Expert Courses</span>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Learn the skills you need to succeed in today’s competitive world.
            From coding to business strategy, we’ve got everything to help you
            excel!
          </Typography>
          <Tooltip title="Go to courses">
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "50px",
                width: "300px",
                px: 4,
                py: 1.5,
              }}
            >
              Get Started Now
            </Button>
          </Tooltip>
        </Box>

        <Box>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: "bold", color: "#212121", m: 6 }}
          >
            Why Choose Our Courses?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                flex: "1 1 300px",
                maxWidth: 300,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ color: "#2196F3", fontWeight: "bold" }}
              >
                Expert Instructors
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Learn from professionals who have years of real-world
                experience.
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                flex: "1 1 300px",
                maxWidth: 300,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ color: "#2196F3", fontWeight: "bold" }}
              >
                Learn Anytime, Anywhere
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Access courses on-demand with complete flexibility in your
                schedule.
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                flex: "1 1 300px",
                maxWidth: 300,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ color: "#2196F3", fontWeight: "bold" }}
              >
                Certification of Completion
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Earn a certificate to showcase your expertise and boost your
                career.
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ mt: 8, width: "100%" }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#212121", mb: 4 }}
          >
            What Our Students Say
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                flex: "1 1 300px",
                maxWidth: 300,
              }}
            >
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ fontStyle: "italic", mb: 2 }}
              >
                "This platform has transformed my career. I can't recommend it
                enough!"
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                – Emily Clark
              </Typography>
            </Paper>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                flex: "1 1 300px",
                maxWidth: 300,
              }}
            >
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ fontStyle: "italic", mb: 2 }}
              >
                "The flexibility of learning at my own pace made a big
                difference for me."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                – David Foster
              </Typography>
            </Paper>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                flex: "1 1 300px",
                maxWidth: 300,
              }}
            >
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ fontStyle: "italic", mb: 2 }}
              >
                "Amazing instructors and a fantastic learning experience!"
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                – Rachel Green
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ width: "100%", mt: 8 }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              textAlign: "center",
              background: "linear-gradient(to right, #3f51b5, #2196F3)",
              color: "#fff",
              borderRadius: 2,
              mt: 4,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Join thousands of learners who are improving their skills and
              transforming their careers with us.
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                color: "#3f51b5",
                backgroundColor: "#fff",
                border: "1px solid #fff",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              Explore Courses
            </Button>
          </Paper>
        </Box>

        <Box
          component="footer"
          sx={{
            py: 2,
            textAlign: "center",
            color: "#757575",
            mt: 4,
            width: "100%",
          }}
        >
          &copy; 2024 EduCourses. All rights reserved.
        </Box>
      </Box>
    </div>
  );
}
