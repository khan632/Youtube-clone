// It contain details of particular channel

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  // state for updating channel details
  const [channelDetail, setChannelDetail] = useState(null);

  //state for updating channel videos
  const [videos, setVideos] = useState([]);

  // use for deep link drilling going inside of channel details
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    // fetching channel detail like logo and stats
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    // fetching channel videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,97,9,0.8718837876947654) 0%, rgba(123,110,36,0.8606793059020483) 27%, rgba(112,146,60,1) 51%, rgba(13,184,228,1) 91%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: '300px'
          }}
        />
          <ChannelCard channelDetail={channelDetail} marginTop= '-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '170px' } }} />
           <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
