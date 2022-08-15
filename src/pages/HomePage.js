import React, { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const getFoodList = async () => {
    const result = await axios.get(
      "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=bhM3N8XOwK6frT4IkeI4xb7azkrVMYGt9CQLvwvZ"
    );
    console.log(result);
  };

  useEffect(() => {
    getFoodList();
  });

  return (
    <div>
      <p>Welcome to MyPlate</p>
    </div>
  );
};

export default HomePage;
