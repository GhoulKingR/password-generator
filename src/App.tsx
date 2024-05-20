import { useState } from "react";
import { Slider } from "@mui/material";
import Checkbox from "./Checkbox";
import StrengthIndicator from "./StrengthIndicator";
import { generatePassword } from "./generatepassword";

function App() {
  const [password, setPassword] = useState("PTx1f5DaFX");
  const [charLength, setCharLength] = useState(10);
  const [strength, setStrength] = useState(2);
  const [options, setOptions] = useState([true, true, true, false]);

  function toggleOption(pos: number, val: boolean) {
    if (pos > -1 && pos < options.length) {
      const newOptions = [...options];
      newOptions[pos] = val;
      setOptions(newOptions);
    }
  }

  return (
    <div className="my-16 mx-4">
      <header className="text-base text-center text-[#817D92] mb-4 md:text-2xl">
        Password Generator
      </header>
      <main>
        <div className="cursor-pointer fill-[#A4FFAF] hover:fill-[#FFFFFF] max-w-[540px] mx-auto p-4 bg-[#24232C] text-[#E6E5EA] flex justify-between md:px-8 md:py-5">
          <div
            className={`text-2xl${password.length === 0 ? " opacity-25" : ""}`}
          >
            {password.length === 0 ? "P4$5W0rD!" : password}
          </div>
          <div className="flex items-center">
            <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
            </svg>
          </div>
        </div>

        <div className="max-w-[540px] mx-auto p-4 mt-4 bg-[#24232C] text-[#E6E5EA] md:p-8">
          <div className="flex justify-between items-center">
            <div className="text-base">Character Length</div>
            <div className="text-[#A4FFAF] text-2xl">{charLength}</div>
          </div>

          <Slider
            defaultValue={50}
            sx={{
              color: "#A4FFAF",
              outline: 0,
              "& .MuiSlider-rail": {
                borderRadius: "0",
                backgroundColor: "#18171F",
                height: "8px",
              },
              "& .MuiSlider-track": {
                height: "8px",
                borderRadius: "0",
              },
              "& .MuiSlider-thumb": {
                width: "28px",
                height: "28px",
                color: "#E6E5EA",
                boxShadow: "none",
                "&:focus, &.Mui-active": {
                  border: "2px solid #A4FFAF",
                  background: "#18171F",
                },
                "&:focus, &:hover, &.Mui-active": {
                  boxShadow: "none",
                  "@media (hover: none)": {
                    boxShadow: "none",
                  },
                },
                "&:before, &:after": {
                  boxShadow: "none",
                },
              },
            }}
            onChange={(_, val) => {
              if (typeof val === "number") {
                let result = Math.floor(val / 10) * 2;
                if (val % 10 >= 5) result += 1;
                setCharLength(result);
              }
            }}
          />

          <ul>
            <li>
              <Checkbox
                onChange={(val) => toggleOption(0, val)}
                checked={options[0]}
                text="Include Uppercase Letters"
              />
            </li>
            <li>
              <Checkbox
                onChange={(val) => toggleOption(1, val)}
                checked={options[1]}
                text="Include Lowercase Letters"
              />
            </li>
            <li>
              <Checkbox
                onChange={(val) => toggleOption(2, val)}
                checked={options[2]}
                text="Include Numbers"
              />
            </li>
            <li>
              <Checkbox
                onChange={(val) => toggleOption(3, val)}
                checked={options[3]}
                text="Include Symbols"
              />
            </li>
          </ul>

          <StrengthIndicator strength={strength} />

          <button
            onClick={() => {
              const { password, strength } = generatePassword(
                charLength,
                options[0],
                options[1],
                options[2],
                options[3]
              );
              setPassword(password);
              setStrength(strength);
            }}
            className="bg-[#A4FFAF] fill-[#24322C] hover:fill-[#A4FFAF] text-base w-full flex justify-center py-[18px] text-[#24232C] items-center hover:bg-transparent border-2 border-[#A4FFAF] hover:text-[#A4FFAF]"
          >
            GENERATE{" "}
            <svg
              className="ml-4"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
