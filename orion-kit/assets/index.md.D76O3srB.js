import{_ as t,c as i,o as s,a3 as a}from"./chunks/framework.Bm2bam-B.js";const c=JSON.parse('{"title":"首页","description":"","frontmatter":{"layout":"home","title":"首页","hero":{"name":"Orion Kit","text":"一个功能强大, 覆盖面广的工具类库","tagline":"让你的开发无须编写重复的底层代码, 提高开发效率, 让你的代码更加简练、易读, 稳定且优雅。","actions":[{"theme":"brand","text":"开始使用","link":"/quickstart/start"},{"theme":"brand","text":"javaDoc","link":"https://apidoc.gitee.com/lijiahangmax/orion-kit/"},{"theme":"alt","text":"Gitee","link":"https://gitee.com/lijiahangmax/orion-kit"},{"theme":"alt","text":"GitHub","link":"https://github.com/lijiahangmax/orion-kit"}]},"features":[{"icon":"🧵","title":"lang 模块","details":"底层核心模块 集合、IO、反射、转换、日期、异常、加密、编码, 函数等"},{"icon":"✉","title":"ext 模块","details":"拓展模块 IP位置、邮件、process、tail、git, watch等"},{"icon":"📃","title":"office 模块","details":"数据处理模块 csv, excel导入导出以及相互转化等"},{"icon":"⚡","title":"http 模块","details":"http模块 OkHttp、HttpClient、jsup的统一封装, UA生成器等"},{"icon":"📫","title":"net 模块","details":"网络交互模块 SSH、SFTP、FTP, Socket的简单封装"},{"icon":"🎟","title":"generator 模块","details":"随机信息生成器模块 包含各式各样的随机数据生成器"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),e={name:"index.md"},l=a(`<h2 id="模块化引用" tabindex="-1">模块化引用 <a class="header-anchor" href="#模块化引用" aria-label="Permalink to &quot;模块化引用&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 模块化引用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;io.github.lijiahangmax&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;模块名称&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;1.0.8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="引用全部" tabindex="-1">引用全部 <a class="header-anchor" href="#引用全部" aria-label="Permalink to &quot;引用全部&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 如果想引用所有可以直接引入 orion-all --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;io.github.lijiahangmax&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;orion-all&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;1.0.8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="功能模块" tabindex="-1">功能模块 <a class="header-anchor" href="#功能模块" aria-label="Permalink to &quot;功能模块&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">模块</th><th style="text-align:left;">数量</th></tr></thead><tbody><tr><td style="text-align:left;">orion-lang</td><td style="text-align:left;">底层核心模块 集合、IO、反射、转换、日期、异常、加密、编码, 函数等</td></tr><tr><td style="text-align:left;">orion-ext</td><td style="text-align:left;">拓展模块 IP位置、邮件、process、tail、git, watch等</td></tr><tr><td style="text-align:left;">orion-office</td><td style="text-align:left;">数据处理模块 csv, excel导入导出以及相互转化等</td></tr><tr><td style="text-align:left;">orion-log</td><td style="text-align:left;">日志模块 (忽略)</td></tr><tr><td style="text-align:left;">orion-http</td><td style="text-align:left;">http模块 OkHttp、HttpClient、jsup的统一封装, UA生成器等</td></tr><tr><td style="text-align:left;">orion-net</td><td style="text-align:left;">网络交互模块 SSH、SFTP、FTP, Socket的简单封装</td></tr><tr><td style="text-align:left;">orion-web</td><td style="text-align:left;">servlet模块 (忽略)</td></tr><tr><td style="text-align:left;">orion-redis</td><td style="text-align:left;">redis模块 (忽略)</td></tr><tr><td style="text-align:left;">orion-spring</td><td style="text-align:left;">spring模块 (忽略)</td></tr><tr><td style="text-align:left;">orion-generator</td><td style="text-align:left;">随机信息生成器模块 包含各式各样的随机数据生成器</td></tr><tr><td style="text-align:left;">orion-all</td><td style="text-align:left;">全部模块聚合 包含了上述所有模块的引用</td></tr></tbody></table>`,6),n=[l];function h(p,d,k,r,g,E){return s(),i("div",null,n)}const y=t(e,[["render",h]]);export{c as __pageData,y as default};