import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

class UsersEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModel(e) {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  }

  hideModel() {
    this.setState({
      visible: false,
    });
  }

  okHandler() {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModel();
      }
    });
  }

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { name, email, website } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModel.bind(this)}>
          { children }
        </span>
        <Modal
          title="Edit User"
          visible={this.state.visible}
          onOk={this.okHandler.bind(this)}
          onCancel={this.hideModel.bind(this)}
        >
          <Form horizontal onSubmit={this.okHandler.bind(this)}>
            <Form.Item
              {...formItemLayout}
              label="Name"
            >
              {
                getFieldDecorator('name', {
                  initialValue: name,
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Email"
            >
              {
                getFieldDecorator('email', {
                  initialValue: email,
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Website"
            >
              {
                getFieldDecorator('website', {
                  initialValue: website,
                })(<Input />)
              }
            </Form.Item>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UsersEdit);
