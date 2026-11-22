// ==========================================
// User & Authentication Types
// ==========================================
export interface UserProfile {
  Name: string;
  Age?: number | string;
  Country?: string;
  Email: string;
  SomeThingExtra?: string;
  Contact?: string;
}

export interface UserState {
  updateUser: UserProfile | null;
  userEmail?: string;
  userContact?: string;
  userName?: string;
}

export interface SocialUserData {
  idToken?: string;
  serverAuthCode?: string;
  user?: {
    email: string;
    id: string;
    givenName: string;
    familyName: string;
    photo: string | null;
    name: string;
  };
}

export interface SocialState {
  userData: SocialUserData | null;
  isAuthenticated: boolean;
}

// ==========================================
// Theme Types
// ==========================================
export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  value: ThemeMode;
}

// ==========================================
// Cart & Product Types
// ==========================================
export interface ProductData {
  id: string | number;
  Name: string;
  Image?: string;
  price?: number;
  description?: string;
  category?: string;
}

export interface CartItem {
  data: ProductData;
  quantity: number;
  price: number;
}

export type CartState = CartItem[];

export interface ProductState {
  data: ProductData | null;
}

// ==========================================
// Redux Store Root Types
// ==========================================
export interface RootState {
  ThemeReducer: ThemeState;
  SocialReducer: SocialState;
  userSlice: UserState;
  CartSlice: CartState;
  ProductSlice?: ProductState;
}

// ==========================================
// Navigation Types
// ==========================================
export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  LogIn: undefined;
  Drawer: undefined;
};

export type BottomTabParamList = {
  Landing: undefined;
  'E-commerce': undefined;
  Social: undefined;
  Cart: undefined;
  'Doctor Online': undefined;
  'Fun & Earn': undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  'About Us': undefined;
  Contact: undefined;
  Pets: undefined;
  Settings: undefined;
  ServicesDetail: undefined;
  UpdateProfile: undefined;
  InnerPetScreen: undefined;
  InnerProduct: undefined;
};
