"use stric"

import api from './apiService.js'

export const likeServiceVideo = {
  request: function (id) {
    return api.post('./video-like.php', id)
  },
}

export const dislikeServiceVideo = {
  request: function (id) {
    return api.post('./video-dislike.php', id)
  },
}

export const viewServiceVideo = {
  request: function (id) {
    return api.post('./video-view.php', id)
  },
}

export const downloadServiceVideo = {
  request: function (id) {
    return api.post('./video-download.php', id)
  },
}

export const videoServiceVideo = {
  request: function (id) {
    return api.post('./video-video.php', id)
  },
}

export const likeServiceRecord = {
  request: function (id) {
    return api.post('./record-like.php', id)
  },
}

export const dislikeServiceRecord = {
  request: function (id) {
    return api.post('./record-dislike.php', id)
  },
}

export const listenServiceRecord = {
  request: function (id) {
    return api.post('./record-listen.php', id)
  },
}

export const downloadServiceRecord = {
  request: function (id) {
    return api.post('./record-download.php', id)
  },
}

export const recordServiceRecord = {
  request: function (id) {
    return api.post('./record-record.php', id)
  },
}

export const putServiceIcq = {
  request: function (value) {
    return api.post('./icq-write.php', value)
  },
}

export const icqService = {
  request: function () {
    return api.post('./icq-get.php')
  },
}