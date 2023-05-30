import { useCallback, useEffect, useState } from 'react';

const LOCAL_JSON_PATH = './product-list.json';

export type Product = {
  img: string;
};

interface UseProduct {
  isLoading: boolean;
  productList: Product[] | undefined;
}

export const useProduct = (): UseProduct => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState<Product[] | undefined>();

  const fetchProductList = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch(LOCAL_JSON_PATH);
    const json = await res.json();

    if (Array.isArray(json) && json.length) {
      setProductList(json);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]);

  return {
    isLoading,
    productList,
  };
};
