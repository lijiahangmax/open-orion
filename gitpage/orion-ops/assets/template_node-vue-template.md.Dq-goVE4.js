import{_ as a,c as s,o as e,a3 as n,ad as t,ae as p,af as i,ag as l}from"./chunks/framework.ColA7jXW.js";const k=JSON.parse('{"title":"vue 项目模板","description":"","frontmatter":{"title":"vue 项目模板"},"headers":[],"relativePath":"template/node-vue-template.md","filePath":"template/node-vue-template.md"}'),d={name:"template/node-vue-template.md"},o=n('<h3 id="vue-项目模板" tabindex="-1">vue 项目模板 <a class="header-anchor" href="#vue-项目模板" aria-label="Permalink to &quot;vue 项目模板&quot;">​</a></h3><p>以一个普通的 npm 构建的 vue 项目为例<br> 构建操作为: <code>checkout</code> &gt; <code>npm i</code> &gt; <code>npm run build</code><br> 发布操作为: <code>删除旧版文件</code> &gt; <code>传输文件</code> &gt; <code>复制到 nginx 静态目录</code> &gt; <code>启动nginx</code></p><h3 id="构建配置预览" tabindex="-1">构建配置预览 <a class="header-anchor" href="#构建配置预览" aria-label="Permalink to &quot;构建配置预览&quot;">​</a></h3><p><img src="'+t+'" alt="构建配置1" title="构建配置1"><img src="'+p+'" alt="构建配置2" title="构建配置2"></p><h3 id="发布配置预览" tabindex="-1">发布配置预览 <a class="header-anchor" href="#发布配置预览" aria-label="Permalink to &quot;发布配置预览&quot;">​</a></h3><p><img src="'+i+'" alt="发布配置1" title="发布配置1"><img src="'+l+`" alt="发布配置2" title="发布配置2"></p><h3 id="构建配置" tabindex="-1">构建配置 <a class="header-anchor" href="#构建配置" aria-label="Permalink to &quot;构建配置&quot;">​</a></h3><h4 id="构建产物路径" tabindex="-1">构建产物路径 <a class="header-anchor" href="#构建产物路径" aria-label="Permalink to &quot;构建产物路径&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>构建产物路径一般是在代码目录下的 dist 目录</span></span>
<span class="line"><span>dist</span></span></code></pre></div><h4 id="构建操作1-创建公共node-modules" tabindex="-1">构建操作1 创建公共node_modules <a class="header-anchor" href="#构建操作1-创建公共node-modules" aria-label="Permalink to &quot;构建操作1 创建公共node_modules&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>给不同环境下的每个应用创建公共 node_modules 目录, 以后每次构建都通过软链接的形式引用, 避免每次构建时都要全量安装依赖</span></span>
<span class="line"><span>这里的 @{app.profile_id} 代表应用环境id, @{app.app_id} 代表应用id, 在运行时会动态替换</span></span>
<span class="line"><span>mkdir -p /data/public/@{app.profile_id}/@{app.app_id}/node_modules</span></span></code></pre></div><h4 id="构建操作2-检出代码" tabindex="-1">构建操作2 检出代码 <a class="header-anchor" href="#构建操作2-检出代码" aria-label="Permalink to &quot;构建操作2 检出代码&quot;">​</a></h4><p>无需操作</p><h4 id="构建操作3-构建应用" tabindex="-1">构建操作3 构建应用 <a class="header-anchor" href="#构建操作3-构建应用" aria-label="Permalink to &quot;构建操作3 构建应用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source /etc/profile</span></span>
<span class="line"><span>cd @{build.repo_home}</span></span>
<span class="line"><span># 软连接 node_modules</span></span>
<span class="line"><span>ln -s /data/public/@{app.profile_id}/@{app.app_id}/node_modules .</span></span>
<span class="line"><span># 构建</span></span>
<span class="line"><span>echo &#39;开始构建&#39;</span></span>
<span class="line"><span>cnpm i</span></span>
<span class="line"><span>cnpm run build</span></span>
<span class="line"><span>echo &#39;构建完成&#39;</span></span></code></pre></div><h3 id="发布配置" tabindex="-1">发布配置 <a class="header-anchor" href="#发布配置" aria-label="Permalink to &quot;发布配置&quot;">​</a></h3><h4 id="发布操作1-删除原有文件" tabindex="-1">发布操作1 删除原有文件 <a class="header-anchor" href="#发布操作1-删除原有文件" aria-label="Permalink to &quot;发布操作1 删除原有文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>distPath=/data/dist-web/dist</span></span>
<span class="line"><span>if [ -d &quot;$distPath&quot; ]; then</span></span>
<span class="line"><span> rm -rf $distPath</span></span>
<span class="line"><span> echo &#39;删除/data/dist-web/dist&#39;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><h4 id="发布操作2-传输文件" tabindex="-1">发布操作2 传输文件 <a class="header-anchor" href="#发布操作2-传输文件" aria-label="Permalink to &quot;发布操作2 传输文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>设置一个传输产物文件的绝对路径</span></span>
<span class="line"><span>/data/dist-web/dist</span></span></code></pre></div><h4 id="发布操作3-复制到-nginx-目录并且重启" tabindex="-1">发布操作3 复制到 nginx 目录并且重启 <a class="header-anchor" href="#发布操作3-复制到-nginx-目录并且重启" aria-label="Permalink to &quot;发布操作3 复制到 nginx 目录并且重启&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>target=/data/orion/web/test1</span></span>
<span class="line"><span>if [ -d $target ]; then</span></span>
<span class="line"><span>  rm -rf $target</span></span>
<span class="line"><span>fi </span></span>
<span class="line"><span>mkdir $target</span></span>
<span class="line"><span>cp -r /data/dist-web/dist/* $target</span></span>
<span class="line"><span>service nginx restart</span></span></code></pre></div>`,22),c=[o];function r(h,u,b,m,g,_){return e(),s("div",null,c)}const f=a(d,[["render",r]]);export{k as __pageData,f as default};