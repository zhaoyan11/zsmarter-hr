/**
* basic element-ui components
* */

import {
  Pagination,
  Drawer,
  Input,
  Select,
  Option,
  OptionGroup,
  Button,
  Table,
  TableColumn,
  Form,
  FormItem,
  Backtop
} from 'element-ui';

const basicElementComponents = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Pagination);
    Vue.use(Drawer);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Backtop);
  }
};

export default basicElementComponents
