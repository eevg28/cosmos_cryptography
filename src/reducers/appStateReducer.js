import { createReducer } from '../utils/helpers';
import {
  OPEN_PUSK,
  CLOSE_PUSK,

  OPEN_VIDEOS,
  CLOSE_VIDEOS,
  OPEN_VIDEOS_ITEM,
  CLOSE_VIDEOS_ITEM,

  OPEN_PLAYER,
  CLOSE_PLAYER,

  OPEN_FILES,
  CLOSE_FILES,
  OPEN_FILES_ITEM,
  CLOSE_FILES_ITEM,

  OPEN_DOC,
  CLOSE_DOC,

  OPEN_RECORDS,
  CLOSE_RECORDS,
  OPEN_RECORD,
  CLOSE_RECORD,

  OPEN_CART,
  CLOSE_CART,
  OPEN_PRIMARY_VIDEOS,
  CLOSE_PRIMARY_VIDEOS,

  OPEN_ICQ,
  CLOSE_ICQ,
} from '../actions/appStateActions'

export const initialState = {
  isOpenPusk: false,

  isOpenVideos: false,
  videos: [
    {
      id: 0,
      name: "Videos",
      videos: [
        {
          id: 0,
          name: "#1 XYZ",
          url: "/videos/video-crop.mp4",
          dUrl: "/videos/video-full.mp4",
        },
      ],
    },
    {
      id: 1,
      name: "Home videos",
      videos: [],
    },
  ],
  openVideo: null,
  isOpenPlayer: false,
  player: null,

  isOpenFiles: false,
  files: [
    {
      id: 0,
      name: "Docs",
      type: "doc",
      data: [
        {
          id: 0,
          name: "copy Instruction 💡",
          url: "/docs/copy_instruction.docx",
          dUrl: "/docs/copy_instruction.docx",
        },
        {
          id: 1,
          name: "Instruction 💡",
          url: "/docs/instruction.doc",
          dUrl: "/docs/instruction.doc",
        },
      ],
    },
    {
      id: 1,
      name: "Pictures",
      type: "picture",
      data: [
        {
          id: 0,
          name: 0,
          url: "/img/loss1.jpg",
        },
        {
          id: 1,
          name: 1,
          url: "/img/loss2.jpg",
        },
        {
          id: 2,
          name: 2,
          url: "/img/loss3.jpg",
        },
        {
          id: 3,
          name: 3,
          url: "/img/loss4.jpg",
        },
        {
          id: 4,
          name: 4,
          url: "/img/loss5.jpg",
        },
      ],
    },
  ],
  openFile: null,
  isOpenDoc: false,
  doc: null,

  isOpenRecords: false,
  records: [
    {
      id: 0,
      name: "#1 EXANTE",
      url: "/audios/a1.mp3",
      dUrl: "/audios/a1.mp3",
    },
    {
      id: 1,
      name: "#2 #2 НƎEXANTE",
      url: "/audios/a2.mp3",
      dUrl: "/audios/a2.mp3",
    },
    {
      id: 2,
      name: "#3 waik up now))",
      url: "/audios/a3.mp3",
      dUrl: "/audios/a3.mp3",
    },
    {
      id: 3,
      name: "#4 proebalsia 😇",
      url: "/audios/a4.mp3",
      dUrl: "/audios/a4.mp3",
    },
    {
      id: 6,
      name: "#5 shtas kowka",
      url: "/audios/a5.mp3",
      dUrl: "/audios/a5.mp3",
    },
    {
      id: 7,
      name: "#6",
      url: "/audios/a6.mp3",
      dUrl: "/audios/a6.mp3",
    },
    {
      id: 8,
      name: "#7 gribniaki",
      url: "/audios/a7.mp3",
      dUrl: "/audios/a7.mp3",
    },
    {
      id: 9,
      name: "#7 kiberbezopasnost",
      url: "/audios/a71.mp3",
      dUrl: "/audios/a71.mp3",
    },
    {
      id: 10,
      name: "#8 kibernalogi",
      url: "/audios/a8.mp3",
      dUrl: "/audios/a8.mp3",
    },
    {
      id: 11,
      name: "#8 b2b",
      url: "/audios/a81.mp3",
      dUrl: "/audios/a81.mp3",
    },
    {
      id: 12,
      name: "#9 planka vhoda",
      url: "/audios/a9.mp3",
      dUrl: "/audios/a9.mp3",
    },
    {
      id: 13,
      name: "#10 #hultak-to",
      url: "/audios/a10.mp3",
      dUrl: "/audios/a10.mp3",
    },
    {
      id: 14,
      name: "#11 pod kaefom na 25%",
      url: "/audios/a11.mp3",
      dUrl: "/audios/a11.mp3",
    },
    {
      id: 15,
      name: "#12 nazad v budushee",
      url: "/audios/a12.mp3",
      dUrl: "/audios/a12.mp3",
    },
    {
      id: 16,
      name: "#13 kiberpirats 🏴‍☠️",
      url: "/audios/a13.mp3",
      dUrl: "/audios/a13.mp3",
    },
    {
      id: 17,
      name: "#14 #vsepizdato",
      url: "/audios/a14.mp3",
      dUrl: "/audios/a14.mp3",
    },
    {
      id: 18,
      name: "#15 chehol na chehol",
      url: "/audios/a15.mp3",
      dUrl: "/audios/a15.mp3",
    },
    {
      id: 19,
      name: "#16 vsem po tesla",
      url: "/audios/a16.mp3",
      dUrl: "/audios/a16.mp3",
    },
    {
      id: 20,
      name: "#17 avtorskoe pravo",
      url: "/audios/a17.mp3",
      dUrl: "/audios/a17.mp3",
    },
    {
      id: 21,
      name: "#18 sherlock",
      url: "/audios/a18.mp3",
      dUrl: "/audios/a18.mp3",
    },
    {
      id: 22,
      name: "#19 win win",
      url: "/audios/a19.mp3",
      dUrl: "/audios/a19.mp3",
    },
    {
      id: 23,
      name: "#20 fud kosmosic",
      url: "/audios/a20.mp3",
      dUrl: "/audios/a20.mp3",
    },
    {
      id: 24,
      name: "#21 vkusno i bistro",
      url: "/audios/a21.mp3",
      dUrl: "/audios/a21.mp3",
    },
    {
      id: 25,
      name: "#22 sozdatel govna",
      url: "/audios/a22.mp3",
      dUrl: "/audios/a22.mp3",
    },
    {
      id: 26,
      name: "#23 kolibri",
      url: "/audios/a23.mp3",
      dUrl: "/audios/a23.mp3",
    },
  ],
  isOpenRecord: false,
  openRecord: null,

  isOpenCart: false,
  isShowPrimaryVideo: false,


  isOpenIcq: false,
  icqMessages: [{
    time: "22:11",
    text: "",
  }]
}

const appStateReducer = createReducer(initialState, {
  [OPEN_PUSK.REQUEST]: state => ({
    ...state,
    isOpenPusk: true
  }),
  [CLOSE_PUSK.REQUEST]: state => ({
    ...state,
    isOpenPusk: false,
  }),

  [OPEN_FILES.REQUEST]: state => ({
    ...state,
    isOpenFiles: true
  }),
  [CLOSE_FILES.REQUEST]: state => ({
    ...state,
    isOpenFiles: false,
  }),
  [OPEN_FILES_ITEM.REQUEST]: (state, { payload: { data } }) => ({
    ...state,
    openFile: { ...data }
  }),
  [CLOSE_FILES_ITEM.REQUEST]: state => ({
    ...state,
    openFile: null,
  }),

  [OPEN_DOC.REQUEST]: (state, { payload: { data } }) => ({
    ...state,
    isOpenDoc: true,
    doc: { ...data },
  }),
  [CLOSE_DOC.REQUEST]: state => ({
    ...state,
    isOpenDoc: false,
    doc: null,
  }),

  [OPEN_VIDEOS.REQUEST]: state => ({
    ...state,
    isOpenVideos: true
  }),
  [CLOSE_VIDEOS.REQUEST]: state => ({
    ...state,
    isOpenVideos: false,
  }),
  [OPEN_VIDEOS_ITEM.REQUEST]: (state, { payload: { data } }) => ({
    ...state,
    openVideo: { ...data }
  }),
  [CLOSE_VIDEOS_ITEM.REQUEST]: state => ({
    ...state,
    openVideo: null,
  }),

  [OPEN_PLAYER.REQUEST]: (state, { payload: { data } }) => ({
    ...state,
    isOpenPlayer: true,
    player: { ...data },
  }),
  [CLOSE_PLAYER.REQUEST]: state => ({
    ...state,
    isOpenPlayer: false,
    player: null,
  }),

  [OPEN_RECORDS.REQUEST]: state => ({
    ...state,
    isOpenRecords: true
  }),
  [CLOSE_RECORDS.REQUEST]: state => ({
    ...state,
    isOpenRecords: false,
  }),
  [OPEN_RECORD.REQUEST]: (state, { payload: { data } }) => ({
    ...state,
    isOpenRecord: true,
    record: { ...data },
  }),
  [CLOSE_RECORD.REQUEST]: state => ({
    ...state,
    isOpenRecord: false,
    record: null,
  }),

  [OPEN_CART.REQUEST]: state => ({
    ...state,
    isOpenCart: true
  }),
  [CLOSE_CART.REQUEST]: state => ({
    ...state,
    isOpenCart: false,
  }),

  [OPEN_ICQ.REQUEST]: state => ({
    ...state,
    isOpenIcq: true
  }),
  [CLOSE_ICQ.REQUEST]: state => ({
    ...state,
    isOpenIcq: false,
  }),

  [OPEN_PRIMARY_VIDEOS.REQUEST]: state => ({
    ...state,
    isShowPrimaryVideo: true
  }),
  [CLOSE_PRIMARY_VIDEOS.REQUEST]: state => ({
    ...state,
    isShowPrimaryVideo: false,
  }),
})

export default appStateReducer
