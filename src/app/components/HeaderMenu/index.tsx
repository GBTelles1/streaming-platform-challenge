"use client";
import { useWindowDimensions } from "@/app/hooks";
import { DesktopHeader } from "./DesktopHeader";
import { MobileMenu } from "./MobileMenu";

export const HeaderMenu = () => {
  const { width } = useWindowDimensions();

  if (!width) {
    return <div style={{ height: "100px", width: "100%" }}></div>;
  }
  console.log({ width });

  if (width > 425) {
    return <DesktopHeader />;
  } else {
    return <MobileMenu />;
  }
};
