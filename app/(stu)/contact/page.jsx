import { Button, TextareaAutosize } from "@mui/material";
import { Flex, Heading, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center">
      <div className="w-[40%] ">
        <Flex direction="column" gap="2">
          <Heading className="text-center text-cyan-900" m="2" size="8">
            Send us a message
          </Heading>
          <div className="px-8 py-4 m-2 bg-cyan-50 rounded-2xl flex flex-col justify-center gap-2">
            <TextField.Root placeholder="Enter your name">
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
            <TextField.Root placeholder="Enter your email">
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
            <TextArea
              size="3"
              resize="vertical"
              radius="medium"
              placeholder="Write your message"
              style={{ height: "200px" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#155e75",
                color: "white",
                "&:hover": { backgroundColor: "#0e3e4e" },
              }}
            >
              Send Message
            </Button>
          </div>
        </Flex>
      </div>
    </div>
  );
}
