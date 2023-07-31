import { Button, Form, ImageUploader, Input } from "antd-mobile";
import { useState } from "react";
import { editUserInfo, upload } from "@/api/user.js";
import { useNavigate } from "react-router-dom";

export default function EditUserInfo() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [fileList, setFileList] = useState([{
    url: ''
  }])

  const handleUpload = (file) => {
    console.log(file)
    let formData = new FormData()
    formData.append('file', file)
    upload(formData).then(() => {

    })
  }
  const HandleSubmitForm = () => {
    const values = form.getFieldsValue()
    editUserInfo(values).then(() => {
      navigate('/user')
    })
  }
  return <>
    <Form
      form={form}
      initialValues={{
        signature: '',
        avatar: ''
      }}
      layout='horizontal'
      mode='card'
      footer={
        <Button className="text-pink-400" block type="submit" color="primary" size="large" onClick={ HandleSubmitForm }>保存</Button>
      }
    >
      <Form.Item name='signature' label='个性签名' rules={[{ required: true }]}>
        <Input placeholder='请输入签名' />
      </Form.Item>
      <Form.Item label="头像">
        <ImageUploader value={ fileList } onChange={ setFileList } upload={ handleUpload } />
      </Form.Item>
    </Form>
  </>
}
