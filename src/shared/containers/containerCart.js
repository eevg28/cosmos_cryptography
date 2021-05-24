import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openCart as onOpenCart,
  closeCart as onCloseCart,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenCart: get(state, ['appState', 'isOpenCart'], false),
});

const mapDispatchToProps = {
  onOpenCart,
  onCloseCart,
}

export const withCart = Component => connect(mapStateToProps, mapDispatchToProps)(Component)