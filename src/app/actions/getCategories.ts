"use server";

import { Category } from "@/app/types";

export async function getCategories() {
  const url = "http://127.0.0.1:3004/categories";

  const categoriesResponse = await fetch(url, {
    next: { tags: ["categories"] },
  });

  const categories: Category[] = await categoriesResponse.json();

  // If there are no categories, return an empty list
  if (!categories) {
    return [];
  }

  return categories;
}
