import { getCategories, getVideos } from "@/app/actions";
import styles from "./CarouselSection.module.css";
import { VideoCarousel } from "./components/VideoCarousel";

type CarouselSectionProps = {
  sectionTitle: string;
  extraClassName?: string;
  videoFilter?: "Over The Cast" | "Flow Experience 2021" | "Netshow.me Talks";
};

export const CarouselSection = async ({
  sectionTitle,
  extraClassName,
  videoFilter,
}: CarouselSectionProps) => {
  const videos = await getVideos();
  const categories = await getCategories();

  const videosWithCategoryTitle = videos.map((video) => {
    const videoCategory = categories.find((category) => {
      return category.id === String(video.category);
    });

    return {
      ...video,
      videoCategory,
    };
  });

  const filteredVideos = videoFilter
    ? videosWithCategoryTitle.filter((video) => {
        return video.videoCategory?.title === videoFilter;
      })
    : videosWithCategoryTitle;

  return (
    <section className={`${styles.carouselSection} ${extraClassName || ""}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        {sectionTitle === "Ao vivo" && <div className={styles.redCircle}></div>}
      </div>

      <VideoCarousel videoWithCategory={filteredVideos} />
    </section>
  );
};
