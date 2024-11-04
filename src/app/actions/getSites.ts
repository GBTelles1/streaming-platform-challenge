"use server";
import { Site } from "@/app/types";

export async function getSites() {
  const url = "http://127.0.0.1:3004/sites";

  const sitesResponse = await fetch(url, {
    next: { tags: ["sites"] },
  });

  const sites: Site[] = await sitesResponse.json();

  // If there are no sites, return an empty list
  if (!sites) {
    return [];
  }

  return sites;
}
