import { ReceiptOutline, ReceivePaymentOutline } from "antd-mobile-icons";
import homeStyle from './home.module.scss'
import { getTypeList } from "@/api/type.js";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/utils/formatCurrency.js";
import { getBillList } from "@/api/bill.js";
import dayjs from "dayjs";

export default function Home() {
  const incomeTotalAmount = 5555
  const [expenseBillTypeList, setExpenseBillTypeList] = useState([])
  const [incomeBillTypeList, setIncomeBillTypeList] = useState([])
  const [currentDate, setCurrentDate] = useState(dayjs(new Date()).format('YYYY-MM'))
  const getAllTypeList = () => {
    getTypeList().then(({ data }) => {
      setExpenseBillTypeList(data.expenseBillTypeList)
      setIncomeBillTypeList(data.incomeBillTypeList)
    })
  }

  const getALLBillList = () => {
    getBillList({ page: 1, date: currentDate }).then(({ data }) => {
      console.log(data)
    })
  }

  const changeDate = (isNext) => {
    if (isNext) {
      setCurrentDate(dayjs(currentDate).add(1, 'month').format('YYYY-MM'))
    } else {
      setCurrentDate(dayjs(currentDate).subtract(1, 'month').format('YYYY-MM'))
    }
  }

  useEffect(() => {
    getAllTypeList()
    getALLBillList()
  }, [])
  return (
    <div className={ homeStyle.pageContainer }>
      <div className={ homeStyle.topNavBar }>
        <span onClick={ () => changeDate(false) }>&lt;</span>
        { currentDate }
        <span onClick={ () => changeDate(true) }>&gt;</span>
      </div>
      <div className={ homeStyle.pageTitle }>支出 <b>{ formatCurrency(incomeTotalAmount) }</b></div>
      <div className={ homeStyle.list }>
        {expenseBillTypeList.map(item => (
          <div key={ item.id } className={ `${homeStyle.block} ${homeStyle[`typeId${item.id}`]}` }>
            <div className="title, text-center">{ item.name }</div>
            <div className={ homeStyle.icon }>
              <ReceivePaymentOutline />
            </div>
            <div className="text-center">￥155</div>
          </div>
        ))}
      </div>
      <div className={ homeStyle.pageTitle }>收入 <b>{ formatCurrency(incomeTotalAmount) }</b></div>
      <div className={ homeStyle.list }>
        {incomeBillTypeList.map(item => (
          <div key={ item.id } className={ `${homeStyle.block} ${homeStyle[`typeId${item.id}`]}` }>
            <div className="title text-center">{ item.name }</div>
            <div className={ homeStyle.icon }>
              <ReceiptOutline />
            </div>
            <div className="text-center">￥155</div>
          </div>
        ))}
      </div>
    </div>
  )
}
