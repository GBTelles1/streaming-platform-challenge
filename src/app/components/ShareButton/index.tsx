"use client";
import { Icons } from "@/app/icons";
import { Video } from "@/app/types";
import { CallToActionButton } from "../CallToActionButton";
// import { shareVideo } from "./actions/shareVideo";

type ShareButtonProps = {
  video: Video;
};

export const ShareButton = ({ video }: ShareButtonProps) => {
  const shareVideo = async (video: Video) => {
    const videoUrl = `http://localhost:3000/videoView/${video.id}`;
    await navigator.clipboard.writeText(videoUrl);
  };
  return (
    <CallToActionButton
      action={shareVideo}
      video={video}
      icon={<Icons.Share />}
      text={"Compartilhar"}
    />
  );
};
