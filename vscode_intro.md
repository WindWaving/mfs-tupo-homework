# vscode常用功能说明
* ### 常用快捷键说明
> + ctrl+shift+p / F1 ---命令面板
+ ctrl+p ---打开文件
+ ctrl+shift+N ---打开新窗口
+ ctrl+shift+W ---关闭窗口
+ ctrl+K+S ---键盘快捷键设置
+ Alt+↑ / Alt+↓ ---上下移动
+ Alt+shift+↑ / ↓ ---复制上下行
+ ctrl+shift+K ---删除行
+ ctrl+Enter --光标移动到下一行
+ ctrl+shift+Enter --光标移动到上一行
+ ctrl+shift+\ ---跳转到匹配括号
+ ctrl+[ / ]  ---行缩进
+ ctrl+ home / end ---移动到词开头/结尾
+ ctrl+↑ / ↓ ---上下滚动
+ ctrl+shift+[ ---折叠区域
+ ctrl+shift+] ---展开区域
+ ctrl+/ ---注释代码/移除注释
+ ctrl+K+0 ---折叠所有区域
+ ctrl+K+J ---展开所有区域
+ alt+shift+F ---格式化所有代码
+ shift+alt+鼠标左键  ---多行编辑
+ ctrl+shift+L ---选中所有匹配
+ ctrl+B ---侧边栏显示
+ ctrl+shift+e ---资源管理器显示
+ ctrl+shift+d ---debug显示
+ ctrl+shift+u ---output显示
+ ctrl+shift+x ---插件显示


* ### 插件安装卸载
>点击侧边栏扩展图标或者使用快捷键ctrl+shift+X调出插件搜索框，搜索相关插件点击install安装。
>卸载插件：调出侧边栏插件搜索栏，查看当前使用的插件，点击unistall卸载。

* ### 在vscode中使用git
1. 查看修改：
>在修改代码时，VS code会对不同的修改进行不同形式的标注：红色箭头代表有删除行，蓝色开头代表修改，绿色开头代表新增.
>代码管理器中，文件名旁边有个+ M，代表修改了但是没有add。可以点击+ 执行git add 文件操作，点击M可以看到具体修改。文件名旁边有- M 表示add了但是没有commit。文件名旁边没有M表示commit 了。
2. 代码提交
>点击修改的文件右边+号执行add 操作。
>在查看修改面板上输入一些修改文本，并且使用ctrl + enter 进行commit。或者点击顶部✔提交。
>右键点击push提交，代码提交到云端