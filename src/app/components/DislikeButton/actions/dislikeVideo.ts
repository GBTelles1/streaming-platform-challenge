"use server";

import { updateVideo } from "@/app/actions";
import { Video } from "@/app/types";

export const dislikeVideo = async (video: Video) => {
  // Here should be the dislike logic
  // May be decrement video likes?
  await updateVideo(video);
};
