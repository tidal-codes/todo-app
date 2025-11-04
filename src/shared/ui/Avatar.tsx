import { Avatar as BaseAvatar, AvatarGroup } from "@chakra-ui/react";

type AvatarProps = React.ComponentPropsWithoutRef<typeof BaseAvatar.Root> & {
  src: string | null;
  name: string;
};

const Avatar = ({ src, name, ...props }: AvatarProps) => {
  return (
    <AvatarGroup>
      <BaseAvatar.Root {...props}>
        <BaseAvatar.Fallback name={name} />
        {src && <BaseAvatar.Image src={src} />}
      </BaseAvatar.Root>
    </AvatarGroup>
  );
};

export default Avatar;
