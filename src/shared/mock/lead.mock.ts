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