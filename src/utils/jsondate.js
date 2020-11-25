import { date2ms } from "./date2ms";

export const jsondate = (data, setData) => {
  let newData = [];
  let dataIndex = 0;
  data.forEach((row, index) => {
    if (row["Business Date"]) {
      newData.push(row);
    }
  });

  setData(newData);
};
