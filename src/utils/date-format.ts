import moment from "moment";

export const DateTimeFormat = (timestampString: string) => {
  const timestampNumber = parseInt(timestampString, 10);

  if (isNaN(timestampNumber) || !isFinite(timestampNumber)) {
    return `Invalid timestamp`;
  } else {
    const formattedDate = moment(timestampNumber).format("DD/MM/YY HH:mm a");
    return `${formattedDate}`;
  }
};
