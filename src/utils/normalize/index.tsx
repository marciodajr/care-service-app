import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 5s's scale
const scaleX = SCREEN_WIDTH / 320;
const scaleY = SCREEN_HEIGHT / 568;

export function normalize(size: number, scale?: 'height') {
  const newSizeX = size * scaleX;
  const newSizeY = size * scaleY;
  if (Platform.OS === 'ios') {
    if (scale === 'height') {
      return Math.round(PixelRatio.roundToNearestPixel(newSizeY));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSizeX));
  } else {
    if (scale === 'height') {
      return Math.round(PixelRatio.roundToNearestPixel(newSizeY)) - 2;
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSizeX)) - 2;
  }
}
