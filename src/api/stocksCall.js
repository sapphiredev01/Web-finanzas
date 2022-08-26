import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useRound } from "../hooks/useRound";

const getData = async () => {
  const resp = await getDoc(doc(db, "stocks", "data"));
  return resp.data();
};

export const getStocks = async () => {
  const actualDay = Timestamp.fromDate(new Date());
  const stocks = await getDoc(doc(db, "stocks", "data"));
  const dataDay = stocks.data().DATE.toDate();

  if (actualDay.toDate() > dataDay) {
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
      const response3 = await fetch(url3);
      const result3 = await response3.json();
      stocks.push({
        symbol: result3.symbol,
        name: result3.name,
        close: result3.close,
        changePercent: result3.percent_change,
      });
    }

    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);

    const newData = {
      DATE: newDate,
      SPX: pricesSPX,
      NDAQ: pricesNDAQ,
      ROW: stocks,
    };

    await updateDoc(doc(db, "stocks", "data"), newData);
  }

  return await getData();
};

export const getStocksRow = async () => {
  const actualDay = Timestamp.fromDate(new Date());
  const stocks = await getDoc(doc(db, "stocks", "data"));
  const dataDay = stocks.data().DATE1.toDate();

  if (actualDay.toDate() > dataDay) {
    const symbols = ["SPX", "NDAQ", "SIX", "SPY", "USD"];
    const stocks = [];
    for (const symbol of symbols) {
      const url3 = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=4f26cd4907b046838d42aa1d051e929f`;
      const response3 = await fetch(url3);
      const result3 = await response3.json();
      stocks.push({
        symbol: result3.symbol,
        name: result3.name,
        close: result3.close,
        changePercent: result3.percent_change,
      });
    }

    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);

    const newData = {
      DATE1: newDate,
      ROW: stocks,
    };

    console.log(newData);

    await updateDoc(doc(db, "stocks", "data"), newData);
  }

  return await getData();
};

export const getStocksSPX = async () => {
  const actualDay = Timestamp.fromDate(new Date());
  const stocks = await getDoc(doc(db, "stocks", "data"));
  const dataDay = stocks.data().DATE2.toDate();

  if (actualDay.toDate() > dataDay) {
    const url = `https://api.twelvedata.com/time_series?symbol=SPX&interval=1month&start_date=1980-01-01&apikey=4f26cd4907b046838d42aa1d051e929f`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.values;
    const pricesSPX = data.map((index) => ({
      x: index.datetime,
      y: [index.open, index.high, index.low, index.close].map(useRound),
    }));

    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);

    const newData = {
      DATE2: newDate,
      SPX: pricesSPX,
    };

    await updateDoc(doc(db, "stocks", "data"), newData);
  }

  return await getData();
};

export const getStocksNDAQ = async () => {
  const actualDay = Timestamp.fromDate(new Date());
  const stocks = await getDoc(doc(db, "stocks", "data"));
  const dataDay = stocks.data().DATE3.toDate();

  if (actualDay.toDate() > dataDay) {
    const url = `https://api.twelvedata.com/time_series?symbol=NDAQ&interval=1month&start_date=1980-01-01&apikey=4f26cd4907b046838d42aa1d051e929f`;
    const response = await fetch(url);
    const result = await response.json();
    const data = result.values;
    const pricesNDAQ = data.map((index) => ({
      x: index.datetime,
      y: [index.open, index.high, index.low, index.close].map(useRound),
    }));

   
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);

    const newData = {
      DATE3: newDate,
      NDAQ: pricesNDAQ
    };

    await updateDoc(doc(db, "stocks", "data"), newData);
  }

  return await getData();
};