import React, { useState } from "react";
import reactLogo from "@assets/react.svg";
import HomeStyle from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import SvgIcon from "@/components/SvgIcon";
import { useIntl } from "react-intl";
import { Button } from "antd-mobile";
import { h5Copy } from "@/utils/util";
import HeaderNav from "@/components/HeaderNav";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const t = useIntl();
  const goAboutPage = () => {
    navigate("/about");
  };

  return (
    <div className={`${HomeStyle.home}`}>
      <HeaderNav border />
      <div className="flex p-2">
        <p>国际化</p>
        <p>{t.formatMessage({ id: "text_loading" })}</p>
        {/* <SvgIcon name="avatar" /> */}
      </div>
      <Button
        onClick={() => h5Copy("WDK")}
        color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Home;
