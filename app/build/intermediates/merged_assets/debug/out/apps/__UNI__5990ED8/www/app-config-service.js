
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/workTab/view/WorkTabManage","pages/index/index","pages/main/contact/ContactTabbar","pages/main/find/FindTabbar","pages/main/work/WorkTabbar","pages/main/news/NewsList","pages/index/qrLogin","pages/user/view/Login","pages/user/view/Policy","pages/user/view/Register","pages/workTab/view/editWorkTab","pages/chat/view/hm-chat","pages/chat/view/ConfirmFriendList","pages/chat/view/RemarkFriendInfo","pages/chat/view/pg-chat","pages/work/view/FriendPersonalHomePage","pages/work/view/PersonalHomePage","pages/work/view/PersonalHomePageNew","pages/work/view/PublishStart","pages/work/view/PublishPicture","pages/work/view/PublishPictureForHome","pages/work/view/PublishVideo","pages/work/view/PublishVideoForHome","pages/chat/view/SingleChat","pages/chat/view/UserBasicInfo","pages/chat/view/SearchUser","pages/chat/view/SearchUserList","pages/chat/view/SearchGroupMember","pages/chat/view/ShareCard","pages/chat/view/ShareToConversation","pages/chat/view/ShareToFriend","pages/chat/view/ShareToGroup","pages/chat/view/AddFriendApply","pages/chat/view/GroupList","pages/chat/view/orgList","pages/chat/view/LineOrgList","pages/chat/view/Orgtit","pages/chat/view/StarFriend","pages/chat/view/OftenFriend","pages/chat/view/GroupHobbySearch","pages/chat/view/GroupHobbyChat","pages/chat/view/GroupChat","pages/chat/view/GroupNoticeDetail","pages/chat/view/GroupHobbyInfo","pages/chat/view/GroupInfo","pages/chat/view/GroupCreateHobbyQrcode","pages/chat/view/GroupCreateQrcode","pages/workTab/view/oasystem","pages/workTab/view/oaTodoProvince","pages/workTab/view/webviews","pages/workTab/view/newWebviews","pages/workTab/view/yxczapp","pages/workTab/view/groupcomListOne","pages/workTab/view/taskAssign","pages/workTab/view/comissionList","pages/workTab/view/bgrwComissionList","pages/workTab/view/newBgrwList","pages/workTab/view/groupcomList","pages/workTab/view/ywdapp","pages/workTab/view/trader","pages/workTab/view/erpTodo","pages/workTab/view/erpfpzs","pages/workTab/view/zhbzapp","pages/workTab/view/ihrapp","pages/workTab/view/itsmapp","pages/workTab/view/bxptapp","pages/workTab/view/onemail","pages/workTab/view/savework","pages/chat/view/JoinGroup","pages/chat/view/GroupHobbyMemberList","pages/chat/view/GroupMemberList","pages/chat/view/GroupHobbyMemberRemove","pages/chat/view/GroupMemberRemove","pages/chat/view/GroupHobbyMemberAdd","pages/chat/view/GroupMemberAdd","pages/chat/view/GroupCreate","pages/chat/view/ModifyGroupHobbyInfo","pages/chat/view/ModifyGroupInfo","pages/chat/view/PublishGroupNotice","pages/chat/view/ModifyGroupNickName","pages/chat/forwardMsg/ForwardMsg","pages/kefu/view/KefuList","pages/kefu/view/KefuChat","pages/user/view/more/PersonInfoList","pages/user/view/more/MyQrcodeCard","pages/user/view/more/SystemSetting","pages/user/view/more/ModifyNickname","pages/user/view/ModifyPassword","pages/main/more/Feedback","pages/main/more/About","pages/main/news/NewsDetail","pages/main/setting/Setting","pages/main/more/MoreTabbar","pages/main/more/HelpCenter","pages/main/problem/ProblemTypeList","pages/main/problem/ProblemList","pages/main/problem/ProblemDetail","pages/work/view/PersonalHomeDynamicDetail","pages/main/more/CheckIn","pages/chat/view/GroupHobbyList","pages/chat/view/GroupHobbyCreate","pages/chat/view/WorkApply","pages/chat/view/WorkApprovalList","pages/chat/view/ApprovalApplyInfo","pages/chat/view/workApplyInfo","pages/chat/view/WorkApplyEdit","pages/workApply/view/WorkApply","pages/workApply/view/WorkApprovalList","pages/workApply/view/ApprovalApplyInfo","pages/workApply/view/workApplyInfo","pages/workApply/view/WorkApplyEdit","pages/chat/view/ContactTabbar","pages/notice/view/NoticeList","pages/notice/view/NoticeHistoryList","pages/notice/view/NoticeDetail","pages/notice/view/readList","pages/workTab/view/taskAssign","pages/chat/view/SelectApprovalUser","pages/chat/view/TeamList","pages/chat/view/TeamCreate","pages/chat/view/TeamUserList","pages/chat/view/TeamInfo","pages/chat/view/ModifyTeamInfo","pages/chat/view/TeamMemberAdd","pages/chat/view/TeamMemberRemove","pages/toDoList/view/toDoAllList","pages/toDoList/view/toDoList","pages/toDoList/view/oaToDo","pages/toDoList/view/toDoDetail","pages/toDoList/view/gjChartMoney","pages/toDoList/view/gjChartOrderNum","pages/chat/chat","pages/advancedGroupCard/advancedGroupCard","pages/videoCall/videoCall","pages/partials/advancedGroupMember/advancedGroupMember","pages/partials/advancedGroupMemberCard/advancedGroupMemberCard","pages/partials/announcement/announcement","pages/partials/messageNotification/messageNotification","pages/partials/historyFromCloud/historyFromCloud","pages/workTab/view/WorkTabMore","pages/workTab/view/travelComission","pages/workTab/view/groupComission","pages/workTab/view/gdFlow","pages/workTab/view/gdCloud","pages/checkWork/checkWork","pages/schedule/schedule","pages/schedule/newSchedule","pages/schedule/addSchedule","pages/schedule/scheduleDetail","pages/schedule/updateSchedule","pages/schedule/otherScheduleDetail","pages/chat/view/ForwardOrgList","pages/main/feedback/FeedBackAdd","pages/main/feedback/FeedBackDetail","pages/main/feedback/FeedBackTypeList","pages/main/contactSupport/contactSupport","pages/main/more/partyMembers","pages/main/more/partyDuty","pages/chat/view/UserBasicMore","pages/main/more/landline","pages/main/aboutSystem/aboutSystem","pages/main/aboutSystem/histroyVersion","pages/main/aboutSystem/histroyVersionDetail","pages/main/recommend/recommend","pages/main/help/help","pages/toDoList/view/protectDiseaseToDo","pages/toDoList/view/protectDiseaseToDoForm","pages/toDoList/view/protectDiseaseToDoDetail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#F8F8F8","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6"},"tabBar":{"color":"#BBC2D2","selectedColor":"#0076FF","backgroundColor":"#FFFFFF","fontSize":"14px","position":"bottom","style":{"z-index":"auto"},"list":[{"pagePath":"pages/index/index","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeSelect.png","text":"消息"},{"pagePath":"pages/main/contact/ContactTabbar","iconPath":"static/img/contact.png","selectedIconPath":"static/img/contactSelect.png","text":"通讯录"},{"pagePath":"pages/workTab/view/WorkTabManage","iconPath":"static/img/workBanch.png","selectedIconPath":"static/img/workBanchSelect.png","text":"工作台"},{"pagePath":"pages/main/work/WorkTabbar","iconPath":"static/img/work.png","selectedIconPath":"static/img/workSelect.png","text":"工作圈"},{"pagePath":"pages/main/find/FindTabbar","iconPath":"static/img/find.png","selectedIconPath":"static/img/findSelect.png","text":"发现"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":false},"appname":"一线传真","compilerVersion":"3.8.12","entryPagePath":"pages/workTab/view/WorkTabManage","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/workTab/view/WorkTabManage","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"工作台","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息","titleNView":false}},{"path":"/pages/main/contact/ContactTabbar","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"通讯录","navigationBarBackgroundColor":"#0055ff","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/main/find/FindTabbar","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/main/work/WorkTabbar","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"工作圈","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/main/news/NewsList","meta":{},"window":{"navigationBarTitleText":"资讯","titleNView":false}},{"path":"/pages/index/qrLogin","meta":{},"window":{"navigationBarTitleText":"扫码登陆","navigationBarBackgroundColor":"#FFFFFF","bounce":"none"}},{"path":"/pages/user/view/Login","meta":{},"window":{"navigationBarTitleText":"登陆","navigationBarBackgroundColor":"#ffffff","titleNView":false}},{"path":"/pages/user/view/Policy","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/user/view/Register","meta":{},"window":{"navigationBarTitleText":"立即注册"}},{"path":"/pages/workTab/view/editWorkTab","meta":{},"window":{"navigationBarTitleText":"管理我的应用","titleNView":false}},{"path":"/pages/chat/view/hm-chat","meta":{},"window":{"navigationBarTitleText":"天","softinputMode":"adjustResize"}},{"path":"/pages/chat/view/ConfirmFriendList","meta":{},"window":{"navigationBarTitleText":"新的朋友","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}],"softinputNavBar":"none","bounce":"none"}}},{"path":"/pages/chat/view/RemarkFriendInfo","meta":{},"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","navigationBarTitleText":"设置备注","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/pg-chat","meta":{},"window":{"navigationBarTitleText":"","softinputNavBar":"none","bounce":"none","softinputMode":"adjustPan"}},{"path":"/pages/work/view/FriendPersonalHomePage","meta":{},"window":{"navigationBarTitleText":"朋友个人主页","titleNView":false}},{"path":"/pages/work/view/PersonalHomePage","meta":{},"window":{"navigationBarTitleText":"我的个人主页","titleNView":false}},{"path":"/pages/work/view/PersonalHomePageNew","meta":{},"window":{"navigationBarTitleText":"我的个人主页"}},{"path":"/pages/work/view/PublishStart","meta":{},"window":{"titleNView":false}},{"path":"/pages/work/view/PublishPicture","meta":{},"window":{"navigationBarTitleText":"动态发布"}},{"path":"/pages/work/view/PublishPictureForHome","meta":{},"window":{"navigationBarTitleText":"动态发布","titleNView":false}},{"path":"/pages/work/view/PublishVideo","meta":{},"window":{"navigationBarTitleText":"微视频发布"}},{"path":"/pages/work/view/PublishVideoForHome","meta":{},"window":{"navigationBarTitleText":"微视频发布"}},{"path":"/pages/chat/view/SingleChat","meta":{},"window":{"navigationBarTitleText":"","softinputNavBar":"none","bounce":"none","softinputMode":"adjustPan","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}]}}},{"path":"/pages/chat/view/UserBasicInfo","meta":{},"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","navigationBarTitleText":"","softinputNavBar":"none","titleNView":false}},{"path":"/pages/chat/view/SearchUser","meta":{},"window":{"navigationBarTitleText":"聊天","titleNView":false}},{"path":"/pages/chat/view/SearchUserList","meta":{},"window":{"navigationBarTitleText":"搜索联系人"}},{"path":"/pages/chat/view/SearchGroupMember","meta":{},"window":{"navigationBarTitleText":"搜索联系人"}},{"path":"/pages/chat/view/ShareCard","meta":{},"window":{"navigationBarTitleText":"选择联系人"}},{"path":"/pages/chat/view/ShareToConversation","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}]}}},{"path":"/pages/chat/view/ShareToFriend","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}]}}},{"path":"/pages/chat/view/ShareToGroup","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}]}}},{"path":"/pages/chat/view/AddFriendApply","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"发送","fontSize":"16px"}]}}},{"path":"/pages/chat/view/GroupList","meta":{},"window":{"navigationBarTitleText":"群组","enablePullDownRefresh":true,"titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/orgList","meta":{},"window":{"navigationBarTitleText":"组织架构树","enablePullDownRefresh":true,"titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/LineOrgList","meta":{},"window":{"navigationBarTitleText":"条线架构树","enablePullDownRefresh":true,"titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/Orgtit","meta":{},"window":{"navigationBarTitleText":"组织架构树","enablePullDownRefresh":true,"titleNView":{},"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/StarFriend","meta":{},"window":{"navigationBarTitleText":"我的星标朋友","enablePullDownRefresh":true,"titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/OftenFriend","meta":{},"window":{"navigationBarTitleText":"常用联系人","enablePullDownRefresh":true,"titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/GroupHobbySearch","meta":{},"window":{"navigationBarTitleText":"搜索兴趣圈"}},{"path":"/pages/chat/view/GroupHobbyChat","meta":{},"window":{"navigationBarTitleText":"","softinputMode":"adjustPan","softinputNavBar":"none","bounce":"none","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}]}}},{"path":"/pages/chat/view/GroupChat","meta":{},"window":{"navigationBarTitleText":"","softinputMode":"adjustPan","softinputNavBar":"none","bounce":"none","titleNView":false}},{"path":"/pages/chat/view/GroupNoticeDetail","meta":{},"window":{"navigationBarTitleText":"","softinputMode":"adjustPan","softinputNavBar":"none","bounce":"none","titleNView":false}},{"path":"/pages/chat/view/GroupHobbyInfo","meta":{},"window":{"navigationBarTitleText":"兴趣群信息","enablePullDownRefresh":true}},{"path":"/pages/chat/view/GroupInfo","meta":{},"window":{"navigationBarTitleText":"群信息","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/chat/view/GroupCreateHobbyQrcode","meta":{},"window":{"navigationBarTitleText":"群二维码名片"}},{"path":"/pages/chat/view/GroupCreateQrcode","meta":{},"window":{"navigationBarTitleText":"群二维码名片"}},{"path":"/pages/workTab/view/oasystem","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/oaTodoProvince","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/webviews","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"black","navigationBarTitleText":"第三方对接","statusBarStyle":"dark","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/newWebviews","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"black","navigationBarTitleText":"本团队开发","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/yxczapp","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/groupcomListOne","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/taskAssign","meta":{},"window":{"navigationBarTitleText":"待办列表","titleNView":false}},{"path":"/pages/workTab/view/comissionList","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/bgrwComissionList","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/newBgrwList","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/groupcomList","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/ywdapp","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"云文档","titleNView":true,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/trader","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/erpTodo","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/erpfpzs","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/zhbzapp","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"云文档","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/ihrapp","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/itsmapp","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/bxptapp","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/onemail","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":false}},{"path":"/pages/workTab/view/savework","meta":{},"window":{"navigationBarBackgroundColor":"#f88941","navigationBarTextStyle":"white","navigationBarTitleText":"","titleNView":true,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/JoinGroup","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/chat/view/GroupHobbyMemberList","meta":{},"window":{"navigationBarTitleText":"聊天群成员","enablePullDownRefresh":true}},{"path":"/pages/chat/view/GroupMemberList","meta":{},"window":{"navigationBarTitleText":"聊天群成员","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/chat/view/GroupHobbyMemberRemove","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"删除","fontSize":"16px"}]}}},{"path":"/pages/chat/view/GroupMemberRemove","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"删除","fontSize":"16px"}]}}},{"path":"/pages/chat/view/GroupHobbyMemberAdd","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"完成","fontSize":"16px"}]}}},{"path":"/pages/chat/view/GroupMemberAdd","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/chat/view/GroupCreate","meta":{},"window":{"navigationBarTitleText":"创建群组","titleNView":false}},{"path":"/pages/chat/view/ModifyGroupHobbyInfo","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"完成","fontSize":"16px"}]}}},{"path":"/pages/chat/view/ModifyGroupInfo","meta":{},"window":{"navigationBarTitleText":"修改群名称","titleNView":{"buttons":[{"color":"#ffffff","fontSize":"30rpx","fontWeight":"bold","text":"完成"}]}}},{"path":"/pages/chat/view/PublishGroupNotice","meta":{},"window":{"navigationBarTitleText":"群公告发布","titleNView":false}},{"path":"/pages/chat/view/ModifyGroupNickName","meta":{},"window":{"navigationBarTitleText":"修改群昵称","titleNView":{"buttons":[{"text":"完成","fontSize":"16px","background":"#42b983"}]}}},{"path":"/pages/chat/forwardMsg/ForwardMsg","meta":{},"window":{"navigationBarTitleText":"转发列表","titleNView":false}},{"path":"/pages/kefu/view/KefuList","meta":{},"window":{"navigationBarTitleText":"客服列表","enablePullDownRefresh":true}},{"path":"/pages/kefu/view/KefuChat","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/user/view/more/PersonInfoList","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/user/view/more/MyQrcodeCard","meta":{},"window":{"navigationBarTitleText":"我的二维码"}},{"path":"/pages/user/view/more/SystemSetting","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/user/view/more/ModifyNickname","meta":{},"window":{"navigationBarTitleText":"修改昵称","titleNView":{"buttons":[{"text":"完成","fontSize":"16px"}]}}},{"path":"/pages/user/view/ModifyPassword","meta":{},"window":{"navigationBarTitleText":"修改密码","titleNView":{"buttons":[{"text":"完成","fontSize":"16px"}]}}},{"path":"/pages/main/more/Feedback","meta":{},"window":{"navigationBarTitleText":"意见反馈","titleNView":{"buttons":[{"text":"完成","fontSize":"16px"}]}}},{"path":"/pages/main/more/About","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/main/news/NewsDetail","meta":{},"window":{"navigationBarTitleText":"资讯详情","titleNView":false}},{"path":"/pages/main/setting/Setting","meta":{},"window":{"navigationBarTitleText":"设置","navigationStyle":"custom"}},{"path":"/pages/main/more/MoreTabbar","meta":{},"window":{"navigationBarTitleText":"个人中心","navigationStyle":"custom"}},{"path":"/pages/main/more/HelpCenter","meta":{},"window":{"navigationBarTitleText":"关于与帮助","titleNView":false}},{"path":"/pages/main/problem/ProblemTypeList","meta":{},"window":{"navigationBarTitleText":"问题分类","titleNView":false}},{"path":"/pages/main/problem/ProblemList","meta":{},"window":{"navigationBarTitleText":"问题列表","titleNView":false}},{"path":"/pages/main/problem/ProblemDetail","meta":{},"window":{"navigationBarTitleText":"问题详情","titleNView":false}},{"path":"/pages/work/view/PersonalHomeDynamicDetail","meta":{},"window":{"navigationBarTitleText":"动态详情","titleNView":false}},{"path":"/pages/main/more/CheckIn","meta":{},"window":{"navigationBarTitleText":"签到"}},{"path":"/pages/chat/view/GroupHobbyList","meta":{},"window":{"navigationBarTitleText":"兴趣圈"}},{"path":"/pages/chat/view/GroupHobbyCreate","meta":{},"window":{"navigationBarTitleText":"兴趣圈创建","titleNView":{"buttons":[{"text":"完成","fontSize":"16px"}]}}},{"path":"/pages/chat/view/WorkApply","meta":{},"window":{"navigationBarTitleText":"请假申请","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/chat/view/WorkApprovalList","meta":{},"window":{"navigationBarTitleText":"请假审批","titleNView":false}},{"path":"/pages/chat/view/ApprovalApplyInfo","meta":{},"window":{"navigationBarTitleText":"审批","titleNView":false}},{"path":"/pages/chat/view/workApplyInfo","meta":{},"window":{"navigationBarTitleText":"申请详情","titleNView":false}},{"path":"/pages/chat/view/WorkApplyEdit","meta":{},"window":{"navigationBarTitleText":"修改申请","titleNView":false}},{"path":"/pages/workApply/view/WorkApply","meta":{},"window":{"navigationBarTitleText":"加班申请","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/workApply/view/WorkApprovalList","meta":{},"window":{"navigationBarTitleText":"加班审批","titleNView":false}},{"path":"/pages/workApply/view/ApprovalApplyInfo","meta":{},"window":{"navigationBarTitleText":"审批","titleNView":false}},{"path":"/pages/workApply/view/workApplyInfo","meta":{},"window":{"navigationBarTitleText":"申请详情","titleNView":false}},{"path":"/pages/workApply/view/WorkApplyEdit","meta":{},"window":{"navigationBarTitleText":"修改申请","titleNView":false}},{"path":"/pages/chat/view/ContactTabbar","meta":{},"window":{"navigationBarTitleText":"通讯录","titleNView":false}},{"path":"/pages/notice/view/NoticeList","meta":{},"window":{"navigationBarTitleText":"公告","titleNView":false}},{"path":"/pages/notice/view/NoticeHistoryList","meta":{},"window":{"navigationBarTitleText":"历史公告","titleNView":false}},{"path":"/pages/notice/view/NoticeDetail","meta":{},"window":{"navigationBarTitleText":"公告","titleNView":false}},{"path":"/pages/notice/view/readList","meta":{},"window":{"navigationBarTitleText":"公告接收列表","titleNView":false}},{"path":"/pages/chat/view/SelectApprovalUser","meta":{},"window":{"navigationBarTitleText":"选择二级审批人"}},{"path":"/pages/chat/view/TeamList","meta":{},"window":{"navigationBarTitleText":"我的团队","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/chat/view/TeamCreate","meta":{},"window":{"navigationBarTitleText":"创建团队","titleNView":false}},{"path":"/pages/chat/view/TeamUserList","meta":{},"window":{"navigationBarTitleText":"团队成员","softinputMode":"adjustPan","softinputNavBar":"none","bounce":"none","titleNView":false}},{"path":"/pages/chat/view/TeamInfo","meta":{},"window":{"navigationBarTitleText":"团队信息","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/chat/view/ModifyTeamInfo","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/chat/view/TeamMemberAdd","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/chat/view/TeamMemberRemove","meta":{},"window":{"navigationBarTitleText":"","titleNView":false}},{"path":"/pages/toDoList/view/toDoAllList","meta":{},"window":{"navigationBarTitleText":"待办系统","titleNView":false}},{"path":"/pages/toDoList/view/toDoList","meta":{},"window":{"navigationBarTitleText":"待办","titleNView":false}},{"path":"/pages/toDoList/view/oaToDo","meta":{},"window":{"navigationBarBackgroundColor":"#0478ff","navigationBarTitleText":"","titleNView":false,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/toDoList/view/toDoDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/toDoList/view/gjChartMoney","meta":{},"window":{"navigationBarTitleText":"工建报表(金额)"}},{"path":"/pages/toDoList/view/gjChartOrderNum","meta":{},"window":{"navigationBarTitleText":"工建报表(订单数量)"}},{"path":"/pages/chat/chat","meta":{},"window":{"titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"28px"}]},"softinputMode":"adjustResize","softinputNavBar":"none"}},{"path":"/pages/advancedGroupCard/advancedGroupCard","meta":{},"window":{}},{"path":"/pages/videoCall/videoCall","meta":{},"window":{}},{"path":"/pages/partials/advancedGroupMember/advancedGroupMember","meta":{},"window":{"navigationBarTitleText":"群成员(所有)"}},{"path":"/pages/partials/advancedGroupMemberCard/advancedGroupMemberCard","meta":{},"window":{"navigationBarTitleText":"群成员(单个)"}},{"path":"/pages/partials/announcement/announcement","meta":{},"window":{"navigationBarTitleText":"群公告","softinputMode":"adjustResize"}},{"path":"/pages/partials/messageNotification/messageNotification","meta":{},"window":{}},{"path":"/pages/partials/historyFromCloud/historyFromCloud","meta":{},"window":{"navigationBarTitleText":"历史消息"}},{"path":"/pages/workTab/view/WorkTabMore","meta":{},"window":{"navigationBarTitleText":"智慧工建","titleNView":false}},{"path":"/pages/workTab/view/travelComission","meta":{},"window":{"navigationBarTitleText":"差旅详情","titleNView":false}},{"path":"/pages/workTab/view/groupComission","meta":{},"window":{"navigationBarTitleText":"集团待办详情","titleNView":false}},{"path":"/pages/workTab/view/gdFlow","meta":{},"window":{"navigationBarTitleText":"广东工作流","navigationBarBackgroundColor":"#007aff","titleNView":true,"softinputNavBar":"none","bounce":"none"}},{"path":"/pages/workTab/view/gdCloud","meta":{},"window":{"navigationBarTitleText":"广东事务云","titleNView":false}},{"path":"/pages/checkWork/checkWork","meta":{},"window":{"navigationBarTitleText":"考勤","titleNView":false}},{"path":"/pages/schedule/schedule","meta":{},"window":{"navigationBarTitleText":"日程","titleNView":false}},{"path":"/pages/schedule/newSchedule","meta":{},"window":{"navigationBarTitleText":"新建日程","titleNView":false}},{"path":"/pages/schedule/addSchedule","meta":{},"window":{"navigationBarTitleText":"新建日程","titleNView":false}},{"path":"/pages/schedule/scheduleDetail","meta":{},"window":{"navigationBarTitleText":"日程详情","titleNView":false}},{"path":"/pages/schedule/updateSchedule","meta":{},"window":{"navigationBarTitleText":"修改日程","titleNView":false}},{"path":"/pages/schedule/otherScheduleDetail","meta":{},"window":{"navigationBarTitleText":"查看闲忙","titleNView":false}},{"path":"/pages/chat/view/ForwardOrgList","meta":{},"window":{"titleNView":false}},{"path":"/pages/main/feedback/FeedBackAdd","meta":{},"window":{"navigationBarTitleText":"意见反馈","titleNView":false}},{"path":"/pages/main/feedback/FeedBackDetail","meta":{},"window":{"navigationBarTitleText":"意见反馈详情","titleNView":false}},{"path":"/pages/main/feedback/FeedBackTypeList","meta":{},"window":{"navigationBarTitleText":"意见反馈","titleNView":false}},{"path":"/pages/main/contactSupport/contactSupport","meta":{},"window":{"navigationBarTitleText":"联系客服","titleNView":false}},{"path":"/pages/main/more/partyMembers","meta":{},"window":{"navigationBarTitleText":"个人中心","titleNView":false}},{"path":"/pages/main/more/partyDuty","meta":{},"window":{"navigationBarTitleText":"个人中心","titleNView":false}},{"path":"/pages/chat/view/UserBasicMore","meta":{},"window":{"navigationBarTitleText":"更多信息","titleNView":false}},{"path":"/pages/main/more/landline","meta":{},"window":{"navigationBarTitleText":"座机号码","titleNView":false}},{"path":"/pages/main/aboutSystem/aboutSystem","meta":{},"window":{"navigationBarTitleText":"关于系统","titleNView":false}},{"path":"/pages/main/aboutSystem/histroyVersion","meta":{},"window":{"navigationBarTitleText":"历史版本","titleNView":false}},{"path":"/pages/main/aboutSystem/histroyVersionDetail","meta":{},"window":{"navigationBarTitleText":"版本详情","titleNView":false}},{"path":"/pages/main/recommend/recommend","meta":{},"window":{"navigationBarTitleText":"分享","titleNView":false}},{"path":"/pages/main/help/help","meta":{},"window":{"navigationBarTitleText":"帮助","titleNView":false}},{"path":"/pages/toDoList/view/protectDiseaseToDo","meta":{},"window":{"navigationBarTitleText":"防疫待办","titleNView":false}},{"path":"/pages/toDoList/view/protectDiseaseToDoForm","meta":{},"window":{"navigationBarTitleText":"防疫审批","titleNView":false}},{"path":"/pages/toDoList/view/protectDiseaseToDoDetail","meta":{},"window":{"navigationBarTitleText":"防疫详情","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
