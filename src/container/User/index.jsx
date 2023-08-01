import userStyle from './user.module.scss'
import { Avatar, List } from "antd-mobile";
import { HistogramOutline, SetOutline, UserSetOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "@/api/user.js";
import { useEffect, useState } from "react";

export default function User() {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState()

  const fetchData = () => {
    getUserInfo().then(({ data }) => {
      setUserInfo(data)
    })
  }

  const handleTo = (value) => {
    navigate(value)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return <div className={ userStyle.container }>
    <div className={ userStyle.info }>
      <Avatar className={ userStyle.avatar } src={ `http://127.0.0.1:7001${userInfo?.avatar}`} />
      <div className={ userStyle.username }>{ userInfo?.username }</div>
      <div className={ userStyle.records }>
        <div className={ userStyle.item }>
          <div>29</div>
          <div>已连续记账</div>
        </div>
        <div>
          <div>162</div>
          <div>记账总天数</div>
        </div>
        <div>
          <div>422</div>
          <div>记账总笔数</div>
        </div>
      </div>
    </div>
    <div>
      <List className={ userStyle.setList } header=''>
        <List.Item prefix={<UserSetOutline />} onClick={ () => handleTo('/editUser') }>
          用户信息修改
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          重置密码
        </List.Item>
        <List.Item prefix={<HistogramOutline />} onClick={() => {}}>
          关于我们
        </List.Item>
      </List>
      <div className="text-center  mt-3">退出登录</div>
    </div>
  </div>
}
