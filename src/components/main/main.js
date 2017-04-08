import mainTmpl from './main.tmpl.html';
import styles from './main.scss';


export default {
  templateUrl: mainTmpl,
  controller: function ($scope, $element, $attrs) {
    console.log("component controller")
  }
};
