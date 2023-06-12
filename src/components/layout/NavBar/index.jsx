import './index.scss'
import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import { TabBar } from "antd-mobile";
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
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
