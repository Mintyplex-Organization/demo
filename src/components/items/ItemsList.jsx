import React from "react";
import { listData } from "../data/data";
import HotItems from ".";
import { FaFilter, FaSearch } from "react-icons/fa";

function ItemsList() {
  return (
    <div className="mt-[40px]">
      <div className="flex flex-col gap-[30px]">

        {/* filter section */}

        <div className="flex justify-between w-full">
          <div className="flex gap-[5px] md:gap-[10px] mr-[5px]">
            <button className="flex items-center gap-[10px] p-[10px] rounded-[10px] bg-brand10 border-1px">
              <FaFilter />
              <p>Filter</p>
            </button>
            <select id="select" className="flex items-center gap-[10px] p-[10px] rounded-[10px] bg-brand10 text-sm block w-fit-content">
              <option selected> Sort by</option>
              <option value="LowToHigh">Price: Low to High</option>
              <option value="HighToLow">Price: High to Low</option>
              <option value="RareToCommon">Rarity: Rare to Common</option>
              <option value="CommonToRare">Rarity: Common to Rare</option>
            </select>
            <div className="hidden md:flex relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-cursor">
                <FaSearch />
              </div>
              <input type="search" id="search" className="bg-bg-dark border rounded-[10px] active:bg-bg-dark block pl-10 p-2.5  " placeholder="Search" required />
            </div>
          </div>
          <div>
            <button className="flex items-center gap-[10px] p-[10px] rounded-[10px] bg-brand10">
              <FaFilter />
              <p>Sweep</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] justify-items-center w-full">
          {listData.map((token) => (
            <HotItems token={token} key={token.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
