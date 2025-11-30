import { useQuery } from "@tanstack/react-query";
import { supabaseGetBannerImages } from "../api/BannerApi";
import { useEffect, useState } from "react";

export function useBanners() {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("landscape");
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["banners", searchQuery],
    queryFn: async () => await supabaseGetBannerImages(searchQuery),
    gcTime: 0,
    staleTime: 0,
  });

  const doSearch = () => {
    if (search.trim()) {
      setSearchQuery(search.trim());
      console.log(search.trim());
      refetch();
    }
  };

  return {
    search,
    setSearch,
    banners: data || [],
    isLoading,
    doSearch,
  };
}
