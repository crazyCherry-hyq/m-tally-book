import userStyle from './user.module.scss'
import { Avatar, List } from "antd-mobile";
import { PayCircleOutline, SetOutline, UnorderedListOutline } from "antd-mobile-icons";

export default function User() {
  return <div>
    <div className={ userStyle.info }>
      <Avatar src='http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png' />
      <div className={ userStyle.username }>小黑</div>
      <div className={ userStyle.records }>
        <div>
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
      <List header=''>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          设置
        </List.Item>
      </List>
    </div>
  </div>
}
