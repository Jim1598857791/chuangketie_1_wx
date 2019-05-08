//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
     
    statusBarHeight: app.globalData.statusBarHeight,

    selectedItemId: "2",
    disp: "block",
    imgUrl: [{
        title: "我",
        url: "../../images/me.png"
      },
      {
        title: "父母",
        url: "../../images/parents.png",
      },
      {
        title: "祖辈",
        url: "../../images/ancestors.png",
      },
      {
        title: "伴侣",
        url: "../../images/partner.png"
      },
      {
        title: "熊孩子",
        url: "../../images/bad-kid.png"
      },
      {
        title: "背景",
        url: "../../images/background.png"
      },
      {
        title: "猪肉菜",
        url: "../../images/pork.png"
      },
      {
        title: "素菜",
        url: "../../images/vegetable.png"
      },
      {
        title: "大杂烩",
        url: "../../images/dazahui.png"
      },
      {
        title: "零食",
        url: "../../images/snacks.png"
      },
      {
        title: "挂件",
        url: "../../images/guajian.png"
      },

    ],
    details: [
      [{
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        },
        {
          title: "素材0",
          url: "../../images/0.png"
        }
      ],
      [{
          title: "素材1",
          url: "../../images/1.png"
        },
        {
          title: "素材1",
          url: "../../images/1.png"
        }
      ],
      [{
          title: "素材2",
          url: "../../images/2.png"
        },
        {
          title: "素材2",
          url: "../../images/2.png"
        }
      ],
      [{
          title: "素材3",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材4",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材5",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材6",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材7",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材8",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材9",
          url: "../../images/3.png"
        },

      ],
      [{
          title: "素材10",
          url: "../../images/3.png"
        },

      ],
      [{
        title: "素材11",
        url: "../../images/3.png"
      }, ],
    ]
  },
  
  showDetail: function(e) {
    this.setData({
      selectedItemId: e.currentTarget.dataset.idqw,
    });
   
    console.log(e.target.dataset.idqw);
  },
  show: function() {
    this.setData({
      disp: "block"
    })
  },
  // 点击遮罩层或conts时，遮罩层与conts被隐藏
  hide: function() {
    this.setData({
      disp: "none"
    })
  },
  navigate: function () {
    console.log("点击了自定义状态栏");
  }
})