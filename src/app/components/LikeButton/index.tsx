import { Icons } from "@/app/icons";
import { Video } from "@/app/types";
import { CallToActionButton } from "../CallToActionButton";
import styles from "./LikeButton.module.css";
import { likeVideo } from "./actions/likeVideo";

type LikeButtonProps = {
  video: Video;
};

export const LikeButton = ({ video }: LikeButtonProps) => {
  return (
    <CallToActionButton
      action={likeVideo}
      video={video}
      icon={<Icons.Like />}
      text={"Gostei"}
      extraClassName={styles.like}
    />
  );
};
