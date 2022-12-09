function updateRoute({ page, search }) {
  let newUrl;

  if (!search.length) {
    newUrl = `${window.location.origin}?page=${page}`;
  } else {
    newUrl = `${window.location.origin}?page=${page}&search=${search}`;
  }

  window.history.pushState("", "", newUrl);
}

function decodeSearch() {
  if (window.location.search.length) {
    const searchParams = new URLSearchParams(window.location.search);

    return {
      page: searchParams.get("page") || 1,
      search: searchParams.get("search") || "",
    };
  }

  return null;
}

export { updateRoute, decodeSearch };
