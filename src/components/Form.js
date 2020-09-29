import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';


const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        // if (requestType === 'post') {
        //     axios.post('http://127.0.0.1:8000/api/', {
        //         title: title,
        //         content: content})
        // } else if (requestType === 'put') {
        //     axios.put(`http://127.0.0.1:8000/api/${articleID}`, {
        //         title: title,
        //         content: content})
        // }

        switch(requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            default:
                console.log("Sorry, we are stupid");
        };
    }


    render() {
        return (
            <div>
                <Form onSubmitCapture={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID)}>
                    <FormItem label="Title">
                        <Input name='title' placeholder="Put a title here, please" />
                    </FormItem>
                    <FormItem label="Content">
                        <Input name='content' placeholder="Enter some content here, please" />
                    </FormItem>
                    <FormItem>
                         <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </FormItem>
                </Form>
            </div>
        );
    } 

}

export default CustomForm; 








// const FormLayoutDemo = () => {
//   const [form] = Form.useForm();
//   const [formLayout, setFormLayout] = useState('horizontal');

//   const onFormLayoutChange = ({ layout }) => {
//     setFormLayout(layout);
//   };

//   const formItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           labelCol: {
//             span: 4,
//           },
//           wrapperCol: {
//             span: 14,
//           },
//         }
//       : null;
//   const buttonItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           wrapperCol: {
//             span: 14,
//             offset: 4,
//           },
//         }
//       : null;
//   return (
//     <>
//       <Form
//         {...formItemLayout}
//         layout={formLayout}
//         form={form}
//         initialValues={{
//           layout: formLayout,
//         }}
//         onValuesChange={onFormLayoutChange}
//       >
//         <Form.Item label="Form Layout" name="layout">
//           <Radio.Group value={formLayout}>
//             <Radio.Button value="horizontal">Horizontal</Radio.Button>
//             <Radio.Button value="vertical">Vertical</Radio.Button>
//             <Radio.Button value="inline">Inline</Radio.Button>
//           </Radio.Group>
//         </Form.Item>
//         <Form.Item label="Field A">
//           <Input placeholder="input placeholder" />
//         </Form.Item>
//         <Form.Item label="Field B">
//           <Input placeholder="input placeholder" />
//         </Form.Item>
//         <Form.Item {...buttonItemLayout}>
//           <Button type="primary">Submit</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
