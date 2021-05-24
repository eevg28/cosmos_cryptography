import { connect } from 'react-redux'
import get from 'lodash/get';

import {
  openVideos as onOpenVideos,
  closeVideos as onCloseVideos,
  openVideo as onOpenVideo,
  closeVideo as onCloseVideo,
} from '../../actions/appStateActions'

const mapStateToProps = (state) => ({
  isOpenVideos: get(state, ['appState', 'isOpenVideos'], false),
  videos: get(state, ['appState', 'videos'], []),
  openVideo: get(state, ['appState', 'openVideo'], null),
});

const mapDispatchToProps = {
  onOpenVideos,
  onCloseVideos,  
  onOpenVideo,
  onCloseVideo,
}

export const withVideos = Component => connect(mapStateToProps, mapDispatchToProps)(Component)