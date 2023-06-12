import { Calendar } from "antd-mobile";
import billStyle from './bill.module.scss'
import { useEffect, useState } from "react";
import { getBillList } from "@/api/bill.js";
import { FaceRecognitionOutline } from "antd-mobile-icons";
import dayjs from "dayjs";

export default function Bill() {
  const defaultSingle = new Date()
  const [billList, setBillList] = useState([])
  const [date, setDate] = useState('')

  const getBillDetailList = (date, page = 1) => {
    getBillList({ date, page }).then(({ data }) => {
      setBillList(data.list)
    })
  }

  useEffect(() => {
    const now = new Date()
    const month = now.getMonth() + 1
    const date = `${now.getFullYear()}-${month < 10 ? `0${month}` : month}`
    getBillDetailList(date)
  }, [])
  return (
    <div className={ billStyle.billContainer }>
      <div className={ billStyle.calendar }>
        <Calendar
          selectionMode='single'
          defaultValue={defaultSingle}
          onChange={val => {
            const date = dayjs(val).format('YYYY-MM')
            getBillDetailList(date)
          }}
        />
      </div>
      { billList.map(item => (
        <div key={ `bill${item.date}`}  className={ billStyle.list }>
          <div className={ billStyle.top }>
            <div>{ dayjs(item.date).format('M月D日')} 周一</div>
            <div>支出 ￥155</div>
          </div>
          <div>
            { item.bills.map(detail => (
              <div key={ `detail${detail.id}`} className={ billStyle.detail }>
                <div className={ billStyle.left }>
                  <FaceRecognitionOutline className={ billStyle.icon } />
                  <div>
                    <div className={ billStyle.typeLabel }>{ detail.type_name }</div>
                    <div className={ billStyle.greyText }>{ detail.remark }</div>
                  </div>
                </div>
                <div>
                  <div>-￥{ detail.amount }</div>
                  <div className={ `${billStyle.greyText} ${billStyle.time}` }>{ dayjs(detail.bill_date).format('hh:mm')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )) }
    </div>
  )
}
