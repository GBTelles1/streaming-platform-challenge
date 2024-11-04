"use client";
import { Icons } from "@/app/icons";
import styles from "./MobileMenu.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCategoriesWithSite } from "../DesktopHeader/actions/getCategoriesWithSite";
import { Category, Site } from "@/app/types";

type CategoryWithSite = Category & {
  site?: Site;
};

export const MobileMenu = () => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const sideMenuRef = useRef<HTMLElement>(null);

  const [categories, setCategories] = useState<CategoryWithSite[]>();

  useEffect(() => {
    getCategoriesWithSite().then((categories) => setCategories(categories));
  }, []);

  useEffect(() => {
    const mouseDownHandler = (event: MouseEvent) => {
      // Close sideMenu if click outside of it
      const closeSideMenu =
        event.target instanceof HTMLElement &&
        !sideMenuRef.current?.contains(event.target);

      if (closeSideMenu) {
        setShowSideMenu(false);
      }
    };

    document.addEventListener("mousedown", mouseDownHandler);

    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  return (
    <div className={styles.container} id="home">
      <header className={styles.mobileHeader}>
        <Icons.Stack
          width={32}
          height={32}
          onClick={() => setShowSideMenu(true)}
        />

        <Link href={"/"} className={styles.logo}>
          <div className={styles.rectangle}></div>
          <span>Logo</span>
        </Link>

        <div className={styles.profileAndSearch}>
          <button className={styles.searchButton}>
            <Icons.Search />
          </button>
          <div className={styles.profile}>
            <Icons.Person />
          </div>
        </div>
      </header>

      {showSideMenu && (
        <aside className={styles.sideMenu} ref={sideMenuRef}>
          <button
            className={styles.closeButton}
            onClick={() => setShowSideMenu(false)}
          >
            x
          </button>

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
        </aside>
      )}
    </div>
  );
};
