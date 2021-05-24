import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openPlayer as onOpenPlayer,
  closePlayer as onClosePlayer,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenPlayer: get(state, ['appState', 'isOpenPlayer'], false),
  player: get(state, ['appState', 'player'], null),
});

const mapDispatchToProps = {
  onOpenPlayer,
  onClosePlayer,
}

export const withPlayer = Component => connect(mapStateToProps, mapDispatchToProps)(Component)