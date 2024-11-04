"use server";

import { Category } from "@/app/types";

export async function getCategoryById(categoryId: number) {
  const url = `http://127.0.0.1:3004/categories/${categoryId}`;

  const categoryResponse = await fetch(url, {
    next: { tags: [`category-${categoryId}`] },
  });

  const category: Category = await categoryResponse.json();

  return category;
}
