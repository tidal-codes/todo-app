import Popover from "@/shared/ui/Popover";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import { useBanners } from "../../hooks/useBanners";
import { useAddNewProjectContext } from "../../contexts/NewProjectProvider";

const ChangeBanner = ({ children }) => {
  const { search, setSearch, doSearch, banners, isLoading } = useBanners();
  return (
    <Popover ButtonComponent={children}>
      <Box p={2}>
        <Box minWidth="350px" mb={2}>
          <Flex gap={2}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی تصاویر"
              onKeyDown={(e) => e.key === "Enter" && doSearch()}
              fontSize="xs"
            />
            <Button onClick={doSearch} isLoading={isLoading}>
              جستجو
            </Button>
          </Flex>
        </Box>
        <ImageView banners={banners} isLoading={isLoading} />
      </Box>
    </Popover>
  );
};

const ImageView = ({ banners, isLoading }) => {
  const skeletons = Array.from({ length: 6 });
  const { onBannerSelect } = useAddNewProjectContext();

  return (
    <Grid
      py={2}
      templateColumns="repeat(2, 1fr)"
      gap={2}
      maxHeight="300px"
      overflowY="auto"
    >
      {isLoading
        ? skeletons.map((_, index) => <Skeleton key={index} minH="60px" />)
        : banners?.map((banner, index) => (
            <Button
              h="80px"
              backgroundColor="transparent"
              p="0"
              onClick={() => onBannerSelect(banner.src.large)}
            >
              <Image
                rounded="xs"
                w="full"
                h="full"
                key={index}
                src={banner.src.small}
                alt={banner.alt || "banner image"}
              />
            </Button>
          ))}
    </Grid>
  );
};

export default ChangeBanner;
