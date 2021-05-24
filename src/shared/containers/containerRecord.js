import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openRecord as onOpenRecord,
  closeRecord as onCloseRecord,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenRecord: get(state, ['appState', 'isOpenRecord'], false),
  record: get(state, ['appState', 'record'], []),
});

const mapDispatchToProps = {
  onOpenRecord,
  onCloseRecord,  
}

export const withRecord = Component => connect(mapStateToProps, mapDispatchToProps)(Component)