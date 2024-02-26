"use client";

import React, { ReactNode, MouseEventHandler, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const [like, setLike] = useState<number>(0);
  return (
    <button
      onClick={() => setLike(like + 1)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children} {like}
    </button>
  );
};

export default Button;
