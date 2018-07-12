import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';

class BossInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      salary: '',
      desc: ''
    }
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  render() {
    return (
      <div>
        <NavBar mode="dark">Boss info</NavBar>
        <AvatarSelector
          selectAvatar={(imgName) => {
            this.setState({
              avatar: imgName
            });
          }}
        ></AvatarSelector>
        <InputItem onChange={(v)=>this.onChange('title', v)}>
          Title
        </InputItem>
        <InputItem onChange={(v)=>this.onChange('company', v)}>
          Company
        </InputItem>
        <InputItem onChange={(v)=>this.onChange('salary', v)}>
          Salary
        </InputItem>
        <TextareaItem
          onChange={(v)=>this.onChange('desc', v)}
          title="Description"
          rows={3}
          autoHeight
        />
        <Button type='primary'>Save</Button>
      </div>
    )
  }
}

export default BossInfo;
