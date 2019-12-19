import React from 'react';
import SpecialInput from '../components/SpecialInput';
import {StyleSheet, View, Image, ScrollView, Text} from 'react-native';
import TouchableButton from '../components/TouchableButton';

class Login extends React.Component {
  static options(passProps) {
    return {
      topBar: {},
    };
  }
  constructor(props) {
    super(props);
  }
  focusNextField(nextField) {
    this[nextField].focus();
  }
  onLogIn = () => {
    if (!this.fullName.getText()) {
      this.fullName.focus();
      return null;
    }
    if (!this.email.getText()) {
      this.email.focus();
      return null;
    }
    if (!this.phone.getText()) {
      this.phone.focus();
      return null;
    }
    if (!this.username.getText()) {
      this.username.focus();
      return null;
    }
    if (!this.password.getText()) {
      this.password.focus();
      return null;
    }
    if (!this.confirmPassword.getText()) {
      this.confirmPassword.focus();
      return null;
    }
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 30, fontFamily: 'Roboto-Light'}}>
            ĐĂNG KÝ
          </Text>
        </View>
        <View style={{flex: 1, marginHorizontal: 15}}>
          <SpecialInput
            title="Tên người dùng"
            ref={ref => {
              this.fullName = ref;
            }}
            isRequired
            validateType="username"
            errorMessage={'Full name is invalid'}
            placeholder={'Full name'}
            onSubmitEditing={() => {
              this.focusNextField('email');
            }}
          />
          <SpecialInput
            title="Email"
            ref={ref => {
              this.email = ref;
            }}
            isRequired
            validateType="email"
            errorMessage={'Email is invalid'}
            placeholder={'Email'}
            onSubmitEditing={() => {
              this.focusNextField('phone');
            }}
          />
          <SpecialInput
            title="Số điện thoại"
            ref={ref => {
              this.phone = ref;
            }}
            isRequired
            validateType="phone"
            errorMessage={'Phone number is invalid'}
            placeholder={'Phone number'}
            onSubmitEditing={() => {
              this.focusNextField('username');
            }}
          />
          <SpecialInput
            title="Tên tài khoản"
            ref={ref => {
              this.username = ref;
            }}
            isRequired
            validateType="username"
            errorMessage={'Username is invalid'}
            placeholder={'User name'}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />
          <SpecialInput
            title="Mật khẩu"
            ref={ref => {
              this.password = ref;
            }}
            secureTextEntry
            isRequired
            validateType="password"
            errorMessage={'Password is invalid'}
            placeholder={'Password'}
            onSubmitEditing={() => {
              this.focusNextField('confirmPassword');
            }}
          />
          <SpecialInput
            title="Xác nhận mật khẩu"
            ref={ref => {
              this.confirmPassword = ref;
            }}
            secureTextEntry
            isRequired
            validateType="password"
            errorMessage={'Confirm password is invalid'}
            placeholder={'Confirm password'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableButton
            buttonTitle="Đăng nhập"
            onPress={this.onLogIn}
            isOutlineMode={true}
          />
          <TouchableButton buttonTitle="Đăng ký" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonContainer: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
  title: {fontSize: 30},
});
export default Login;
