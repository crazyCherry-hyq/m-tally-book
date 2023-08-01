import { Button, Form, ImageUploader, Input } from "antd-mobile";
import { useState } from "react";
import { editUserInfo, upload } from "@/api/user.js";
import { useNavigate } from "react-router-dom";
import { PictureOutline } from "antd-mobile-icons";

export default function EditUserInfo() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [fileList, setFileList] = useState([])
  const [avatar, setAvatar] = useState('')

  const handleUpload = (file) => {
    let formData = new FormData()
    formData.append('file', file)
    upload(formData).then(({ data }) => {
      setAvatar(data)
    })
    return { url: URL.createObjectURL(file) }
  }
  const HandleSubmitForm = (values) => {
    values.avatar = avatar
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
      onFinish={ HandleSubmitForm }
      footer={
        <Button className="text-pink-400" block type="submit" color="primary" size="large">保存</Button>
      }
    >
      <Form.Item label="头像" rules={[{ required: true }]}>
        <ImageUploader maxCount="1" value={ fileList } onChange={ setFileList } upload={ handleUpload }>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#999999',
            }}
          >
            <PictureOutline style={{ fontSize: 32 }} />
          </div>
        </ImageUploader>
      </Form.Item>
      <Form.Item name='signature' label='个性签名' rules={[{ required: true }]}>
        <Input placeholder='请输入签名' />
      </Form.Item>
    </Form>
  </>
}
