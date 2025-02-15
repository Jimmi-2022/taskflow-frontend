export const generalSections = [
  {
    title: "Unread Messages",
    data: [
      {
        id: 1,
        name: "Sergio Rabada",
        message: "General: Hello!",
        time: "11:30",
        count: 2,
        avatar: "/actor-1.png",
      },
    ],
  },
  {
    title: "All Messages",
    data: [
      {
        id: 4,
        name: "Alex Smith",
        phone: "+1248-879-9849",
        message: "You: Hey Smith, How Are you!",
        time: "11:30",
        count: 0,
        avatar: "/actor-4.png",
      },
      {
        id: 5,
        name: "Project Chat",
        message: "Landing page revamp",
        time: "11:30",
        highlight: true,
        avatar: "/actor-5.png",
      },
      {
        id: 6,
        name: "Roberto Smith",
        phone: "+1248-879-9849",
        message: "You: Hey Smith, How Are you!",
        time: "11:30",
        count: 0,
        avatar: "/actor-1.png",
      },
      {
        id: 7,
        name: "Alex Jonson",
        phone: "+1248-879-9849",
        message: "You: Hey Smith, How Are you!",
        time: "11:30",
        count: 0,
        avatar: "/actor-2.png",
      },
      {
        id: 8,
        name: "Alex Smith",
        phone: "+1248-879-9849",
        message: "You: Hey Smith, How Are you!",
        time: "11:30",
        count: 0,
        avatar: "/actor-4.png",
      },
      {
        id: 9,
        name: "Roberto Smith",
        phone: "+1248-879-9849",
        message: "You: Hey Smith, How Are you!",
        time: "11:30",
        count: 0,
        avatar: "/actor-1.png",
      },
      {
        id: 10,
        name: "Alex Jonson",
        phone: "+1248-879-9849",
        message: "You: Hey Smith, How Are you!",
        time: "11:30",
        count: 0,
        avatar: "/actor-2.png",
      },
    ],
  },
];

export const projectSections = [
  {
    title: "Unread Messages",
    data: [
      {
        id: 3,
        name: "Project A",
        message: "Project: Update on progress",
        time: "10:15",
        count: 3,
        avatar: "/project-1.png",
      },
    ],
  },
  {
    title: "Group Chats",
    data: [
      {
        id: 5,
        name: "Development Team",
        message: "Team: Let’s finish the sprint!",
        time: "15:00",
        count: 1,
        avatar: "/project-3.png",
      },
      {
        id: 6,
        name: "Marketing Group",
        message: "Group: Campaign is live now!",
        time: "14:45",
        count: 0,
        avatar: "/project-2.png",
      },
    ],
  },
  {
    title: "All Messages",
    data: [
      {
        id: 4,
        name: "Project B",
        message: "Project: New tasks assigned",
        time: "14:00",
        count: 0,
        avatar: "/project-2.png",
      },
    ],
  },
];

export const messageSections = [
  { title: "Unread Messages", data: generalSections[0].data },
  { title: "All Messages", data: generalSections[1].data },
];
