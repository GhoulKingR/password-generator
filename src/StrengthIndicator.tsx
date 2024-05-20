import React from "react";

type Props = {
  strength: number;
};
function StrengthIndicator({ strength: level }: Props) {
  const text = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  const color = [
    "bg-[#F64A4A]",
    "bg-[#FB7C58]",
    "bg-[#F8CD65]",
    "bg-[#A4FFAF]",
  ];

  return (
    <div className="flex justify-between text-base items-center bg-[#18171F] px-4 py-3.5 my-4 md:py-5 md:px-8">
      <div className="text-[#817D92]">STRENGTH</div>
      <div className="flex">
        {text[level]}
        <div
          className={
            "ml-4 w-2.5 h-7 border-2 border-[#E6E5EA] " +
            (level >= 0 ? `border-none ${color[level]}` : "")
          }
        ></div>
        <div
          className={
            "ml-2 w-2.5 h-7 border-2 border-[#E6E5EA] " +
            (level >= 1 ? `border-none ${color[level]}` : "")
          }
        ></div>
        <div
          className={
            "ml-2 w-2.5 h-7 border-2 border-[#E6E5EA] " +
            (level >= 2 ? `border-none ${color[level]}` : "")
          }
        ></div>
        <div
          className={
            "ml-2 w-2.5 h-7 border-2 border-[#E6E5EA] " +
            (level >= 3 ? `border-none ${color[level]}` : "")
          }
        ></div>
      </div>
    </div>
  );
}

export default StrengthIndicator;
