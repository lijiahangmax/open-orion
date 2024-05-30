import{_ as e,c as a,o as r,a4 as t,a3 as s}from"./chunks/framework.BZHtyOwd.js";const g=JSON.parse('{"title":"总体架构","description":"","frontmatter":{"title":"总体架构"},"headers":[],"relativePath":"support/arch.md","filePath":"support/arch.md"}'),o={name:"support/arch.md"},n=t('<h3 id="总体架构" tabindex="-1">总体架构 <a class="header-anchor" href="#总体架构" aria-label="Permalink to &quot;总体架构&quot;">​</a></h3><p><img src="'+s+'" alt="总体架构" title="总体架构"></p><h3 id="监控指标文件存储在哪里" tabindex="-1">监控指标文件存储在哪里? <a class="header-anchor" href="#监控指标文件存储在哪里" aria-label="Permalink to &quot;监控指标文件存储在哪里?&quot;">​</a></h3><p>监控指标数据会存储在文件中。<br> 其中又分为了秒级数据和时级别数据, 在查询时会根据请求的数据粒度进行文件访问, 达到大范围高性能查询。</p><h3 id="agent-和-server-是如何通信的" tabindex="-1">agent 和 server 是如何通信的? <a class="header-anchor" href="#agent-和-server-是如何通信的" aria-label="Permalink to &quot;agent 和 server 是如何通信的?&quot;">​</a></h3><p>agent 和 server 是通过 http 进行双向通信的。<br> agent 在启动时会推送启动状态到 server, 同时 server 更新运行状态。<br> agent 在启动后会通过 server 暴露的 api 查询报警配置, 从而设置到 alarmContext 中。<br> server 修改了报警配置后, 会通过 agent 暴露的 api 通知报警配置。<br> server 在查询监控指标时, 调用 agent api, agent 会根据统计的数据粒度进行查询不同范围的指标文件。</p>',6),i=[n];function c(_,p,h,l,d,m){return r(),a("div",null,i)}const v=e(o,[["render",c]]);export{g as __pageData,v as default};
