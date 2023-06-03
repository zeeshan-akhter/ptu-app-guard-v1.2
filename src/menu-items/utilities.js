// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  FormOutlined,
  UserSwitchOutlined,
  FullscreenExitOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FormOutlined,
  FullscreenExitOutlined,
  UserSwitchOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Forms',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'University member entry',
      type: 'item',
      url: '/universityMemberEntry',
      icon: icons.UserSwitchOutlined
    },
    {
      id: 'util-color',
      title: 'E-visitor entry',
      type: 'item',
      url: '/eVisitorEntry',
      icon: icons.FormOutlined
    },
    {
      id: 'util-shadow',
      title: 'Exit Form',
      type: 'item',
      url: '/exit',
      icon: icons. FullscreenExitOutlined
    }
  ]
};

export default utilities;
