import { Avatar as BaseAvatar, AvatarGroup } from "@chakra-ui/react";

type AvatarProps = React.ComponentPropsWithoutRef<typeof BaseAvatar.Root> & {
  src?: string | null;
  fallbackComponent?: null | React.ReactNode | string;
  name?: string;
};

const Avatar = ({
  src,
  name,
  fallbackComponent = null,
  ...props
}: AvatarProps) => {
  return (
    <AvatarGroup>
      <BaseAvatar.Root {...props}>
        <BaseAvatar.Fallback name={name}>
          {fallbackComponent}
        </BaseAvatar.Fallback>
        {src && <BaseAvatar.Image src={src} />}
      </BaseAvatar.Root>
    </AvatarGroup>
  );
};

export default Avatar;
