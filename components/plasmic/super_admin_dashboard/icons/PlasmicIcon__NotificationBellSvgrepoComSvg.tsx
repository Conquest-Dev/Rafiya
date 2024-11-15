// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationBellSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function NotificationBellSvgrepoComSvgIcon(
  props: NotificationBellSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 100.174c-27.619 0-50.087-22.468-50.087-50.087S228.381 0 256 0s50.087 22.468 50.087 50.087-22.468 50.087-50.087 50.087zm0-66.783c-9.196 0-16.696 7.5-16.696 16.696s7.5 16.696 16.696 16.696c9.196 0 16.696-7.5 16.696-16.696s-7.5-16.696-16.696-16.696z"
        }
        fill={"#fa0"}
      ></path>

      <path
        d={
          "M256.006 0v33.394c9.194.003 16.69 7.5 16.69 16.693s-7.496 16.69-16.69 16.693v33.394c27.618-.004 50.081-22.469 50.081-50.087S283.624.004 256.006 0z"
        }
        fill={"#f28d00"}
      ></path>

      <path
        d={
          "M256 512c-46.043 0-83.478-37.435-83.478-83.478 0-9.228 7.467-16.696 16.696-16.696h133.565c9.228 0 16.696 7.467 16.696 16.696C339.478 474.565 302.043 512 256 512z"
        }
        fill={"#fa0"}
      ></path>

      <path
        d={
          "M322.783 411.826h-66.777V512c46.042-.004 83.473-37.437 83.473-83.478-.001-9.229-7.468-16.696-16.696-16.696z"
        }
        fill={"#f28d00"}
      ></path>

      <path
        d={
          "M439.652 348.113v-97.678C439.642 149 357.435 66.793 256 66.783 154.565 66.793 72.358 149 72.348 250.435v97.678c-19.41 6.901-33.384 25.233-33.391 47.017.01 27.668 22.419 50.075 50.087 50.085h333.913c27.668-.01 50.077-22.417 50.087-50.085-.008-21.784-13.981-40.116-33.392-47.017z"
        }
        fill={"#ffda44"}
      ></path>

      <path
        d={
          "M439.652 348.113v-97.678C439.642 149 357.435 66.793 256 66.783v378.432h166.957c27.668-.01 50.077-22.417 50.087-50.085-.008-21.784-13.981-40.116-33.392-47.017z"
        }
        fill={"#fa0"}
      ></path>

      <path
        d={
          "M155.826 267.13c-9.228 0-16.696-7.467-16.696-16.696 0-47.022 28.011-89.283 71.381-107.641 8.446-3.587 18.294.326 21.88 8.836 3.62 8.51-.358 18.294-8.836 21.88-31.012 13.142-51.033 43.337-51.033 76.925 0 9.229-7.468 16.696-16.696 16.696z"
        }
        fill={"#fff3db"}
      ></path>
    </svg>
  );
}

export default NotificationBellSvgrepoComSvgIcon;
/* prettier-ignore-end */
