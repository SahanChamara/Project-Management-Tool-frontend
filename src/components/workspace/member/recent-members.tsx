import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarColor } from "@/lib/helper";

const RecentMembers = () => {
  const members = [
    {
        name: "Nimal Perera",
        role: "Member",
        joinedDate: "December 20, 2024",
        avatar: "/avatars/nimal.png",
        initials: "NP",
      },
      {
        name: "Kavindi Jayasinghe",
        role: "Admin",
        joinedDate: "December 18, 2024",
        avatar: "/avatars/kavindi.png",
        initials: "KJ",
      },
      {
        name: "Sachin Fernando",
        role: "Member",
        joinedDate: "December 17, 2024",
        avatar: "/avatars/sachin.png",
        initials: "SF",
      },
      {
        name: "Tharindu Silva",
        role: "Owner",
        joinedDate: "December 15, 2024",
        avatar: "/avatars/tharindu.png",
        initials: "TS",
      },
      {
        name: "Ishara Wickramasinghe",
        role: "Member",
        joinedDate: "December 12, 2024",
        avatar: "/avatars/ishara.png",
        initials: "IW",
      },
      {
        name: "Chamara Gunasekara",
        role: "Member",
        joinedDate: "December 10, 2024",
        avatar: "/avatars/chamara.png",
        initials: "CG",
      },
      {
        name: "Dilani Weeraratne",
        role: "Admin",
        joinedDate: "December 8, 2024",
        avatar: "/avatars/dilani.png",
        initials: "DW",
      },
      
  ];

  return (
    <div className="flex flex-col pt-2">
      <ul role="list" className="space-y-3">
        {members.map((member, index) => (
          <li
            key={index}
            role="listitem"
            className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <Avatar className="h-9 w-9 sm:flex">
                <AvatarImage src={member.avatar} alt="Avatar" />
                <AvatarFallback
                  className={`${getAvatarColor(member.initials)}`}
                >
                  {" "}
                  {member.initials}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Member Details */}
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>

            {/* Joined Date */}
            <div className="ml-auto text-sm text-gray-500">
              <p>Joined</p>
              <p>{member.joinedDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentMembers;
