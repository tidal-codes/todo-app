import { Box, For, Button, Spinner } from "@chakra-ui/react";
import Item from "./Item";
import Collapsible from "@/shared/ui/collapsible";
import { FolderKanban } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabaseGetProjects } from "@/features/api/tasksService";
import type { Project } from "@/shared/types";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const { data, isLoading } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: supabaseGetProjects,
  });

  const navigate = useNavigate();
  const { projectID } = useParams();

  return (
    <Box
      bg="background"
      width="200px"
      height="100vh"
      borderEnd="1px solid"
      borderColor="gray.200"
      px={3}
      py={5}
    >
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
              <Item
                id={item.id}
                title={item.title}
                active={item.id === projectID}
              />
            )}
          </For>
        )}
      </Collapsible>
    </Box>
  );
};

export default Sidebar;
