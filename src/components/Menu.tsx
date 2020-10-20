import React from "react";
import { RequestInviteButton } from "./RequestInviteButton";
import { TopmenuItem } from "./TopmenuItem";
import { TOPMENU } from "../content";

type Props = {
  open: boolean;
  setOpen: Function;
};

export const Menu = ({ open, setOpen }: Props) => {
  if (window.innerWidth < 851) {
    if (!open) {
      return (
        <div onClick={() => setOpen(true)}>
          <img src="./icons/icon-hamburger.svg" alt="Open menu" />
        </div>
      );
    } else {
      return (
        <div onClick={() => setOpen(false)}>
          <img src="./icons/icon-close.svg" alt="Close menu" />
        </div>
      );
    }
  }
  return (
    <>
      <span className="desktopmenu">
        {TOPMENU.map((title, index) => (
          <TopmenuItem title={title} key={`topmenu-${index}`} />
        ))}
      </span>
      <div className="desktopmenu">
        <RequestInviteButton />
      </div>
    </>
  );
};
