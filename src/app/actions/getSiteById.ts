"use server";

import { Site } from "@/app/types";

export async function getSiteById(siteId: number) {
  const url = `http://127.0.0.1:3004/sites/${siteId}`;

  const sitesResponse = await fetch(url, {
    next: { tags: [`site-${siteId}`] },
  });

  const site: Site = await sitesResponse.json();

  return site;
}
