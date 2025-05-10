import axios from "axios";
import { endpoints,rateApi } from "../endpoints";

export const ConvertUsdToNisApi = async () => {
  try {
    const response = await axios.get(`${endpoints.rate}`, {
      params: {
        from: "USD",
        to: "ILS",
        access_key: rateApi,
        amount: 1,
      },
    });


    const rate = response.data?.result;

    if (typeof rate !== "number") {
      throw new Error("Invalid or missing conversion rate");
    }

    return rate;
  } catch (error) {
    console.error("Error fetching USD to NIS rate:", error);
    throw error;
  }
};
