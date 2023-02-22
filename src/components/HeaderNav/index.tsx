import React, { FC } from "react";
import { NavBar, Ellipsis } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";
import { withRouter } from "@/utils/withRouter";
import styles from "./index.module.scss";
import SvgIcon from "../SvgIcon";
interface HeaderNavProps {
  onBack?: () => void;
  title?: any;
  renderRight?: any;
  renderLeft?: any;
  border?: any;
}
const HeaderNav = (props: HeaderNavProps) => {
  const {
    onBack,
    title,
    border = false,
    renderRight = (
      <SvgIcon
        className="icon"
        style={{ color: "#2A4948" }}
        name="nav-cancel"
      />
    ),
    renderLeft = (
      <SvgIcon
        style={{ color: "#2A4948", width: "30px", height: "56px" }}
        name="nav-left"
      />
    ),
  } = props;
  const navigator = useNavigate();

  const back = () => {
    if (onBack) return onBack();
    navigator(-1);
  };

  return (
    <div className={`${styles.HeaderNav}`}>
      <NavBar
        style={{
          "--height": "49px",
        }}
        left={renderLeft}
        right={renderRight}
        onBack={back}
        backArrow={<></>}
        className={`${border ? styles.border : ""}`}>
        {title || "渠道列表"}
      </NavBar>
    </div>
  );
};
export default HeaderNav;
