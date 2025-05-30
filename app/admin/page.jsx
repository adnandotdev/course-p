import { Box, Container, Paper, Typography, Button } from "@mui/material";
import { Table } from "@radix-ui/themes";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ fontWeight: 900, mt: 4, ml: 4, color: "#3730a3" }}
      >
        Dashboard
      </Typography>
      <Typography variant="body1" color="gray" sx={{ ml: 4 }}>
        Welcome to your course management dashboard
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-4 px-10">
        <Paper
          elevation={3}
          sx={{
            p: 3,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.05)" },
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontWeight: "bold" }}
          >
            Total Courses
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            4
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.05)" },
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontWeight: "bold" }}
          >
            Total Students
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            17
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.05)" },
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontWeight: "bold" }}
          >
            Total Revenue
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            ₹68000
          </Typography>
        </Paper>
      </div>
      <div className="mt-8 mx-4">
        <div className="flex justify-between">
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Recent Courses
            </Typography>
            <Typography variant="body1">
              Here are your most recently added or updated courses.
            </Typography>
          </Box>
          <Box className="hidden lg:block">
            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "#3730a3" }}
            >
              Add Course +
            </Button>
          </Box>
        </div>
      </div>
      <div className="mx-5">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Course Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Number of Students</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Revenue</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>React Development</Table.RowHeaderCell>
              <Table.Cell>8</Table.Cell>
              <Table.Cell>₹19000</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Nextjs zero to 100</Table.RowHeaderCell>
              <Table.Cell>11</Table.Cell>
              <Table.Cell>₹30000</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Microservices in Java</Table.RowHeaderCell>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>₹11000</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
