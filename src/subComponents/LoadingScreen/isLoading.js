import React, { useState, useEffect } from "react";

const isLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);
};

export default isLoading;
