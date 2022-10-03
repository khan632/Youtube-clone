// contain all content of current time

import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

const SearchFeed = () => {
  // usestate help to select videos from api and render it on screen which we search on search bar
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams()

  // rendering the fetched data from API on right side of screen
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search result for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
        </Typography>

          <Videos videos={videos} />
  
    </Box>
  );
};

export default SearchFeed;
