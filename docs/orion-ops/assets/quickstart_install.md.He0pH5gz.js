import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.ColA7jXW.js";const m=JSON.parse('{"title":"普通安装","description":"","frontmatter":{"title":"普通安装"},"headers":[],"relativePath":"quickstart/install.md","filePath":"quickstart/install.md"}'),i={name:"quickstart/install.md"},e=p(`<h3 id="所需环境" tabindex="-1">所需环境 <a class="header-anchor" href="#所需环境" aria-label="Permalink to &quot;所需环境&quot;">​</a></h3><ul><li>jdk 1.8</li><li>mysql 8.0.+</li><li>redis 6.0.+</li><li>node 16.16.+ (16及以下, 16+不可以)</li><li>maven 3.5.+</li><li>nginx</li></ul><p>⚡ maven 推荐使用阿里云 mirror<br> ⚡ npm 建议使用淘宝镜像 <code>npm config set registry https://registry.npmmirror.com/</code><br> ⚡ yarn 建议使用淘宝镜像 <code>yarn config set registry https://registry.npmmirror.com/</code></p><h3 id="拉取代码" tabindex="-1">拉取代码 <a class="header-anchor" href="#拉取代码" aria-label="Permalink to &quot;拉取代码&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># github</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/lijiahangmax/orion-ops</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gitee</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/lijiahangmax/orion-ops</span></span></code></pre></div><h3 id="初始化数据库" tabindex="-1">初始化数据库 <a class="header-anchor" href="#初始化数据库" aria-label="Permalink to &quot;初始化数据库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 执行DDL脚本</span></span>
<span class="line"><span>orion-ops/sql/init-1-schema.sql</span></span>
<span class="line"><span># 执行默认数据脚本 [默认用户, 默认应用环境, 常用命令模板] (可选)</span></span>
<span class="line"><span>orion-ops/sql/init-2-data.sql</span></span></code></pre></div><h3 id="构建后端代码" tabindex="-1">构建后端代码 <a class="header-anchor" href="#构建后端代码" aria-label="Permalink to &quot;构建后端代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改配置文件 (mysql, redis)</span></span>
<span class="line"><span>orion-ops/orion-ops-api/orion-ops-web/src/main/resources/application-prod.properties</span></span>
<span class="line"><span># 修改全局加密密钥, 为了密码安全考虑 (推荐修改)</span></span>
<span class="line"><span>orion-ops/orion-ops-api/orion-ops-web/src/main/resources/application.properties value.mix.secret.key</span></span>
<span class="line"><span># 进入代码目录</span></span>
<span class="line"><span>cd orion-ops/orion-ops-api</span></span>
<span class="line"><span># 编译</span></span>
<span class="line"><span>mvn -U clean install -DskipTests</span></span></code></pre></div><h3 id="构建前端代码" tabindex="-1">构建前端代码 <a class="header-anchor" href="#构建前端代码" aria-label="Permalink to &quot;构建前端代码&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入代码目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> orion-ops/orion-ops-vue</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载 yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:prod</span></span></code></pre></div><h3 id="修改-nginx-配置" tabindex="-1">修改 nginx 配置 <a class="header-anchor" href="#修改-nginx-配置" aria-label="Permalink to &quot;修改 nginx 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 是否启动 gzip 压缩</span></span>
<span class="line"><span>    gzip  on;</span></span>
<span class="line"><span>    # 需要压缩的常见静态资源</span></span>
<span class="line"><span>    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span>    # 如果文件大于 1k 就启动压缩</span></span>
<span class="line"><span>    gzip_min_length 1k;</span></span>
<span class="line"><span>    # 缓冲区</span></span>
<span class="line"><span>    gzip_buffers 4 16k;</span></span>
<span class="line"><span>    # 压缩的等级</span></span>
<span class="line"><span>    gzip_comp_level 2;</span></span>
<span class="line"><span>    # access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP  $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /orion/api {</span></span>
<span class="line"><span>        proxy_pass    http://localhost:9119/orion/api;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP  $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     location /orion/keep-alive {</span></span>
<span class="line"><span>        proxy_pass    http://localhost:9119/orion/keep-alive;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>        proxy_read_timeout 3600s;</span></span>
<span class="line"><span>        proxy_send_timeout 3600s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>复制 orion-ops/orion-ops-vue/dist/index.html 到 /usr/share/nginx/html</span></span>
<span class="line"><span>复制 orion-ops/orion-ops-vue/dist 到 /usr/share/nginx/html 并且重命名为 ops</span></span>
<span class="line"><span>复制 orion-ops/orion-ops-api/orion-ops-api/target/orion-ops-web-1.2.6.jar 到 /data/orion</span></span>
<span class="line"><span># 启动后台服务</span></span>
<span class="line"><span>nohup java -jar orion-ops-web-1.2.6.jar --spring.profiles.active=prod --generator-admin &amp;</span></span>
<span class="line"><span># 启动 nginx</span></span>
<span class="line"><span>service nginx start</span></span></code></pre></div><h3 id="测试访问" tabindex="-1">测试访问 <a class="header-anchor" href="#测试访问" aria-label="Permalink to &quot;测试访问&quot;">​</a></h3><p>在浏览器中输入 <a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a> 访问<br> 账号: <code>orionadmin</code><br> 密码: <code>orionadmin</code></p><h3 id="配置宿主机信息" tabindex="-1">配置宿主机信息 <a class="header-anchor" href="#配置宿主机信息" aria-label="Permalink to &quot;配置宿主机信息&quot;">​</a></h3><p>登录后需要配置宿主机 SSH 信息, 直到可以访问<br> 如果是密码登录: 机器管理 &gt; 机器列表 &gt; <code>宿主机</code> &gt; 更多 &gt; 编辑 &gt; 选择认证方式为密码 &gt; 输入密码 &gt; 确定<br> 如果是密钥登陆: 机器管理 &gt; 机器密钥 &gt; 新建<br> 配置完成后测试连接: 机器管理 &gt; 机器列表 &gt; <code>宿主机</code> &gt; 更多 &gt; 测试连接<br> 创建应用环境: 应用管理 &gt; 环境管理 &gt; 添加 (已执行 <code>init-2-data.sql</code> 则可以忽略)</p><h3 id="启动参数" tabindex="-1">启动参数 <a class="header-anchor" href="#启动参数" aria-label="Permalink to &quot;启动参数&quot;">​</a></h3><h4 id="启动项目时提供了一些可选的执行参数" tabindex="-1">启动项目时提供了一些可选的执行参数 <a class="header-anchor" href="#启动项目时提供了一些可选的执行参数" aria-label="Permalink to &quot;启动项目时提供了一些可选的执行参数&quot;">​</a></h4><p>关闭IP过滤器 <code>--disable-ip-filter</code><br> 生成默认管理员账号 <code>--generator-admin</code> 账号: <code>orionadmin</code> 密码: <code>orionadmin</code><br> 重置默认管理员账号 <code>--reset-admin</code> 账号: <code>orionadmin</code> 密码: <code>orionadmin</code></p>`,22),l=[e];function t(o,r,c,h,d,g){return n(),a("div",null,l)}const u=s(i,[["render",t]]);export{m as __pageData,u as default};
