import type { Project } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ListItem from "./ListItem";
import { Spinner, For } from "@chakra-ui/react";
import Collapsible from "@/shared/ui/collapsible";

const SidebarProjectsList = () => {
  const { data, isLoading } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => [] as Project[],
    enabled: false,
  });
  const { projectID } = useParams();

  return (
    <Collapsible>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <For each={data}>
          {(item) => (
            <ListItem
              id={item.id}
              title={item.title}
              active={item.id === projectID}
            />
          )}
        </For>
      )}
    </Collapsible>
  );
};

export default SidebarProjectsList;
