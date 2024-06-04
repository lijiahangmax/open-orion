import{_ as l,c as i,o as e,a3 as o}from"./chunks/framework.M2ANHPtw.js";const m=JSON.parse('{"title":"更新日志","description":"","frontmatter":{"title":"更新日志"},"headers":[],"relativePath":"update/change-log.md","filePath":"update/change-log.md"}'),a={name:"update/change-log.md"},d=o('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>版本号严格遵循 Semver 规范。</p></div><h3 id="升级须知" tabindex="-1">升级须知 <a class="header-anchor" href="#升级须知" aria-label="Permalink to &quot;升级须知&quot;">​</a></h3><ul><li>应用 <strong>不支持</strong> 跨版本升级, 可以进行 <strong>多次升级</strong></li><li>docker 安装的 sql 脚本可以在 <code>adminer</code> 中执行</li><li>执行完成菜单 sql 后请刷新缓存 <code>系统设置</code> &gt; <code>系统菜单</code> &gt; <code>刷新缓存</code></li><li>执行完成字典 sql 后请刷新缓存 <code>系统设置</code> &gt; <code>数据字典项</code> &gt; <code>刷新缓存</code></li></ul><h3 id="docker-升级流程" tabindex="-1">docker 升级流程 <a class="header-anchor" href="#docker-升级流程" aria-label="Permalink to &quot;docker 升级流程&quot;">​</a></h3><ul><li>备份 <code>volumes</code> (必要时可以回滚)</li><li>进入 <code>adminer</code> 执行升级的 <code>sql</code> 脚本</li><li>执行 升级的 <code>bash</code> 脚本</li><li>进入 代码目录执行 <code>sh docker-upgrade.sh</code> 进行容器升级 <code>down</code> &gt; <code>pull</code> &gt; <code>up -d</code></li></ul><h3 id="v2-0-5" tabindex="-1">v2.0.5 <a class="header-anchor" href="#v2-0-5" aria-label="Permalink to &quot;v2.0.5&quot;">​</a></h3><p><code>2024-06-0x</code> <code>release</code> <code>开发中</code></p><ul><li>🔨 优化 终端大文件下载浏览器卡死</li><li>🔨 升级 <code>xterm.js</code> 版本</li><li>🌈 添加 终端插件配置中 添加 <code>unicode</code> 支持</li><li>🌈 添加 终端显示配置中 添加 <code>字间距</code> 配置项</li></ul><h3 id="v2-0-4" tabindex="-1">v2.0.4 <a class="header-anchor" href="#v2-0-4" aria-label="Permalink to &quot;v2.0.4&quot;">​</a></h3><p><code>2024-06-03</code> <code>release</code></p><ul><li>🩰 修改 表格 UI 样式</li><li>🐞 修复 删除密钥/身份 用户自定义配置更新失败</li><li>🌈 添加 主机列表批量删除</li><li>🌈 添加 密钥列表批量删除</li><li>🌈 添加 身份列表批量删除</li><li>🌈 添加 计划任务列表批量删除</li><li>🌈 添加 执行模板列表批量删除</li><li>🌈 添加 字典配置项批量删除</li><li>🌈 添加 用户列表批量删除</li></ul><p><a href="/open-orion/orion-visor/update/v2.0.4.html">如何升级</a></p><h3 id="v2-0-3" tabindex="-1">v2.0.3 <a class="header-anchor" href="#v2-0-3" aria-label="Permalink to &quot;v2.0.3&quot;">​</a></h3><p><code>2024-05-29</code> <code>release</code></p><ul><li>🐞 修复 部分 ui 显示错误</li><li>🐞 修复 计划任务编辑时报错</li><li>🐞 修复 计划任务手动触发时报错</li><li>🩰 修改 logo</li><li>🔨 修改 docker 时区</li></ul><h3 id="v2-0-2" tabindex="-1">v2.0.2 <a class="header-anchor" href="#v2-0-2" aria-label="Permalink to &quot;v2.0.2&quot;">​</a></h3><p><code>2024-05-24</code> <code>release</code></p><ul><li>🐞 修复 资产授权密钥时间显示错误</li><li>🌈 添加 演示模式</li><li>⭐ 支持 Chrome PWA</li></ul><h3 id="v2-0-1" tabindex="-1">v2.0.1 <a class="header-anchor" href="#v2-0-1" aria-label="Permalink to &quot;v2.0.1&quot;">​</a></h3><p><code>2024-05-21</code> <code>release</code></p><ul><li>⭐ 添加 cron 组件</li><li>🐞 修复 批量执行后日志偶尔不展示的问题</li><li>🐞 修复 批量上传进度条显示异常的问题</li></ul><h3 id="v2-0-0" tabindex="-1">v2.0.0 <a class="header-anchor" href="#v2-0-0" aria-label="Permalink to &quot;v2.0.0&quot;">​</a></h3><p><code>2024-05-17</code> <code>release</code></p><ul><li>⭐ 修改 项目名称为 <code>orion-visor</code></li><li>🩰 修改 终端默认字体</li></ul><p><a href="/open-orion/orion-visor/update/v2.0.0.html">如何升级</a></p><h3 id="v1-0-8" tabindex="-1">v1.0.8 <a class="header-anchor" href="#v1-0-8" aria-label="Permalink to &quot;v1.0.8&quot;">​</a></h3><p><code>2024-05-15</code> <code>release</code></p><ul><li>🌈 新增 站内信模块</li><li>🔨 优化 执行命令日志跳转逻辑</li><li>🔨 修改 <code>exitStatus</code> 改为 <code>exitCode</code></li></ul><p><a href="/open-orion/orion-visor/update/v1.0.8.html">如何升级</a></p><h3 id="v1-0-7" tabindex="-1">v1.0.7 <a class="header-anchor" href="#v1-0-7" aria-label="Permalink to &quot;v1.0.7&quot;">​</a></h3><p><code>2024-05-13</code> <code>release</code></p><ul><li>🐞 修复 查看计划任务日志时提示日志不存在</li><li>🩰 修改 命令执行日志 UI 修改</li><li>🌈 新增 文件传输列表添加操作栏</li><li>🌈 新增 主机在线会话功能</li><li>🌈 新增 文件批量上传功能</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.7.html">如何升级</a></p><h3 id="v1-0-6" tabindex="-1">v1.0.6 <a class="header-anchor" href="#v1-0-6" aria-label="Permalink to &quot;v1.0.6&quot;">​</a></h3><p><code>2024-04-26</code> <code>release</code></p><ul><li>🐞 修复 终端页签关闭后不会自动切换</li><li>🩰 修改 命令执行日志 UI 修改</li><li>🌈 新增 命令执行模板配置默认主机</li><li>🌈 新增 主机终端书签路径</li><li>🌈 新增 命令执行日志添加 <code>ansi</code> 日志 <code>app.exec-log.append-ansi</code></li><li>🌈 新增 定时删除命令执行日志文件 <code>app.exec-log.auto-clear</code></li><li>🌈 新增 终端设置添加了几个全局快捷键</li><li>🔨 优化 通用分组模型添加 <code>userId</code></li><li>🔨 优化 退出登录不重定向</li><li>🔨 优化 动态设置页面标题</li><li>🔨 优化 终端断开后回车重连</li><li>🔨 优化 自动删除未使用的命令片段分组</li><li>🔨 优化 添加分布式锁工具类</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.6.html">如何升级</a></p><h3 id="v1-0-5" tabindex="-1">v1.0.5 <a class="header-anchor" href="#v1-0-5" aria-label="Permalink to &quot;v1.0.5&quot;">​</a></h3><p><code>2024-04-22</code> <code>release</code></p><ul><li>🐞 修复 用户列表用户名显示错误</li><li>🐞 修复 主机分组页面无法编辑的问题</li><li>🐞 修复 资产授权时提示数据发生变更的问题</li><li>🐞 修复 删除资产时授权记录未删除的问题</li><li>🐞 修复 命令执行权限控制失效的问题</li><li>🌈 新增 定时删除未引用的 <code>tag</code></li><li>🌈 新增 执行命令时可使用脚本文件执行</li><li>🌈 新增 主机身份添加类型字段</li><li>🔨 优化 文件传输列表进度显示</li><li>🔨 优化 命令执行日志持续时间</li><li>🔨 优化 命令执行添加内置参数</li><li>🔨 优化 tracker 监听文件可配置 <code>app.tracker</code></li><li>🔨 优化 sftp 上传文件重复处理可配置 <code>app.sftp</code></li><li>🔨 优化 用户状态调整交互逻辑</li><li>🔨 优化 角色状态调整交互逻辑</li><li>🔨 优化 优化资产授权交互逻辑</li><li>🔨 优化 SFTP 交互逻辑</li><li>🧹 删除 用户锁定状态</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.5.html">如何升级</a></p><h3 id="v1-0-4" tabindex="-1">v1.0.4 <a class="header-anchor" href="#v1-0-4" aria-label="Permalink to &quot;v1.0.4&quot;">​</a></h3><p><code>2024-04-15</code> <code>release</code></p><ul><li>🚀 升级 <code>orion-kit</code> 到 <code>1.0.7</code></li><li>🐞 修复 批量执行选择模板后默认参数未自动设置</li><li>🐞 修复 主机列表卡片视图重置条件后 tag 消失</li><li>🐞 修复 主机分组授权页面刷新不显示 loading</li><li>🐞 修复 面包屑组件路径显示不全的问题</li><li>🐞 修复 数据字典历史提示无权限</li><li>🐞 修复 批量执行较短命令日志不显示</li><li>🩰 修改 主机终端亮色模式配色</li><li>🩰 修改 执行模板 UI 修改</li><li>🌈 新增 计划任务模块</li><li>🌈 新增 计划任务日志模块</li><li>🔨 添加 quartz 配置</li><li>🔨 修改 redisson 配置</li><li>🔨 优化 orion-ops-framework 配置规范化</li><li>🔨 优化 前端 props 命名规范化</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.4.html">如何升级</a></p><h3 id="v1-0-3" tabindex="-1">v1.0.3 <a class="header-anchor" href="#v1-0-3" aria-label="Permalink to &quot;v1.0.3&quot;">​</a></h3><p><code>2024-03-25</code> <code>release</code></p><ul><li>🚀 升级 <code>arco design</code> 到 <code>2.55.0</code></li><li>🐞 修复 新创建的用户登录会跳转到 <strong>404</strong></li><li>🐞 修复 分配菜单模态框没有子菜单不显示的问题</li><li>🐞 修复 工作台页面快捷操作面板会展示隐藏的菜单</li><li>🐞 修复 主机终端无法粘贴 (浏览器安全策略)</li><li>🐞 修复 卡片列表组件控制台 warn 提示</li><li>🐞 修复 关闭终端时控制台提示 handleResize 错误信息</li><li>🔨 修改 系统菜单渲染逻辑 (移除 JSX 构建时不会提示 JSX.IntrinsicElements)</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.3.html">如何升级</a></p><h3 id="v1-0-2" tabindex="-1">v1.0.2 <a class="header-anchor" href="#v1-0-2" aria-label="Permalink to &quot;v1.0.2&quot;">​</a></h3><p><code>2024-03-22</code> <code>release</code></p><ul><li>🐞 修复 SFTP 加载失败后一直 loading</li><li>🐞 修复 主机终端搜索框报错</li><li>🐞 修复 SSH 配置未启用还可以连接</li><li>🐞 修复 主机配置保存后无法修改状态</li><li>🐞 修复 添加快捷命令时编辑器无代码提示</li><li>🔨 修改 菜单路由命名逻辑修改</li><li>🔨 优化 前端组件命名规范化</li><li>🔨 优化 前端 emit 命名规范化</li><li>🌈 新增 双击终端会话 Tab 快速复制</li><li>🌈 新增 批量执行命令</li><li>🌈 新增 命令执行日志</li><li>🌈 新增 执行模板功能</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.2.html">如何升级</a></p><h3 id="v1-0-1" tabindex="-1">v1.0.1 <a class="header-anchor" href="#v1-0-1" aria-label="Permalink to &quot;v1.0.1&quot;">​</a></h3><p><code>2024-03-06</code> <code>release</code></p><ul><li>🐞 修复 用户操作日志条件重置后类型框数据不正常的问题</li><li>🩰 修改 主机连接日志 UI</li><li>🌈 新增 SFTP 使用日志列表</li><li>🌈 新增 主机连接日志强制下线会话</li><li>🌈 新增 主机连接日志删除/清理</li><li>🌈 新增 用户操作日志日志删除/清理</li><li>🌈 新增 用户操作日志日志删除/清理</li><li>🔨 优化 用户锁定次数/时间可配置 <code>app.authentication</code></li></ul><p><a href="/open-orion/orion-visor/update/v1.0.1.html">如何升级</a></p><h3 id="v1-0-0" tabindex="-1">v1.0.0 <a class="header-anchor" href="#v1-0-0" aria-label="Permalink to &quot;v1.0.0&quot;">​</a></h3><p><code>2024-03-01</code> <code>release</code></p><ul><li>🌈 新增 用户自定义终端标签颜色</li><li>🔨 拓展数据模块添加缓存</li></ul><p><a href="/open-orion/orion-visor/update/v1.0.0.html">如何升级</a></p><h3 id="v1-0-0-beta-1" tabindex="-1">v1.0.0-beta.1 <a class="header-anchor" href="#v1-0-0-beta-1" aria-label="Permalink to &quot;v1.0.0-beta.1&quot;">​</a></h3><p><code>2024-02-28</code> <code>preview</code></p><ul><li>🌈 主机管理</li><li>🌈 主机密钥</li><li>🌈 主机身份</li><li>🌈 资产授权</li><li>🌈 主机终端</li><li>🌈 连接日志</li><li>🌈 角色管理</li><li>🌈 用户管理</li><li>🌈 操作日志</li><li>🌈 系统菜单</li><li>🌈 数据字典项</li><li>🌈 数据字典值</li></ul>',64),c=[d];function r(t,n,h,s,p,u){return e(),i("div",null,c)}const b=l(a,[["render",r]]);export{m as __pageData,b as default};
