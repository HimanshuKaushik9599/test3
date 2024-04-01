import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faList,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mt-2">
      <div className="flex justify-evenly">
        {" "}
        <h1 className="text-red-500 font-bold">BookUsShow</h1>
        <div>
          <button className="text-white bg-black font-bold p-1 border rounded-md  ">
            <FontAwesomeIcon icon={faList} /> Categories
          </button>
          <input
            className=" w-64 border rounded-sm ml-2 h-9"
            placeholder=" Search"
          ></input>
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faHeart} /> Favourites
          </button>
          <button className="border p-1 rounded ml-2 ">Sign In</button>
        </div>
      </div>
      <div className="flex mt-2">
        <button className="ml-48">
          <FontAwesomeIcon icon={faLocationDot} /> Palwal,India{" "}
        </button>
        <div className="flex  list-none ml-36">
          <li className="p-1 mx-1">Live Shows</li>
          <li className="p-1 mx-3">Streams</li>
          <li className="p-1 mx-3">Movies</li>
          <li className="p-1 mx-3">Plays</li>
          <li className="p-1 mx-3">Events</li>
          <li className="p-1 mx-3">Sports</li>
          <li className="p-1 mx-3">Activites</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
