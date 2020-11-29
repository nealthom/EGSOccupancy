import { date2ms } from "./date2ms";

export const jsondate = (data, setData) => {
  let newData = [];
  let dataIndex = 0;
  data.forEach((row, index) => {
    if (row["Business Date"]) {
      row["Business Date"] = date2ms(row["Business Date"]);
      row.Hours = [];
      newData.push(row);
      if (newData.length > 0) {
        dataIndex++;
      }
    } else {
      newData[dataIndex - 1]["Hours"].push(row);
    }
  });

  setData(newData);
};
