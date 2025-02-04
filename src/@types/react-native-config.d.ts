declare module "react-native-config" {
  export interface NativeConfig {
    ANDROID_CLIENT_ID: string;
    // IOS_CLIENT_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
