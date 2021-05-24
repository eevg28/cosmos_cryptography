import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openDoc as onOpenDoc,
  closeDoc as onCloseDoc,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenDoc: get(state, ['appState', 'isOpenDoc'], false),
  doc: get(state, ['appState', 'doc'], null),
});

const mapDispatchToProps = {
  onOpenDoc,
  onCloseDoc,
}

export const withDoc = Component => connect(mapStateToProps, mapDispatchToProps)(Component)