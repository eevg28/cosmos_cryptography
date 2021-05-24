import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openPusk as onOpenPusk,
  closePusk as onClosePusk,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenPusk: get(state, ['appState', 'isOpenPusk'], false),
});

const mapDispatchToProps = {
  onOpenPusk,
  onClosePusk,
}

export const withPusk = Component => connect(mapStateToProps, mapDispatchToProps)(Component)