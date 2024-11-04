import Image from "next/image";
import styles from "./CarouselCard.module.css";
import Link from "next/link";

type CarouselCardProps = {
  thumbnailSource: string;
  categoryTitle: string;
  title: string;
  videoId: string;
};

export const CarouselCard = ({
  thumbnailSource,
  categoryTitle,
  title,
  videoId,
}: CarouselCardProps) => {
  const videoUrl = `/videoView/${videoId}`;

  return (
    <Link href={videoUrl} className={styles.card}>
      <div className={styles.thumbnail}>
        <Image
          height={454}
          width={290}
          src={thumbnailSource}
          alt={title}
          style={{ objectFit: "cover", height: "454px", width: "290px" }}
        />

        {categoryTitle === "Ao vivo" && (
          <div className={styles.liveBadge}>Ao vivo</div>
        )}
      </div>

      <div className={styles.categoryTitle}>{categoryTitle}</div>

      <div>{title}</div>
    </Link>
  );
};
