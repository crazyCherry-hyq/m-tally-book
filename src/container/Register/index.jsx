import { Button, Form, Image, Input } from "antd-mobile";
import { register } from "@/api/user.js";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import { useState } from "react";
import logo from '@/assets/image/logo.png'
import userStyle from '../User/user.module.scss'

export default function Register() {
  const [form] = Form.useForm()
  const navigator = useNavigate()
  const [visible, setVisible] = useState(false)
  const HandleSubmitForm = () => {
    const values = form.getFieldsValue()
    console.log(values)
    register(values).then(() => {
      navigator('/login')
    })
  }
  return <>
    <div className={ userStyle.logo }>
      <Image src={ logo } width={300} height={100} fit='contain' />
    </div>
    <Form
      style={{ marginTop: 40 }}
      mode='card'
      form={form}
      initialValues={{
        username: '',
        password: ''
      }}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary" size="large" onClick={ HandleSubmitForm }>sign up</Button>
      }
    >
      <Form.Item name="username" label="姓名" rules={[{ require: true, message: '姓名不能为空' }]}>
        <Input placeholder="请输入姓名"/>
      </Form.Item>
      <Form.Item name="password" label="密码" rules={[{ require: true, message: '密码不能为空' }]} extra={
        <div>
          {!visible ? (
            <EyeInvisibleOutline onClick={() => setVisible(true)} />
          ) : (
            <EyeOutline onClick={() => setVisible(false)} />
          )}
        </div>
      }>
        <Input type={visible ? 'text' : 'password'} placeholder="请输入密码"/>
      </Form.Item>
    </Form>
  </>
}
