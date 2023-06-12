import { CheckShieldOutline } from "antd-mobile-icons";
import homeStyle from './index.module.scss'
import { getTypeList } from "@/api/type.js";
import { useEffect, useState } from "react";

export default function Home() {
  const incomeTotalAmount = 5555
  const [expenseBillTypeList, setExpenseBillTypeList] = useState([])
  const [incomeBillTypeList, setIncomeBillTypeList] = useState([])

  const getBillList = () => {
    getTypeList().then(({ data }) => {
      setExpenseBillTypeList(data.expenseBillTypeList)
      setIncomeBillTypeList(data.incomeBillTypeList)
    })
  }

  useEffect(() => {
    getBillList()
  }, [])
  return (
    <div>
      <div className={ homeStyle.pageTitle }>支出{ incomeTotalAmount }</div>
      <div className={ homeStyle.list }>
        {expenseBillTypeList.map(item => (
          <div key={ item.id } className={ `${homeStyle.block} ${homeStyle[`typeId${item.id}`]}` }>
            <div className="title">{ item.name }</div>
            <CheckShieldOutline />
            <div>￥155</div>
          </div>
        ))}
      </div>
      <div className={ homeStyle.pageTitle }>收入{ incomeTotalAmount }</div>
      <div className={ homeStyle.list }>
        {incomeBillTypeList.map(item => (
          <div key={ item.id } className={ `${homeStyle.block} ${homeStyle[`typeId${item.id}`]}` }>
            <div className="title">{ item.name }</div>
            <CheckShieldOutline />
            <div>￥155</div>
          </div>
        ))}
      </div>
    </div>
  )
}
