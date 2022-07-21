import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useRound } from "../hooks/useRound";


export const getStocks = async () => {
    const actualDay = Timestamp.fromDate(new Date())
    const stocks = await getDoc(doc(db, "stocks", "data"));
    const dataDay = stocks.data().date.toDate();


    if (actualDay < dataDay) {
      console.log("si");

      const url1 = `https://api.twelvedata.com/time_series?symbol=SPX&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;
      const response1 = await fetch(url1);
      const result1 = await response1.json();
      const data1 = result1.values;
      const pricesSPX = data1.map((index) => ({
        x: index.datetime,
        y: [index.open, index.high, index.low, index.close].map(useRound),
      }));

      const url2 = `https://api.twelvedata.com/time_series?symbol=SPX&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;
      const response2 = await fetch(url2);
      const result2 = await response2.json();
      const data2 = result2.values;
      const pricesNDAQ = data2.map((index) => ({
        x: index.datetime,
        y: [index.open, index.high, index.low, index.close].map(useRound),
      }));

      const symbols = ["SPX", "NDAQ", "SIX", "SPY", "USD"];
      const stocks = [];
      for (const symbol of symbols) {
        const url3 = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=4f26cd4907b046838d42aa1d051e929f`;
        const response = await fetch(url3);
        const result = await response.json();
        stocks.push({
          symbol: result.symbol,
          name: result.name,
          close: result.close,
          changePercent: result.percent_change,
        });
      }

        const newData = {
            DATE: actualDay,
            SPX: pricesSPX,
            NDAQ: pricesNDAQ,
            ROW: stocks
        }

        console.log(newData);
        await updateDoc(doc(db, "stocks", "data"), newData);
    }

    const resp = await getDoc(doc(db, "stocks", "data"));

    return resp;
}

const getChartSPX = async () => {
    const url = `https://api.twelvedata.com/time_series?symbol=SPX&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.values;
    const prices = data.map((index) => ({
      x: index.datetime,
      y: [index.open, index.high, index.low, index.close].map(useRound),
    }));

    return prices;
}

const getChartNDAQ = async () => {
    const url = `https://api.twelvedata.com/time_series?symbol=NDAQ&interval=1day&apikey=4f26cd4907b046838d42aa1d051e929f`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.values;
    const prices = data.map((index) => ({
      x: index.datetime,
      y: [index.open, index.high, index.low, index.close].map(useRound),
    }));

    return prices;
}

const getDataRow = async () => {
    const symbols = ["SPX", "NDAQ", "SIX", "SPY", "USD"];
      const stocks = [];
      for (const symbol of symbols) {
        const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=4f26cd4907b046838d42aa1d051e929f`;
        const response = await fetch(url);
        const result = await response.json();
        stocks.push({
          symbol: result.symbol,
          name: result.name,
          close: result.close,
          changePercent: result.percent_change,
        });
      }
      return stocks;
}