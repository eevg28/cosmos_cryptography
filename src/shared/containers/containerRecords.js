import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openRecords as onOpenRecords,
  closeRecords as onCloseRecords,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenRecords: get(state, ['appState', 'isOpenRecords'], false),
  records: get(state, ['appState', 'records'], []),
});

const mapDispatchToProps = {
  onOpenRecords,
  onCloseRecords,  
}

export const withRecords = Component => connect(mapStateToProps, mapDispatchToProps)(Component)