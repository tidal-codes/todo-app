import { Box, Flex } from "@chakra-ui/react";
import StatusOverview from "./StatusOverview";
import UpcomingDeadlines from "./UpcomingDeadlines";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  return (
    <Flex flexDir="column" gap={3}>
      <DashboardHeader />
      <StatusOverview />
      <Flex>
        <Box flex={2}>
          <UpcomingDeadlines />
        </Box>
        <Box flex={3}></Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
