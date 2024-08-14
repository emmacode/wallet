import moment from "moment";

export const DateTimeFormat = (timestampString: string) => {
    const formattedDate = moment(timestampString).format("DD/MM/YY HH:mm a");

    if (formattedDate === "Invalid date") {
        return "Invalid timestamp";
    }

    return formattedDate;
};
