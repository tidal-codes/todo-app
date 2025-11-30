import Avatar from "@/shared/ui/Avatar";
import {
  AvatarGroup,
  Box,
  Button,
  Center,
  Flex,
  For,
  Image,
  Link,
  Span,
  Text,
} from "@chakra-ui/react";
import { Pencil, Star, Link2 } from "lucide-react";

interface ProjectListItemProps {
  id: string;
  title: string;
  description: string;
  created_date: string;
  Members: {
    id: string;
    firstName: string;
    lastName: string;
    profile_pic: string;
  }[];
  banner: string;
  emoji: string;
}

const ProjectListItem = ({
  id,
  title,
  description,
  Members,
  icon,
  banner,
}: ProjectListItemProps) => {
  return (
    <Box border="1px solid" rounded="xs" overflow="hidden">
      <Box position="relative">
        <Box
          position="absolute"
          inset="0"
          zIndex="1"
          bgGradient="to-t"
          gradientFrom="blackAlpha.600"
          gradientTo="transparent"
        />
        <Flex
          position="absolute"
          bottom="0"
          w="full"
          p={3}
          zIndex="1"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex gap={2} alignItems="center">
            <Center
              as={Span}
              fontFamily="icon"
              color="white"
              rounded="xs"
              w={9}
              h={9}
              backgroundColor="whiteAlpha.300"
            >
              {icon}
            </Center>
            <Text fontSize="sm" color="white" truncate>
              {title}
            </Text>
          </Flex>
          <Flex gap={1}>
            <Button
              size="xs_icon"
              variant="icon"
              color="white"
              backgroundColor="whiteAlpha.300"
              rounded="xs"
            >
              <Star />
            </Button>
            <Button
              size="xs_icon"
              variant="icon"
              color="white"
              backgroundColor="whiteAlpha.300"
              rounded="xs"
            >
              <Link2 />
            </Button>
          </Flex>
        </Flex>
        <Image src={banner} maxHeight="118px" w="full" objectPosition="top" />
      </Box>

      <Box p={2}>
        <Text fontSize="xs" color="grey.600" mb={2}>
          {description}
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <AvatarGroup>
            <For each={Members}>
              {(member) => {
                return (
                  <Avatar size="2xs" src={member.profile_pic} name="tidal" />
                );
              }}
            </For>
          </AvatarGroup>
          <Button variant="icon" size="xs_icon">
            <Pencil />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectListItem;
