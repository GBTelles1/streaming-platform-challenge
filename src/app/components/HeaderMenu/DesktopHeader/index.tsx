"use client";
import { Icons } from "@/app/icons";
import styles from "./DesktopHeader.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Category, Site } from "@/app/types";
import { getCategoriesWithSite } from "./actions/getCategoriesWithSite";

type CategoryWithSite = Category & {
  site?: Site;
};

export const DesktopHeader = () => {
  const [categories, setCategories] = useState<CategoryWithSite[]>();

  useEffect(() => {
    getCategoriesWithSite().then((categories) => setCategories(categories));
  }, []);

  return (
    <header className={styles.wrapper}>
      <Link href={"/"} className={styles.logo}>
        <div className={styles.rectangle}></div>
        <span>Logo</span>
      </Link>

      <ul className={styles.menu}>
        <li className={styles.submenu}>
          <a className={styles.submenuHeader} href="#">
            Categorias
            <i className={styles.arrow}></i>
          </a>

          <ul className={styles.submenuList}>
            {categories &&
              categories.map((category) => {
                const slug = category.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll(".", "");

                const url = `https://${
                  category.site?.domain || "#"
                }/app/${slug}`;

                return (
                  <li key={`${category.id}`}>
                    <a href={url} target="_blank">
                      {category.title}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>

        <li className={styles.submenu}>
          <a className={styles.submenuHeader} href="#">
            Assuntos
            <i className={styles.arrow}></i>
          </a>

          <ul className={styles.submenuList}>
            <li>
              <a href="#">Assunto 1</a>
            </li>
            <li>
              <a href="#">Assunto 2</a>
            </li>
            <li>
              <a href="#">Assunto 3</a>
            </li>
          </ul>
        </li>

        <li className={styles.submenu}>
          <a className={styles.submenuHeader} href="#">
            Outras páginas
            <i className={styles.arrow}></i>
          </a>

          <ul className={styles.submenuList}>
            <li>
              <a href="#">Página 1</a>
            </li>

            <li>
              <a href="#">Página 2</a>
            </li>

            <li>
              <a href="#">Página 3</a>
            </li>
          </ul>
        </li>

        <li className={styles.menuItem}>
          <a href="#">Minha Lista</a>
        </li>

        <li className={styles.menuItem}>
          <a href="#">Lives</a>
        </li>

        <li className={styles.menuItem}>
          <a href="#">Fórum</a>
        </li>
      </ul>

      <div className={styles.profileAndSearch}>
        <button className={styles.searchButton}>
          <Icons.Search />
        </button>
        <div className={styles.profile}>
          <Icons.Person />
        </div>
      </div>
    </header>
  );
};
