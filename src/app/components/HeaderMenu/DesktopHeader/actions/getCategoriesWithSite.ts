"use server";

import { getCategories, getSites } from "@/app/actions";

export const getCategoriesWithSite = async () => {
  const categories = await getCategories();
  const sites = await getSites();

  const categoriesWithSite = categories.map((category) => {
    return {
      ...category,
      site: sites.find((site) => site.id === category.site_id.toString()),
    };
  });

  return categoriesWithSite;
};
