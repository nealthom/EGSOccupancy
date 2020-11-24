import { date2ms } from "./date2ms";

export const jsondate = (data, setData) => {
  let newData = data;
  data.forEach((row, index) => {
    if (row["Business Date"]) {
      newData[index]["Business Date"] = date2ms(row["Business Date"]);

      setData(newData);
    }
  });

  setData(data);
};
