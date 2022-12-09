function paginate(page, pageCount) {
  const limit = 10;
  const skip = page > 1 ? (page - 1) * limit : 0;
  const pages = Math.ceil(pageCount / limit);
  const currentPage = Number(page) || 1;

  return {
    limit,
    skip,
    pages,
    currentPage,
  };
}

module.exports = { paginate };
