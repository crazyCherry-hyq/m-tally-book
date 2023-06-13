import userStyle from './user.module.scss'
import { Avatar, List } from "antd-mobile";
import { HistogramOutline, SetOutline, UserSetOutline } from "antd-mobile-icons";

export default function User() {
  return <div className={ userStyle.container }>
    <div className={ userStyle.info }>
      <Avatar className={ userStyle.avatar } src='http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png' />
      <div className={ userStyle.username }>小黑</div>
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
        <List.Item prefix={<UserSetOutline />} onClick={() => {}}>
          用户信息修改
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          重置密码
        </List.Item>
        <List.Item prefix={<HistogramOutline />} onClick={() => {}}>
          关于我们
        </List.Item>
      </List>
      <div>退出登录</div>
    </div>
  </div>
}
