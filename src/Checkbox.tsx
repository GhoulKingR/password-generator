import { useState } from "react";
import CheckMark from "./assets/images/icon-check.svg";

type Props = {
  text: string;
  checked: boolean;
  onChange: (val: boolean) => void;
};
function Checkbox({ text, onChange, checked: checkedProp }: Props) {
  const [checked, setChecked] = useState(checkedProp || false);
  return (
    <div
      className="flex my-4 cursor-pointer"
      onClick={() => {
        const newC = !checked;
        setChecked(newC);
        onChange(newC);
      }}
    >
      <span
        className={
          "inline-block mr-5 w-5 h-5 flex items-center justify-center " +
          (checked
            ? "bg-[#A4FFAF]"
            : "border-2 border-[#E6E5EA] hover:border-[#A4FFAF]")
        }
      >
        {checked && <img src={CheckMark} alt="Check" />}
      </span>
      {text}
    </div>
  );
}

export default Checkbox;
