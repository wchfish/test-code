/**
 * Created by wangc on 2017/4/10.
 */
var menuData = {
  "menus":[
  {
    "text":"任务台",
    "id":"014",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"任务台",
        "id":"0026",
        "parentId":"014",
        "icon":"",
        "url":"workflow/jquery/userTaskPlatform.jsp",
        "handler":"menuItemClick"
      }
    ]
  },
  {
    "text":"2016年干部竞聘",
    "id":"028",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"我的干部竞聘",
        "id":"0123",
        "parentId":"028",
        "icon":"",
        "url":"CadersCompete/webViews/MyCadersCompeting/selfCenter.jsp",
        "handler":"menuItemClick"
      }
    ]
  },
  {
    "text":"新版月报",
    "id":"030",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"月度总结与计划",
        "id":"0132",
        "parentId":"030",
        "icon":"",
        "url":"monthlyReport/webViews/MonthlyFillReport.jsp",
        "handler":"menuItemClick"
      }
    ]
  },
  {
    "text":"工作日志",
    "id":"023",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"工作日志统计",
        "id":"975",
        "parentId":"023",
        "icon":"",
        "url":"logManage/webViews/gzLogTj/gzLogTj.jsp",
        "handler":"menuItemClick"
      },
      {
        "text":"我的日志（New）",
        "id":"0140",
        "parentId":"023",
        "icon":"",
        "url":"logManage/webViews/CalendarOfLog/CalendarLog.jsp",
        "handler":"menuItemClick"
      },
      {
        "text":"日志查询统计（New）",
        "id":"0101",
        "parentId":"023",
        "icon":"",
        "url":"logManage/webViews/logCxTj/logCxTj.jsp",
        "handler":"menuItemClick"
      }
    ]
  },
  {
    "text":"项目管理",
    "id":"001",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"查询与分析",
        "id":"008",
        "parentId":"001",
        "icon":"",
        "menu":[
          {
            "text":"项目台账查询",
            "id":"0103",
            "parentId":"008",
            "icon":"",
            "url":"projectManage/webViews/xmquery/projectQuery.jsp",
            "handler":"menuItemClick"
          },
          {
            "text":"项目阶段查询",
            "id":"0104",
            "parentId":"008",
            "icon":"",
            "url":"projectManage/webViews/xmjdcx/xmjdcx.jsp",
            "handler":"menuItemClick"
          },
          {
            "text":"项目分析",
            "id":"0108",
            "parentId":"008",
            "icon":"",
            "url":"projectManage/webViews/xmfx/projectAnalysis.jsp",
            "handler":"menuItemClick"
          }
        ]
      }
    ]
  },
  {
    "text":"知识库",
    "id":"019",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"知识库分类浏览",
        "id":"0068",
        "parentId":"019",
        "icon":"",
        "url":"repository/webViews/category.jsp",
        "handler":"menuItemClick"
      },
      {
        "text":"知识库整体浏览",
        "id":"0070",
        "parentId":"019",
        "icon":"",
        "url":"repository/webViews/overalview.jsp",
        "handler":"menuItemClick"
      }
    ]
  },
  {
    "text":"信息管理",
    "id":"022",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"信息维护",
        "id":"0999",
        "parentId":"022",
        "icon":"",
        "url":"infoManage/webViews/xxwh/xxwh.jsp",
        "handler":"menuItemClick"
      },
      {
        "text":"信息查询",
        "id":"0110",
        "parentId":"022",
        "icon":"",
        "url":"infoManage/webViews/xxcx/xxcx.jsp",
        "handler":"menuItemClick"
      }
    ]
  },
  {
    "text":"运维管理",
    "id":"024",
    "parentId":null,
    "icon":"",
    "menu":[
      {
        "text":"系统公告",
        "id":"011",
        "parentId":"024",
        "icon":"",
        "menu":[
          {
            "text":"系统公告",
            "id":"0094",
            "parentId":"011",
            "icon":"",
            "url":"assist/webViews/notice/notice.html?readonly=true",
            "handler":"menuItemClick"
          }
        ]
      },
      {
        "text":"通用查询",
        "id":"010",
        "parentId":"024",
        "icon":"",
        "menu":[
          {
            "text":"组织机构及人员查询",
            "id":"0025",
            "parentId":"010",
            "icon":"",
            "url":"logManage/webViews/zzjg/zzjgjrycx.jsp",
            "handler":"menuItemClick"
          }
        ]
      },
      {
        "text":"Bug及需求管理",
        "id":"0084",
        "parentId":"024",
        "icon":"",
        "url":"rcwh/webViews/BugAndXq.jsp",
        "handler":"menuItemClick"
      }
    ]
  }
],
    "firstPage":[
  {
    "text":"我的日志（New）",
    "id":"0140",
    "parentId":null,
    "icon":"default.png",
    "url":"logManage/webViews/CalendarOfLog/CalendarLog.jsp",
    "handler":"menuItemClick",
    "isFirstPage":1
  }
],
    "isPortal":false,
    "isDebugMode":false,
    "singlePage":false
}