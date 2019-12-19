import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class TouchableButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    const {onPress} = this.props;
    onPress && onPress();
  };

  render() {
    const {isOutlineMode} = this.props;

    let buttonStyle;
    let titleColor;
    if (isOutlineMode) {
      buttonStyle = {
        backgroundColor: 'transparent',
        borderColor: '#44B5C3',
        borderWidth: StyleSheet.hairlineWidth,
      };
      titleColor = 'black';
    } else {
      buttonStyle = {
        backgroundColor: '#44B5C3',
      };
      titleColor = 'white';
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, buttonStyle]}
          onPress={this.onPress}>
          <Text style={{color: titleColor}}>{this.props.buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

TouchableButton.defaultProps = {
  isOutlineMode: false,
};

TouchableButton.propTypes = {
  isOutlineMode: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingVertical: 35,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
});
