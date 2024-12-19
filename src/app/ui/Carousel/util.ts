type MessageStatus = "error" | "success";

export type MessageType = {
  text: string;
  status?: MessageStatus;
};

export type CtaMode = "submit" | "next" | "back";

export const getMessageColor = (messageStatus?: MessageStatus) => {
  switch (messageStatus) {
    case "error":
      return "text-red-500";
    case "success":
      return "text-green-500";
  }
  return "text-white";
};

export const getCtaText = (ctaMode: CtaMode) => {
  switch (ctaMode) {
    case "submit":
      return "Submit";
    case "next":
      return "Next";
    case "back":
      return "Back";
  }
};
