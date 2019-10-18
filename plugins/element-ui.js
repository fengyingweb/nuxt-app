import Vue from 'vue'
import {Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Notification,
  Message,
  MessageBox} from 'element-ui'

console.log('BUILD_ENV: ', process.env.BUILD_ENV)
export default () => {
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
  
  Vue.use(Button)
    .use(Menu)
    .use(MenuItem)
    .use(MenuItemGroup)
    .use(Submenu)
}
