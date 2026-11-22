/// <reference types="nativewind/types" />

import 'lottie-react-native';
import 'react-native';

declare module 'react-native' {
  interface TextInputProps {
    className?: string;
    tw?: string;
  }
}

declare module 'lottie-react-native' {
  interface LottieViewProps {
    className?: string;
  }
}

declare module 'react-native-simple-bottom-sheet';
declare module 'react-native-video';

declare module 'firebase/auth' {
  export function getReactNativePersistence(storage: any): any;
}
