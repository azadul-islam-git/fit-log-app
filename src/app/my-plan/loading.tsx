import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="flex items-center gap-2 font-oswald text-4xl">
        Loading workouts{" "}
        <span className="loading loading-dots loading-lg relative top-3 text-lime-400"></span>
      </p>
    </div>
  );
};

export default loading;
