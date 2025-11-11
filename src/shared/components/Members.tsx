import { AvatarGroup, Button } from "@chakra-ui/react";
import Avatar from "../ui/Avatar";
import { Plus } from "lucide-react";
import { forwardRef } from "react";
import type { User } from "../types";

interface MembersViewProps {
  avatars: User[];
  size: "xs" | "sm" | "md";
  showAddIcon: boolean;
  limit: number;
}

export const Members = forwardRef<HTMLButtonElement, MembersViewProps>(
  ({ avatars, size, showAddIcon = true, limit = 5, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="rounded"
        size="fit"
        {...props} // propsی که از PopoverTrigger میان، بدن اینجا
      >
        <AvatarGroup>
          {showAddIcon && <Avatar fallbackComponent={<Plus />} size={size} />}
          {avatars.slice(0, limit).map((avatar, i) => (
            <Avatar
              key={i}
              src={avatar.profile_url}
              name={avatar.name}
              size={size}
            />
          ))}
          {avatars.length > limit && (
            <Avatar
              fallbackComponent={`${avatars.length - limit}`}
              size={size}
            />
          )}
        </AvatarGroup>
      </Button>
    );
  },
);
Members.displayName = "Members";
export default Members;
