import { foodMenuInterface } from "../DataStructure/FoodMenuInterface";

export const getMenu = async () => {
  try {
    const response = await fetch(
      "https://www.sodexo.fi/en/ruokalistat/output/weekly_json/80",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return (await response.json()) as foodMenuInterface;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
