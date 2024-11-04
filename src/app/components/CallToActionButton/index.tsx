"use client";
import { Video } from "@/app/types";
import styles from "./CallToActionButton.module.css";
import { ReactElement } from "react";

type CallToActionButtonProps = {
  action: (video: Video) => Promise<void>;
  video: Video;
  icon: ReactElement;
  text: string;
  extraClassName?: string;
};

export const CallToActionButton = ({
  action,
  icon: Icon,
  text,
  video,
  extraClassName = "",
}: CallToActionButtonProps) => {
  return (
    <button
      className={`${styles.callToActionButton} ${extraClassName}`}
      onClick={() => action(video)}
    >
      {Icon}
      <strong>{text}</strong>
    </button>
  );
};
