import { createActionTypesOf } from '../utils/helpers';

export const OPEN_PUSK = createActionTypesOf("OPEN_PUSK")
export const CLOSE_PUSK = createActionTypesOf("CLOSE_PUSK")

export const openPusk = () => ({
  type: OPEN_PUSK.REQUEST,
});

export const closePusk = () => ({
  type: CLOSE_PUSK.REQUEST,
});

export const OPEN_FILES = createActionTypesOf("OPEN_FILES")
export const CLOSE_FILES = createActionTypesOf("CLOSE_FILES")
export const OPEN_FILES_ITEM = createActionTypesOf("OPEN_FILES_ITEM")
export const CLOSE_FILES_ITEM = createActionTypesOf("CLOSE_FILES_ITEM")

export const openFiles = () => ({
  type: OPEN_FILES.REQUEST,
});

export const closeFiles = () => ({
  type: CLOSE_FILES.REQUEST,
});

export const openFile = (data) => ({
  type: OPEN_FILES_ITEM.REQUEST,
  payload: { data },
});

export const closeFile = () => ({
  type: CLOSE_FILES_ITEM.REQUEST,
});

export const OPEN_DOC = createActionTypesOf("OPEN_DOC")
export const CLOSE_DOC = createActionTypesOf("CLOSE_DOC")

export const openDoc = (data) => ({
  type: OPEN_DOC.REQUEST,
  payload: { data }
});

export const closeDoc = () => ({
  type: CLOSE_DOC.REQUEST,
});

export const OPEN_VIDEOS = createActionTypesOf("OPEN_VIDEOS")
export const CLOSE_VIDEOS = createActionTypesOf("CLOSE_VIDEOS")
export const OPEN_VIDEOS_ITEM = createActionTypesOf("OPEN_VIDEOS_ITEM")
export const CLOSE_VIDEOS_ITEM = createActionTypesOf("CLOSE_VIDEOS_ITEM")

export const openVideos = () => ({
  type: OPEN_VIDEOS.REQUEST,
});

export const closeVideos = () => ({
  type: CLOSE_VIDEOS.REQUEST,
});

export const openVideo = (data) => ({
  type: OPEN_VIDEOS_ITEM.REQUEST,
  payload: { data },
});

export const closeVideo = () => ({
  type: CLOSE_VIDEOS_ITEM.REQUEST,
});

export const OPEN_PLAYER = createActionTypesOf("OPEN_PLAYER")
export const CLOSE_PLAYER = createActionTypesOf("CLOSE_PLAYER")

export const openPlayer = (data) => ({
  type: OPEN_PLAYER.REQUEST,
  payload: { data }
});

export const closePlayer = () => ({
  type: CLOSE_PLAYER.REQUEST,
});

export const OPEN_RECORDS = createActionTypesOf("OPEN_RECORDS")
export const CLOSE_RECORDS = createActionTypesOf("CLOSE_RECORDS")

export const openRecords = () => ({
  type: OPEN_RECORDS.REQUEST,
});

export const closeRecords = () => ({
  type: CLOSE_RECORDS.REQUEST,
});

export const OPEN_RECORD = createActionTypesOf("OPEN_RECORD")
export const CLOSE_RECORD = createActionTypesOf("CLOSE_RECORD")

export const openRecord = (data) => ({
  type: OPEN_RECORD.REQUEST,
  payload: { data },
});

export const closeRecord = () => ({
  type: CLOSE_RECORD.REQUEST,
});

export const OPEN_CART = createActionTypesOf("OPEN_CART")
export const CLOSE_CART = createActionTypesOf("CLOSE_CART")

export const openCart = () => ({
  type: OPEN_CART.REQUEST,
});

export const closeCart = () => ({
  type: CLOSE_CART.REQUEST,
});

export const OPEN_ICQ = createActionTypesOf("OPEN_ICQ")
export const CLOSE_ICQ = createActionTypesOf("CLOSE_ICQ")

export const openIcq = () => ({
  type: OPEN_ICQ.REQUEST,
});

export const closeIcq = () => ({
  type: CLOSE_ICQ.REQUEST,
});

export const OPEN_PRIMARY_VIDEOS = createActionTypesOf("OPEN_PRIMARY_VIDEOS")
export const CLOSE_PRIMARY_VIDEOS = createActionTypesOf("CLOSE_PRIMARY_VIDEOS")

export const openPrimaryVideos = () => ({
  type: OPEN_PRIMARY_VIDEOS.REQUEST,
});

export const closePrimaryVideos = () => ({
  type: CLOSE_PRIMARY_VIDEOS.REQUEST,
});
