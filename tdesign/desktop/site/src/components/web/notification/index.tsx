import { define, OmiProps, h, render, WeElement } from 'omi'
import "../../../../../src/notification/index"

import * as marked from 'marked'

const docsHtml = marked.parse(`
## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
--  |  --  |  --  |  ---  |  -- 
className |	String |	- | 	类名	N
style |	Object |	- | 	样式，TS 类型：React.CSSProperties	| N
children |	TNode |	- | 	自定义内容，同 content。TS 类型：string - TNode。通用类型定义	| N
closeBtn |	TNode |	undefined | 	关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：string - boolean - TNode。通用类型定义	N
content |	TNode |	- | 	自定义内容。TS 类型：string - TNode。通用类型定义	| N
duration |	Number |	3000 | 	消息显示时长，单位：毫秒。值为 0 表示永久显示	| N
footer |	TNode |	- | 	用于自定义底部内容。TS 类型：string - TNode。通用类型定义	| N
icon |	TNode |	true | 	用于自定义消息通知前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标。TS 类型：boolean - TNode。通用类型定义	| N
theme |	String |	info | 	消息类型。可选项：info/success/warning/error。TS 类型：NotificationThemeList type NotificationThemeList = 'info' - 'success' - 'warning' - 'error'。详细类型定义	| N
title |	TNode |	- | 	标题。TS 类型：string - TNode。通用类型定义	| N
onCloseBtnClick |	Function |	 | 	TS 类型：(context: { e: MouseEvent }) => void点击关闭按钮时触发	| N
onDurationEnd |	Function |	 | 	TS 类型：() => void时结束时触发	| N
`)


define('page-notification', class extends WeElement {

    render(props: {} | OmiProps<{}, any>, store: any) {
      return (
        <div style="padding:24px">
          <div style="display:flex;">
            <div direction="vertical" style="width:100%">
              <t-notification style="margin:12px;" duration={0} theme="info" title="info" content="This is my info" />
              <t-notification style="margin:12px;" duration={0} theme="success" title="success" content="This is my success" />
              <t-notification style="margin:12px;" duration={0} theme="warning" title="warning" content="This is my warning" />
              <t-notification style="margin:12px;" duration={0} theme="error" title="error" content="This is my error" />
            </div>
          </div>
          <div direction="vertical" style="width:100%" dangerouslySetInnerHTML={{ __html: docsHtml }}></div>
  
        </div>
      );
    }
  })