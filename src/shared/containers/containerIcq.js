import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openIcq as onOpenIcq,
  closeIcq as onCloseIcq,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenIcq: get(state, ['appState', 'isOpenIcq'], false),
  icqMessages: get(state, ['appState', 'icqMessages'], []),
});

const mapDispatchToProps = {
  onOpenIcq,
  onCloseIcq,
}

export const withIcq = Component => connect(mapStateToProps, mapDispatchToProps)(Component)