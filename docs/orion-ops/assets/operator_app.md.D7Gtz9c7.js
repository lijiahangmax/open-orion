import{_ as t,c as e,o as l,a3 as d}from"./chunks/framework.AACgLkS6.js";const h=JSON.parse('{"title":"应用管理","description":"","frontmatter":{"title":"应用管理"},"headers":[],"relativePath":"operator/app.md","filePath":"operator/app.md"}'),a={name:"operator/app.md"},s=d(`<h3 id="环境管理" tabindex="-1">环境管理 <a class="header-anchor" href="#环境管理" aria-label="Permalink to &quot;环境管理&quot;">​</a></h3><p>配置应用环境, 如: 开发环境、测试环境、生产环境, 从而做到应用在不同环境的有不同的配置, 操作相互隔离。</p><h3 id="应用列表" tabindex="-1">应用列表 <a class="header-anchor" href="#应用列表" aria-label="Permalink to &quot;应用列表&quot;">​</a></h3><p>管理和维护应用, 每个应用在不同的环境都可以有不同的配置。</p><ul><li>配置: 配置应用的基本信息, 构建操作, 发布操作</li><li>构建: 执行应用构建操作</li><li>发布: 创建应用发布任务 <code>CI/CD</code> &gt; <code>应用发布</code></li><li>同步: 同步构建发布配置到其他环境</li><li>复制: 复制当前应用, 会复制应用的环境变量, 构建配置, 发布配置</li></ul><h3 id="应用配置" tabindex="-1">应用配置 <a class="header-anchor" href="#应用配置" aria-label="Permalink to &quot;应用配置&quot;">​</a></h3><p>配置应用的基本信息, 以及不同环境下的构建与发布配置。<br> 配置时 <code>机器环境变量</code> <code>系统环境变量</code> <code>应用环境变量</code> 都可以在命令执行前进行替换。<br> ⚡ 注意: 如果不配置应用的构建与发布配置, 则不能进行构建 (CI) 和发布 (CD) 操作</p><p>应用在配置后系统会将部分配置信息存储到应用环境变量中。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">bundle_path</td><td style="text-align:left;">target/build.jar</td><td style="text-align:left;">宿主机构建产物路径 (绝对路径/基于版本仓库的相对路径)</td></tr><tr><td style="text-align:left;">transfer_path</td><td style="text-align:left;">/data/projects/demo.jar</td><td style="text-align:left;">产物传输目标机器绝对路径</td></tr><tr><td style="text-align:left;">transfer_mode</td><td style="text-align:left;">sftp</td><td style="text-align:left;">产物传输方式 (sftp/scp)</td></tr><tr><td style="text-align:left;">transfer_file_type</td><td style="text-align:left;">normal</td><td style="text-align:left;">产物传输文件类型 (normal/zip)</td></tr><tr><td style="text-align:left;">release_serial</td><td style="text-align:left;">parallel</td><td style="text-align:left;">发布序列方式 (serial/parallel)</td></tr><tr><td style="text-align:left;">exception_handler</td><td style="text-align:left;">skip_all</td><td style="text-align:left;">异常处理类型 (skip_all/skip_error)</td></tr></tbody></table><br><blockquote><h5 id="构建配置" tabindex="-1">构建配置 <a class="header-anchor" href="#构建配置" aria-label="Permalink to &quot;构建配置&quot;">​</a></h5></blockquote><p>设计思路: 应用在发布之前需要先由宿主机进行构建, 生成一个可发布的产物, 发布时需要基于该产物进行发布操作。</p><p><code>构建产物路径</code> 就是构建生成的产物文件路径, 这个路径可以是宿主机的<code>绝对路径</code> 或 基于版本仓库的<code>相对路径</code> (如果配置了版本仓库)。</p><ul><li><p>vue 项目构建后会生成一个 dist 文件夹, 这个路径就应该是 <code>dist</code><br> 如果构建完成后执行用 tar 执行压缩命令, 将 dist 文件夹压缩为 dist.tar 这里的路径就是 <code>dist.tar</code></p></li><li><p>spring boot 项目构建后会生成一个可执行的 jar 文件, 这个路径就应该是 <code>target/xxx.jar</code></p></li><li><p>可能还会有其他更复杂的情况, 如: 构建完成后会在 a 文件夹生成一个文件, 在 b 文件夹生成一个文件夹。<br> 这之后就应该在构建完成后执行 <code>mv</code> 命令, 移动到同一个文件夹, <code>构建产物路径</code> 就应该设置为移动的这个文件夹</p></li><li><p>如果构建完成后不会生成产物, 或者已经将文件传输过了, 这时候这个路径就随便设置一个存在的文件即可</p></li></ul><p>⚡ 注意: 如果产物路径是一个文件夹, 构建完成后会自动将次文件夹进行 <code>zip</code> 压缩, 如设置的路径为 <code>dist</code> 则会生成一个 <code>dist.zip</code><br> ⚡ 注意: 构建产物路径中不能包含 <code>\\</code> 应该用 <code>/</code> 替换。<br> ⚡ 注意: 执行结果的成功与否是通过执行命令的 <code>exitcode</code> 是否为 <code>0</code> 来判断的。</p><p>如果应用配置了版本仓库, 会有 <code>添加检出操作</code> 这个选项 (git clone)。</p><p>构建时系统提供了几个默认的变量, 在构建操作的命令中可以使用 <code>@{build.xxx}</code> 来替换。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">build_id</td><td style="text-align:left;">10</td><td style="text-align:left;">构建id (数据库自增)</td></tr><tr><td style="text-align:left;">build_seq</td><td style="text-align:left;">1</td><td style="text-align:left;">当前环境该应用的构建序列</td></tr><tr><td style="text-align:left;">repo_home</td><td style="text-align:left;">/orion/repo/2/10</td><td style="text-align:left;">当前应用配置的版本仓库的 <code>clone</code> 目录 (如果有)</td></tr><tr><td style="text-align:left;">repo_event_home</td><td style="text-align:left;">/orion/repo/event/2</td><td style="text-align:left;">版本仓库的 (获取分支/commit) 目录 (只有一个)</td></tr><tr><td style="text-align:left;">branch</td><td style="text-align:left;">origin/master</td><td style="text-align:left;">构建所选的 <code>branch</code></td></tr><tr><td style="text-align:left;">commit</td><td style="text-align:left;">8ab50bada8525f6670c36114ad46baa70efda820</td><td style="text-align:left;">构建所选的 <code>commit</code></td></tr><tr><td style="text-align:left;">bundle_path</td><td style="text-align:left;">/root/orion_ops/dist/build/128/dist</td><td style="text-align:left;">构建完成后产物存储路径</td></tr><tr><td style="text-align:left;">bundle_zip_path</td><td style="text-align:left;">/root/orion_ops/dist/build/128/dist.zip</td><td style="text-align:left;">构建完成后产物 zip文件 存储路径 (如果有)</td></tr></tbody></table><br><blockquote><h5 id="发布配置" tabindex="-1">发布配置 <a class="header-anchor" href="#发布配置" aria-label="Permalink to &quot;发布配置&quot;">​</a></h5></blockquote><p>设计思路: 发布的应用可能是以集群的形式发布的, 可能会有多台机器同时发布一个应用, 基于选择的构建版本, 进行发布操作。</p><p><code>文件传输方式</code> 可选择使用 <code>SFTP</code> / <code>SCP</code> 来分发产物文件。<br><code>文件传输路径</code> 是将选择的构建版本生成的产物分发到发布机器后绝对路径。</p><p>如果构建产物是一个文件 <code>build.jar</code><br> 文件传输类型选择 <code>文件/文件夹</code> 文件传输路径可以配置为 <code>/data/projects/demo.jar</code></p><p>如果构建产物是一个文件夹 <code>dist</code><br> 当 文件传输类型 选择 <code>文件/文件夹</code> 文件传输路径 可以配置为 <code>/data/projects/dist</code><br> 当 文件传输类型 选择 <code>zip</code> 文件传输路径 可以配置为 <code>/data/projects/dist.zip</code> 然后在进行解压。</p><p>当 <code>产物传输方式</code> 选择 <code>SCP</code> 时可配置 <code>scp 传输命令</code><br> 默认命令为 <code>scp &quot;@{bundle_path}&quot; @{target_username}@@{target_host}:&quot;@{transfer_path}&quot;</code>, 使用 <code>@{xxx}</code> 替换变量。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">bundle_path</td><td style="text-align:left;">/root/orion_ops/dist/build/128/build.jar</td><td style="text-align:left;">构建完成后产物存储路径</td></tr><tr><td style="text-align:left;">transfer_path</td><td style="text-align:left;">/data/projects/demo.jar</td><td style="text-align:left;">产物传输路径</td></tr><tr><td style="text-align:left;">target_username</td><td style="text-align:left;">root</td><td style="text-align:left;">目标机器用户</td></tr><tr><td style="text-align:left;">target_host</td><td style="text-align:left;">192.168.5.65</td><td style="text-align:left;">目标机器主机</td></tr></tbody></table><p>⚡ <strong>注意</strong>: 传输时需要确保传输目录文件不存在后再进行传输操作, 否则可能会导致数据无法传输, 通常在传输之前需要配置删除旧版本包命令!<br> 这里更推荐使用 <code>SCP</code> 的方式来传输产物文件, 速度更快, 以命令的形式配置, 更加灵活。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>当然这里也可以写死, 以上述例子命令执行时会替换为</span></span>
<span class="line"><span>scp &quot;/root/orion_ops/dist/build/128/build.jar&quot; root@192.168.5.65:&quot;/data/projects/demo.jar&quot;</span></span></code></pre></div><br><p>应用发布时系统提供了几个默认的变量, 在发布操作的命令中可以使用 <code>@{release.xxx}</code> 来替换。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">build_id</td><td style="text-align:left;">128</td><td style="text-align:left;">发布所选的构建版本的id</td></tr><tr><td style="text-align:left;">build_seq</td><td style="text-align:left;">10</td><td style="text-align:left;">发布所选的构建版本的序列</td></tr><tr><td style="text-align:left;">branch</td><td style="text-align:left;">origin/master</td><td style="text-align:left;">发布所选的构建版本的 <code>branch</code></td></tr><tr><td style="text-align:left;">commit</td><td style="text-align:left;">8ab50bada8525f6670c36114ad46baa70efda820</td><td style="text-align:left;">发布所选的构建版本的 <code>commit</code></td></tr><tr><td style="text-align:left;">bundle_path</td><td style="text-align:left;">/root/orion_ops/dist/build/128/build.jar</td><td style="text-align:left;">发布所选的构建版本的产物路径</td></tr><tr><td style="text-align:left;">release_id</td><td style="text-align:left;">10</td><td style="text-align:left;">发布id</td></tr><tr><td style="text-align:left;">release_title</td><td style="text-align:left;">发布应用</td><td style="text-align:left;">发布标题</td></tr><tr><td style="text-align:left;">transfer_path</td><td style="text-align:left;">/data/projects/demo.jar</td><td style="text-align:left;">产物传输路径</td></tr></tbody></table><br><p>⚡ 注意: 产物传输路径中不能包含 <code>\\</code> 应该用 <code>/</code> 替换。<br> ⚡ 注意: 产物传输方式选择 <code>scp</code> 需要建立宿主机与目标机器 <code>ssh</code> 免密登录。<br> ⚡ 注意: 执行 <code>scp</code> 命令 transfer_path 如果包含空格执行时会自动转义。<br> ⚡ 注意: 执行结果的成功与否是通过执行命令的 <code>exitcode</code> 是否为 <code>0</code> 来判断的。</p><h3 id="流水线配置" tabindex="-1">流水线配置 <a class="header-anchor" href="#流水线配置" aria-label="Permalink to &quot;流水线配置&quot;">​</a></h3><p>设计思路: 以流水线的形式执行应用构建及发布, 一个流水线任务同时执行项目的所有模块的构建以及发布。</p><ul><li>执行: 创建流水线任务 <code>CI/CD</code> &gt; <code>流水线任务</code></li><li>配置: 配置流水线执行操作</li></ul><p>⚡ 只有 <code>已配置</code> 的应用才可以设置流水线操作。</p><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>配置不同环境的应用环境变量, 不同环境之间的变量是相互隔离的。<br> 系统提供了几个默认的应用变量, 执行命令时使用 <code>@{app.xxx}</code> 来替换。</p><table><thead><tr><th style="text-align:left;">key</th><th style="text-align:left;">示例</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">app_id</td><td style="text-align:left;">1</td><td style="text-align:left;">应用id</td></tr><tr><td style="text-align:left;">app_name</td><td style="text-align:left;">订单服务</td><td style="text-align:left;">应用名称</td></tr><tr><td style="text-align:left;">app_tag</td><td style="text-align:left;">order</td><td style="text-align:left;">应用标签</td></tr><tr><td style="text-align:left;">profile_id</td><td style="text-align:left;">1</td><td style="text-align:left;">应用环境id</td></tr><tr><td style="text-align:left;">profile_name</td><td style="text-align:left;">开发环境</td><td style="text-align:left;">应用环境名称</td></tr><tr><td style="text-align:left;">profile_tag</td><td style="text-align:left;">dev</td><td style="text-align:left;">应用环境标签</td></tr></tbody></table><blockquote><h5 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h5></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 当前应用 名称: 订单服务</span></span>
<span class="line"><span># 当前应用环境 名称: 开发环境 tag: dev</span></span>
<span class="line"><span># 应用环境变量 xmx: 128m    xms: 64m</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 执行命令</span></span>
<span class="line"><span>echo @{app.app_name}</span></span>
<span class="line"><span>echo @{app.profile_name}</span></span>
<span class="line"><span>java -jar demo.jar --spring.profiles.active=@{app.profile_tag} -Xmx@{app.xmx} -Xms@{app.xms}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 命令在执行前会被替换为</span></span>
<span class="line"><span>echo 订单服务</span></span>
<span class="line"><span>echo 开发环境</span></span>
<span class="line"><span>java -jar demo.jar --spring.profiles.active=dev  -Xmx128m -Xms64m</span></span></code></pre></div><p>⚡ 注意: 切换视图后保存只会增量保存, 并不会删除变量</p><h3 id="版本仓库" tabindex="-1">版本仓库 <a class="header-anchor" href="#版本仓库" aria-label="Permalink to &quot;版本仓库&quot;">​</a></h3><p>配置应用的版本仓库, 仅支持 <code>git</code>, 用于构建时选择构建的 <code>branch</code> 以及 <code>commit</code>。<br> 可以通过 <code>密码</code> 或 <code>令牌</code> 方式导入仓库。</p><ul><li>初始化: 初始化版本仓库, 验证密码或者token <code>repo_event_home</code></li><li>重新初始化: 重新初始化版本仓库 <code>repo_event_home</code></li></ul>`,46),o=[s];function i(n,r,c,p,x,f){return l(),e("div",null,o)}const y=t(a,[["render",i]]);export{h as __pageData,y as default};
