import React, { ChangeEvent } from "react";

interface DropDownprops {
  clientTheme: string;
  handleSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const DropDown: React.FC<DropDownprops> = ({
  clientTheme,
  handleSelect,
}) => {
  return (
    <div className="relative hidden lg:block">
      <select
        value={clientTheme}
        onChange={handleSelect}
        className="p-2 text-medium responsive-text"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};
