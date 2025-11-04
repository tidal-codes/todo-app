import { supabaseSearchUser } from "@/app/api/usersApi";
import type { User } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

export function useUserSearch() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  const searchQuery = useQuery<User[], Error>({
    queryKey: ["searchUser", debouncedValue],
    queryFn: () => supabaseSearchUser(debouncedValue),
    enabled: false,
    staleTime: 0,
  });

  useEffect(() => {
    if (debouncedValue.trim()) {
      searchQuery.refetch();
    }
  }, [debouncedValue]);

  return {
    search,
    setSearch,
    users: searchQuery.data ?? [],
    isLoading: searchQuery.isLoading,
    isError: searchQuery.isError,
    refetch: searchQuery.refetch,
  };
}
