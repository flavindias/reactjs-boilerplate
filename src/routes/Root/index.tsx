import React from "react";
import { Outlet } from "react-router-dom";
// import { useTranslation, Trans } from "react-i18next";
import { Sidebar } from "../../components/ui/Sidebar";
import i18n from '../../i18n';

const menu = {
  items: [
      {
          title: i18n.t('root.sidebar.dashboard.title'),
          icon: "home",
          onClick: () => {},
          active: true,
          to: "dashboard"
      },
      {
          title: i18n.t('root.sidebar.batteryOps.title'),
          icon: "user",
          onClick: () => {},
          active: false,
          to: "batteryOps"
      },
      {
          title: i18n.t('root.sidebar.alerts.title'),
          icon: "cog",
          onClick: () => {},
          active: false,
          to: "alerts"
      },
      {
          title: i18n.t('root.sidebar.serviceOrders.title'),
          icon: "sign-out-alt",
          onClick: () => {},
          active: false,
          to: "os"
      },
      {
        title: i18n.t('root.sidebar.software.title'),
        icon: "sign-out-alt",
        onClick: () => {},
        active: false,
        to: "software"
    },
    {
      title: i18n.t('root.sidebar.listsAndRegisters.title'),
      icon: "sign-out-alt",
      onClick: () => {},
      active: false,
      to: "lists"
  },
  ]
};

const logo = {
  src: "https://via.placeholder.com/150",
  alt: "Logo"
}
export const Root = () => {
    return (
      <>
        <Sidebar menu={menu} logo={logo} />
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }