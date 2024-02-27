import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(buddhistEra);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);

export const getClientTimeZone = () => {
  return dayjs.tz.guess();
};

export default dayjs;
