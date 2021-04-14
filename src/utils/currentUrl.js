export const currentCategoryId = (categoriesData, url) => {
  // console.log(categoriesData, "PPP");
  if (url.includes("all")) return "all";
  const resultCategory = categoriesData.filter((eachCategory) => {
    return url.includes(eachCategory.key);
  });

  return resultCategory.length > 0 ? resultCategory[0].id : null;
};

export const currentCategoryPath = (categoriesData, id) => {
  if (id === "all") return "all";
  else {
    const resultCategory = categoriesData.filter((eachCategory) => {
      return eachCategory.id === id;
    });
    // console.log(resultCategory, "???");
    return resultCategory[0].key;
  }
};
