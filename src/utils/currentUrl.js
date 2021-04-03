import categoriesData from "../server/categories/index.get.json";

export const currentCategoryId = (url) => {
  if (url.includes("all")) return "all";
  const resultCategory = categoriesData.filter((eachCategory) => {
    return url.includes(eachCategory.key);
  });

  return resultCategory[0].id;
};

export const currentCategoryPath = (id) => {
  if (id === "all") return "all";
  else {
    const resultCategory = categoriesData.filter((eachCategory) => {
      return eachCategory.id === id;
    });
    // console.log(resultCategory, "???");
    return resultCategory[0].key;
  }
};
