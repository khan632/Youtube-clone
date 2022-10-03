// contain all content of current time

import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";

import React, { useState, useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {
  // useState help in to select the category from left side of sidebar
  const [selectedCategory, setSelectedCategory] = useState("New");

  // usestate help to select videos from api and render it on screen
  const [videos, setVideos] = useState([]);

  // rendering the fetched data from API on right side of screen
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
  
        <Typography
          className="copyright"
          varient="body2"
          sx={{ mt: 1.5, color: "#555" }}
        >
          Copyright @ 2022 My media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
  
      </Box>
    </Stack>
  );
};

export default Feed;
