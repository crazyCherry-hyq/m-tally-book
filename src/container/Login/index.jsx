import { Button, Footer, Form, Image, Input } from "antd-mobile";
import { login } from "@/api/user.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import userStyle from "@/container/User/user.module.scss";
import logo from "@/assets/image/logo.png";
import { setToken } from "@/utils/auth.js";

export default function Login() {
  const [form] = Form.useForm()
  const navigator = useNavigate()
  const HandleSubmitForm = () => {
    const values = form.getFieldsValue()
    login(values).then(({ data }) => {
      setToken(data.token)
      navigator('/')
    })
  }
  return <>
    <div className={ userStyle.logo }>
      <Image src={ logo } width={300} height={100} fit='contain' />
    </div>
    <Form
      form={form}
      mode='card'
      initialValues={{
        username: '',
        password: ''
      }}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary" size="large" onClick={ HandleSubmitForm }>log in</Button>
      }
    >
      <Form.Item name="username" label="姓名" rules={[{ require: true, message: '用户名不能为空' }]}>
        <Input placeholder="请输入用户名"/>
      </Form.Item>
      <Form.Item name="password" label="密码" rules={[{ require: true, message: '密码不能为空' }]}>
        <Input type="password" placeholder="请输入密码"/>
      </Form.Item>
    </Form>
    <Footer content='v1.0.0'></Footer>
  </>
}
