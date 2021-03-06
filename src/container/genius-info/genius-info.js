import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { update } from '../../redux/user.redux';

@connect(
  state => state.user,
  { update }
)
class GeniusInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      title: '',
      desc: ''
    }
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  render() {
    const path = this.props.location.pathname;
    const redirectTo = this.props.redirectTo;
    return (
      <div>
        { redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
        <NavBar mode="dark">Genius info</NavBar>
        <AvatarSelector
          selectAvatar={(imgName) => {
            this.setState({
              avatar: imgName
            });
          }}
        ></AvatarSelector>
        <InputItem onChange={(v)=>this.onChange('title', v)}>
          Post
        </InputItem>
        <TextareaItem
          onChange={(v)=>this.onChange('desc', v)}
          title="Resume"
          rows={3}
          autoHeight
        />
        <Button
          onClick={()=>{
            this.props.update(this.state);
          }}
          type='primary'
        >Save</Button>
      </div>
    )
  }
}

export default GeniusInfo;
