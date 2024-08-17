import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const BorderedButton = ({children, style}) => {
  return (
    <TouchableOpacity
      style={
        style
          ? {
              ...style,
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: 1,
            }
          : {
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: 1,
            }
      }>
      {children}
    </TouchableOpacity>
  );
};

export const GradiantButton = ({children, style}) => {
  return (
    <LinearGradient
      colors={['#70E1F5', '#FFD194']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={
        style
          ? {
              ...style,
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 20,
            }
          : {paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20}
      }>
      {children}
    </LinearGradient>
  );
};
