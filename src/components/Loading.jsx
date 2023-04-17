import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className=" flex h-screen text-center justify-center">
      <Loader color="indigo" size="lg" variant="bars" />;
    </div>
  );
};

export default Loading;
