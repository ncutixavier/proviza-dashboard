import React from "react";

const ListingCard = (props) => {
  return (
    <div>
      <div className="bg-violet-100 rounded-lg border-violet-200 border">
        <div className="flex justify-between items-center px-4 p-4 border-violet-200 border-b">
          <div className="text-2xl font-bold text-violet-700">
            {props.title}
          </div>
          <div className="">
            <button
              onClick={props.onAdd}
              type="button"
              className="text-white bg-violet-700 hover:bg-violet-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add
            </button>
          </div>
        </div>
        <div className="px-4 my-6 h-[65vh] overflow-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default ListingCard;
