import { Button, Form, Image, Input } from "antd-mobile";
import { getCaptcha, register } from "@/api/user.js";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import { useEffect, useState } from "react";
import logo from '@/assets/image/logo.png'
import userStyle from '../User/user.module.scss'

export default function Register() {
  const [form] = Form.useForm()
  const navigator = useNavigate()
  const [visible, setVisible] = useState(false)
  const [captchaSvg, setCaptchaSvg] = useState('')
  const HandleSubmitForm = () => {
    const values = form.getFieldsValue()
    console.log(values)
    register(values).then(() => {
      navigator('/login')
    })
  }
  useEffect(() => {
    getCaptcha().then(({ data }) => {
      setCaptchaSvg(data)
    })
  }, [])
  return <>
    <div className={ userStyle.logo }>
      <Image src={ logo } width={300} height={100} fit='contain' />
    </div>
    <Form
      style={{
        marginTop: 40,
        '--prefix-width': '80px' }}
      mode='card'
      form={form}
      initialValues={{
        username: '',
        password: '',
        code: ''
      }}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary" size="large" onClick={ HandleSubmitForm }>sign up</Button>
      }
    >
      <Form.Item name="username" label="用户名" rules={[{ require: true, message: '用户名不能为空' }]}>
        <Input placeholder="请输入用户名"/>
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
      <Form.Item name="code" label="验证码" extra={
        <svg style={{ width: '150px', height: '50px' }} dangerouslySetInnerHTML={{ __html: captchaSvg }} />
      }>
        <Input placeholder="请输入"/>
      </Form.Item>
    </Form>
  </>
}
