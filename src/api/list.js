export const _playlist = [
  { title: 'VICTIMIZED', subtitle: 'LINKIN PARK', time: '04:35', avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/5a/84/ef/5a84efde-05f5-f5ec-8361-a257840e2a1d/source/100x100bb.jpg', trackUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/b0/e0/64/mzm.ksiabelv.aac.p.m4a" },
  { title: 'IN MY REMAINS', subtitle: 'LINKIN PARK', time: '03:15', avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/5a/84/ef/5a84efde-05f5-f5ec-8361-a257840e2a1d/source/100x100bb.jpg', trackUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/25/10/9d/mzm.felxsmvi.aac.p.m4a" },
  { title: 'Transformers: Revenge of the Fallen (The Album)', subtitle: 'LINKIN PARK', time: '04:12', avatar: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/c8/57/17/c85717ad-ac07-6642-2384-33c7ac09c74d/source/100x100bb.jpg', trackUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/32/47/0e/mzm.qlfqustb.aac.p.m4a" },
  { title: 'Breaking the Habit', subtitle: 'LINKIN PARK', time: '02:12', avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/f7/81/cc/f781cc75-f0d3-52dd-da73-c56c53455195/source/100x100bb.jpg', trackUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/fe/c6/cb/mzm.ztrojixo.aac.p.m4a" },
  { title: 'Faint', subtitle: 'LINKIN PARK', time: '03:12', avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/f7/81/cc/f781cc75-f0d3-52dd-da73-c56c53455195/source/100x100bb.jpg', trackUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/16/1a/17/mzm.biyevgqf.aac.p.m4a" },
  { title: 'What I\'ve Done', subtitle: 'LINKIN PARK', time: '03:45', avatar: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/e1/f2/55/e1f25570-eb5c-4441-ae10-56f7136a6b43/source/100x100bb.jpg', trackUrl: "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/76/8f/13/mzm.flcghqtl.aac.p.m4a" }
]

export default {
  getList (cb) {
    setTimeout(() => cb(_playlist), 100)
  }
}
