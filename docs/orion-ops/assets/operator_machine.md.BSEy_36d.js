import{_ as t,c as e,o as a,a3 as l}from"./chunks/framework.AACgLkS6.js";const g=JSON.parse('{"title":"机器管理","description":"","frontmatter":{"title":"机器管理"},"headers":[],"relativePath":"operator/machine.md","filePath":"operator/machine.md"}'),n={name:"operator/machine.md"},s=l(`<h3 id="机器列表" tabindex="-1">机器列表 <a class="header-anchor" href="#机器列表" aria-label="Permalink to &quot;机器列表&quot;">​</a></h3><p>管理和维护可操作的机器, 项目初始化后会生成一台默认机器 (本机) 可以称为 <code>宿主机</code>, 需要手动设置 <code>ssh</code> 密码或添加密钥。<br> 这里可以打开 WebTerminal, WebSftp。</p><p>⚡ 按住 <code>Ctrl</code> 点击 <code>Terminal</code> 可以打开一个新页面, 否则将会打开一个模态框。<br> ⚡ 按住 <code>Ctrl</code> 点击 <code>sftp</code> 可以打开一个新页面, 否则将会在当前页面跳转。</p><h3 id="机器监控" tabindex="-1">机器监控 <a class="header-anchor" href="#机器监控" aria-label="Permalink to &quot;机器监控&quot;">​</a></h3><p>配置已启动的机器监控, 具有可视化图形以及数据粒度和时间区间的选择<br> 统计的指标有 <code>CPU监控</code> <code>内存监控</code> <code>网络带宽监控</code> <code>硬盘使用监控</code></p><p><a href="https://github.com/lijiahangmax/orion-ops-extension-plugins" target="_blank" rel="noreferrer">插件仓库</a> <a href="https://lijiahangmax.github.io/orion-ops-extension-plugins/#/machine-monitor-agent/quickstart-download" target="_blank" rel="noreferrer">安装文档</a><br> ⚡ <strong>如果自动安装失败可以参考这里</strong> <a href="https://lijiahangmax.github.io/orion-ops-extension-plugins/#/machine-monitor-agent/faq" target="_blank" rel="noreferrer">常见问题</a></p><ul><li>安装: 批量安装本页机器的监控插件</li><li>升级: 批量升级本页机器的监控插件</li><li>检测: 批量检测本页机器的监控状态</li><li>监控: 进入机器监控页面</li><li>插件配置: 配置监控插件的地址和请求头</li><li>报警配置: 配置机器监控的报警类型以及报警联系组</li><li>报警记录: 查看当前机器的报警历史记录</li></ul><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>配置机器环境变量, 这个环境变量并不会设置到远程机器内, 而是运行命令时动态替换命令内容。<br><code>批量执行</code> <code>调度任务</code> <code>应用发布</code> <code>应用构建</code> 都可以用到, 设计的初衷是每台机器的配置不一样, 不同的机器执行相同的命令时设置不同的参数。<br> 系统提供了几个默认的机器变量, 执行命令时使用 <code>@{machine.xxx}</code> 来替换。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">machine_id</td><td style="text-align:left;">1</td><td style="text-align:left;">机器id</td></tr><tr><td style="text-align:left;">machine_name</td><td style="text-align:left;">server1</td><td style="text-align:left;">机器名称</td></tr><tr><td style="text-align:left;">machine_tag</td><td style="text-align:left;">host</td><td style="text-align:left;">机器标签</td></tr><tr><td style="text-align:left;">machine_host</td><td style="text-align:left;">127.0.0.1</td><td style="text-align:left;">机器主机</td></tr><tr><td style="text-align:left;">machine_port</td><td style="text-align:left;">22</td><td style="text-align:left;">机器端口</td></tr><tr><td style="text-align:left;">machine_username</td><td style="text-align:left;">root</td><td style="text-align:left;">机器用户名</td></tr></tbody></table><blockquote><h5 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h5></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 当前机器 名称: dev-server1</span></span>
<span class="line"><span># 环境变量 dumpPath: /usr/local/oom</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 执行命令</span></span>
<span class="line"><span>echo @{machine.machine_name}</span></span>
<span class="line"><span>java -jar demo.jar -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=@{machine.dumpPath}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 命令在执行前会被替换为</span></span>
<span class="line"><span>echo dev-server1</span></span>
<span class="line"><span>java -jar demo.jar -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/usr/local/oom</span></span></code></pre></div><p>机器创建后系统会生成几个默认的环境变量, 用于部分功能的交互。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">sftp_charset</td><td style="text-align:left;">UTF-8</td><td style="text-align:left;">sftp 文件名称编码格式</td></tr><tr><td style="text-align:left;">tail_charset</td><td style="text-align:left;">UTF-8</td><td style="text-align:left;">文件追踪编码格式</td></tr><tr><td style="text-align:left;">tail_offset</td><td style="text-align:left;">400</td><td style="text-align:left;">文件追踪偏移量(行)</td></tr><tr><td style="text-align:left;">tail_default_command</td><td style="text-align:left;">tail -f -n @{offset} &#39;@{file}&#39;</td><td style="text-align:left;">文件追踪默认命令</td></tr></tbody></table><p>⚡ 注意: 切换视图后保存只会增量保存, 并不会删除变量</p><h3 id="机器密钥" tabindex="-1">机器密钥 <a class="header-anchor" href="#机器密钥" aria-label="Permalink to &quot;机器密钥&quot;">​</a></h3><p>管理和维护可操作机器 SSH 密钥</p><h3 id="代理列表" tabindex="-1">代理列表 <a class="header-anchor" href="#代理列表" aria-label="Permalink to &quot;代理列表&quot;">​</a></h3><p>管理和维护可操作机器 SSH 连接代理</p><h3 id="终端日志" tabindex="-1">终端日志 <a class="header-anchor" href="#终端日志" aria-label="Permalink to &quot;终端日志&quot;">​</a></h3><p>查看用户连接 Terminal 的日志以及进行终端录屏回放</p><h3 id="终端控制" tabindex="-1">终端控制 <a class="header-anchor" href="#终端控制" aria-label="Permalink to &quot;终端控制&quot;">​</a></h3><p><code>管理员菜单</code></p><p>查看当前所有已连接的终端会话, 具体到用户和机器, 可强制下线终端, 以及只读、读写接入终端监视</p>`,24),i=[s];function d(r,o,c,p,h,f){return a(),e("div",null,i)}const x=t(n,[["render",d]]);export{g as __pageData,x as default};
