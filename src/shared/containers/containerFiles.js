import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openFiles as onOpenFiles,
  closeFiles as onCloseFiles,
  openFile as onOpenFile,
  closeFile as onCloseFile,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenFiles: get(state, ['appState', 'isOpenFiles'], false),
  files: get(state, ['appState', 'files'], []),
  openFile: get(state, ['appState', 'openFile'], null),
});

const mapDispatchToProps = {
  onOpenFiles,
  onCloseFiles,  
  onOpenFile,
  onCloseFile,
}

export const withFiles = Component => connect(mapStateToProps, mapDispatchToProps)(Component)