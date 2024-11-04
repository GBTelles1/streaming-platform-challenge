"use server";

import { updateVideo } from "@/app/actions";
import { Video } from "@/app/types";

export const likeVideo = async (video: Video) => {
  const updatedVideo = {
    ...video,
    likes: video.likes + 1,
  };

  await updateVideo(updatedVideo);
};
