import{_ as a,c as e,o,a4 as s}from"./chunks/framework.BZHtyOwd.js";const b=JSON.parse('{"title":"下载","description":"","frontmatter":{"title":"下载"},"headers":[],"relativePath":"quickstart/download.md","filePath":"quickstart/download.md"}'),n={name:"quickstart/download.md"},t=s(`<h3 id="下载插件包" tabindex="-1">下载插件包 <a class="header-anchor" href="#下载插件包" aria-label="Permalink to &quot;下载插件包&quot;">​</a></h3><p>下载地址: <a href="http://116.62.194.246/lib/machine-monitor-agent-latest.jar" target="_blank" rel="noreferrer">http://116.62.194.246/lib/machine-monitor-agent-latest.jar</a><br> 备用地址: <a href="http://101.43.254.243/lib/machine-monitor-agent-latest.jar" target="_blank" rel="noreferrer">http://101.43.254.243/lib/machine-monitor-agent-latest.jar</a><br> 如果无法下载请联系我或 <a href="./build.html">手动构建</a></p><h3 id="修改插件配置" tabindex="-1">修改插件配置 <a class="header-anchor" href="#修改插件配置" aria-label="Permalink to &quot;修改插件配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>解压刚下载好的压缩包: </span></span>
<span class="line"><span>修改 machine-monitor-agent-latest.jar/BOOT-INF/classes/application-prod.properties 后重新压缩</span></span>
<span class="line"><span></span></span>
<span class="line"><span>collect.period.second     是数据采集周期, 默认30s</span></span>
<span class="line"><span>agent.access.secret       是对外暴露服务的请求密钥, 建议修改 修改后需要与 orion-ops-api 配置中的 machine.monitor.default.access.token 保持一致</span></span>
<span class="line"><span>orion.ops.access.host     是 orion-ops 暴露服务的请求路径, 确保地址正确否则将无法进行报警通知  </span></span>
<span class="line"><span>orion.ops.access.secret   是 orion-ops 暴露服务的请求密钥, 必须和 orion-ops-api 配置中的 expose.api.access.secret 保持一致</span></span></code></pre></div><h3 id="复制插件包" tabindex="-1">复制插件包 <a class="header-anchor" href="#复制插件包" aria-label="Permalink to &quot;复制插件包&quot;">​</a></h3><p>将下载的包复制到部署 orion-ops 的机器中 如: <code>/root/lib/machine-monitor-agent-latest.jar</code></p><h3 id="修改-orion-ops-系统配置" tabindex="-1">修改 orion-ops 系统配置 <a class="header-anchor" href="#修改-orion-ops-系统配置" aria-label="Permalink to &quot;修改 orion-ops 系统配置&quot;">​</a></h3><p>访问 <code>orion-ops</code> &gt; <code>系统管理</code> &gt; <code>系统变量</code><br> 修改环境变量 <code>machine_monitor_agent_path</code> 为 第三步操作的绝对路径</p><h3 id="安装插件包" tabindex="-1">安装插件包 <a class="header-anchor" href="#安装插件包" aria-label="Permalink to &quot;安装插件包&quot;">​</a></h3><p>访问 <code>orion-ops</code> &gt; <code>机器管理</code> &gt; <code>机器监控</code><br> 如果修改了配置 <code>agent.access.secret</code> 点击插件配置修改 <code>accessToken</code> 后点击 <code>安装</code> 即可</p>`,10),r=[t];function c(i,p,l,d,h,m){return o(),e("div",null,r)}const u=a(n,[["render",c]]);export{b as __pageData,u as default};