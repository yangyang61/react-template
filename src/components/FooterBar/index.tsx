import React, { FC } from "react";
import { NavBar, TabBar } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { withRouter } from "@/utils/withRouter";
import styles from "./index.module.scss";
import SvgIcon from "../SvgIcon";

const FooterBar = () => {
  const [activeKey, setActiveKey] = useState("/field/home");
  const [hideTab, sethideTab] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const tabs = [
    {
      key: "/home",
      title: "Home",
      icon: (active: boolean) => (
        <SvgIcon
          className={styles.barIcon}
          name={active ? "calendar-active" : "calendar"}
        />
      ),
    },

    {
      key: "/about",
      title: "About",
      icon: (active: boolean) => (
        <SvgIcon
          className={styles.barIcon}
          name={active ? "echart-active" : "echart"}
          color={active ? "#2A4948" : "#E4E4E4"}
        />
      ),
    },
  ];

  const onChange = (val: string) => {
    setActiveKey(val);
    navigate(`${val}`);
  };

  useEffect(() => {
    setActiveKey(pathname);
    sethideTab(!tabs.map((item) => item.key).includes(pathname));
  }, [pathname]);

  return (
    <div
      style={{ display: hideTab ? "none" : "block", maxWidth: "750px" }}
      className={`${styles.FooterBar}`}>
      <TabBar
        activeKey={activeKey}
        onChange={onChange}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </TabBar>
    </div>
  );
};
export default withRouter(FooterBar);
