import { Icons } from "@/app/icons";
import { Video } from "@/app/types";
import { CallToActionButton } from "../CallToActionButton";
import { dislikeVideo } from "./actions/dislikeVideo";

type DislikeButtonProps = {
  video: Video;
};

export const DislikeButton = ({ video }: DislikeButtonProps) => {
  return (
    <CallToActionButton
      action={dislikeVideo}
      video={video}
      icon={<Icons.Dislike />}
      text={"Não é pra mim"}
    />
  );
};
