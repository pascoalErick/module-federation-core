import React from "react";
import { cloneElement, ReactElement } from "react";

type ActiveLinkProps = {
  children: ReactElement;
  isActive: boolean;
};

export function ActiveLink({ children, isActive = false }: ActiveLinkProps) {
  return (
    <>
      {cloneElement(children, {
        color: isActive && "#dd6b20",
      })}
    </>
  );
}
