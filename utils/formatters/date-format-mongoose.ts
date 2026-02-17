import moment from "moment";

const dateFormatMongoose = (date: Date) => {
  return moment(date).toISOString();
};
export default dateFormatMongoose;
