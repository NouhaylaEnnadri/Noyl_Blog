import { getCategory } from "@/services";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

const Category = () => {
  const [postCategories, setPostCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    try {
      const result = await getCategory();
      setPostCategories(result);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <nav className="flex flex-wrap gap-4 justify-start   pb-2 text-xs">
      {postCategories.map(({ slug, name }) => (
        <Link
          key={slug}
          href={`/category/${slug}`}
          className="inline-block  px-2.5 py-1 text-xs font-medium text-base-content bg-secondary bg-opacity-30  border border-secondary rounded-md transition-colors duration-300 hover:bg-secondary"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Category;
