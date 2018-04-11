export const chats = [
  { name: "John", text: "Vince, I want to fight the Undertaker" },
  { name: "Vince", text: "No, John. Undertaker retired last year" },
  { name: "John", text: "Ok then I'll go to Wrestlemania as a fan" },
  { name: "Vince", text: "Ok John, then get the front row seat" },
  { name: "Umpire", text: "Hey John, the Undertaker is backstage" },
  { name: "John", text: "Are you serious, ref ???" },
  { name: "Umpire", text: "Yesssss!!!" },
  { video: true }
];

export const addChat = (name, text) => chats.push({ name, text });
