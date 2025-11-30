import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import { ChartPie } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface StatusCardProps {
  title: string;
  value: string;
  icon: React.ReactElement;
  description: string;
}

const StatusCard = ({ title, value, icon }: StatusCardProps) => {
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowData(true);
    }, 3000);
  }, []);
  return (
    <Box
      bg="white"
      borderRadius="sm"
      border="1px solid"
      p={2}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Flex align="center" justify="space-between">
        <Text fontSize="sm">{title}</Text>
        <Text>{icon}</Text>
      </Flex>
      {showData ? (
        <Text fontSize="xl" lineHeight="1">
          {value}
        </Text>
      ) : (
        <Skeleton width="55px" height="20px" variant="shine" />
      )}
    </Box>
  );
};

export default StatusCard;
