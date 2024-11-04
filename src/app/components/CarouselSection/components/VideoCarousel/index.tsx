"use client";
import { Category, Video } from "@/app/types";
import { CustomButtonGroupAsArrows } from "./components/CustomButtonGroup";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Carousel from "react-multi-carousel";
import { CarouselSkeleton } from "../CarouselSkeleton";

const CarouselCard = dynamic(() =>
  import("./components/CarouselCard").then((mod) => mod.CarouselCard)
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 4,
    slidesToSlide: 3,
    partialVisibilityGutter: 20,
  },
  laptopL: {
    breakpoint: { max: 1400, min: 1240 },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 50,
  },
  laptopS: {
    breakpoint: { max: 1240, min: 768 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 768, min: 425 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 80,
  },
  mobileL: {
    breakpoint: { max: 425, min: 375 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
  mobileS: {
    breakpoint: { max: 375, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

type VideoWithCategory = Video & {
  videoCategory?: Category;
};

type VideoCarouselProps = {
  videoWithCategory: VideoWithCategory[];
};

export const VideoCarousel = ({ videoWithCategory }: VideoCarouselProps) => {
  return (
    <Suspense
      fallback={
        <div>
          <CarouselSkeleton />
        </div>
      }
    >
      <Carousel
        infinite
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroupAsArrows />}
        partialVisible
      >
        {videoWithCategory.map((video) => {
          return (
            <CarouselCard
              key={video.id}
              thumbnailSource={video.thumbnail}
              categoryTitle={video.videoCategory?.title || ""}
              title={video.title}
              videoId={video.id}
            />
          );
        })}
      </Carousel>
    </Suspense>
  );
};
