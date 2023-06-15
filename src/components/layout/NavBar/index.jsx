import './index.scss'
import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import { TabBar } from "antd-mobile";
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import routes from "@/router/index.js";

export default function NavBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [showNavBar, setShowNavBar] = useState(false)
  useEffect(() => {
    setShowNavBar(routes.find(item => item.path === pathname).shouldShowNavBar)
  }, [pathname])
  const changeTab = value => {
    navigate(value)
  }
  const tabs = [
    {
      key: '/',
      title: '主页',
      icon: <AppOutline />,
      badge: '0'
    }, {
      key: '/bill',
      title: '账单',
      icon: <UnorderedListOutline />,
      badge: '0'
    }, {
      key: '/user',
      title: '我的',
      icon: <UserOutline />,
      badge: '0'
    }
  ]
  if (!showNavBar) {
    return
  }
  return (
    <>
      <TabBar className="navbarBottom norem" activeKey={ pathname } onChange={ value => changeTab(value) }>
        {
          tabs.map(item => (
            <TabBar.Item key={ item.key} icon={item.icon} title={item.title} />
          ))
        }
      </TabBar>
    </>
  )
}
