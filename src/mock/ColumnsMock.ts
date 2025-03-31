export const columns = [
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "from", label: "From" },
    { key: "section", label: "Section" },
  ];


  export interface Lead {
    id: number;
    from: string;
    section: string;
    avatar?: string;
    Rekvizitlar: {
      id: number;
      full_name: string;
      phone_number: string;
      update: string;
    };
  }
  
  export const leads = [
    {
      id: 1,
      from: "Telegram",
      section: "Elementary",
      avatar: "E",
      Rekvizitlar: {
        id: 1,
        full_name: "Shoraximov Shamsiddin",
        phone_number: "99 811 11 11",
        update: "01.01.2024",
      },
    },
    {
      id: 2,
      from: "Instagram",
      section: "Pre - Inter",
      avatar: "https://source.unsplash.com/random/40x40",
      Rekvizitlar: {
        id: 2,
        full_name: "",
        phone_number: "",
        update: "01.01.2024",
      },
    },
    {
      id: 3,
      from: "other",
      section: "Beginer",
      avatar: "W",
      Rekvizitlar: {
        id: 3,
        full_name: "",
        phone_number: "",
        update: "01.01.2024",
      },
    },
    {
      id: 4,
      from: "other",
      section: "Pre - Inter",
      avatar: "S",
      Rekvizitlar: {
        id: 4,
        full_name: "",
        phone_number: "",
        update: "01.01.2024",
      },
    },
    {
      id: 5,
      from: "other",
      section: "Elementary",
      avatar: "D",
      Rekvizitlar: {
        id: 5,
        full_name: "",
        phone_number: "",
        update: "01.01.2024",
      },
    },
    {
      id: 6,
      from: "other",
      section: "Beginer",
      avatar: "E",
      Rekvizitlar: {
        id: 6,
        full_name: "",
        phone_number: "",
        update: "01.01.2024",
      },
    },
  ];
  
  export const groups = [
    {
      id: 1,
      name: "Ocean",
      course: "IT-Bootcamp",
      startDate: "01.07.2023",
      students: 12,
      room: "2-room",
      time: "09:00 - 11:00",
      days: "Mon, Tue, Wed, Thu, Fri",
      image: "https://source.unsplash.com/50x50/?ocean",
    },
    {
      id: 2,
      name: "Winners",
      course: "IT-Bootcamp",
      startDate: "02.23.2023",
      students: 12,
      room: "2-room",
      time: "09:00 - 11:00",
      days: "Mon, Tue, Wed, Thu, Fri",
      image: "",
    },
  ];
  
  export const columnsTeacher = [
    { key: "Rekvizitlar.full_name", label: "Full name" },
    { key: "Rekvizitlar.phone_number", label: "Phone number" },
    { key: "from", label: "Groups" },
    { key: "section", label: "Percent" },
  ];