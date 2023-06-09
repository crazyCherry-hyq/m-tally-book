import { Button, Form, Input } from "antd-mobile";
import { login } from "@/api/user.js";

export default function Login() {
  const [form] = Form.useForm()
  const handleSubmitForm = () => {
    const values = form.getFieldsValue()
    console.log(values)
    login(values).then(() => {

    })
  }
  return <>
    <Form
      form={form}
      initialValues={{
        username: '',
        password: ''
      }}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary" size="large" onClick={ handleSubmitForm }>登录</Button>
      }
    >
      <Form.Item name="username" label="姓名" rules={[{ require: true, message: '用户名不能为空' }]}>
        <Input placeholder="请输入用户名"/>
      </Form.Item>
      <Form.Item name="password" label="密码" rules={[{ require: true, message: '密码不能为空' }]}>
        <Input type="password" placeholder="请输入密码"/>
      </Form.Item>
    </Form>
  </>
}
