import axios from "axios";
import { useEffect, useState } from "react";

const fetchPaginatedItems = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/items/paginated/${page}`,
      {
        params: { limit },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens paginados:", error);
    return { items: [], totalPages: 0 };
  }
};

const usePaginatedItems = (initialPage = 1, limit = 10) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchPaginatedItems(currentPage, limit);
      setItems(data.items);
      setTotalPages(data.totalPages);
    };
    getItems();
  }, [currentPage, limit]);

  return { items, currentPage, totalPages, setCurrentPage };
};

export default usePaginatedItems;
