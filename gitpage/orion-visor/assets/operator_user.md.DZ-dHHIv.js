import{_ as e,c as a,o as l,a3 as i}from"./chunks/framework.M2ANHPtw.js";const m=JSON.parse('{"title":"用户管理","description":"","frontmatter":{"title":"用户管理"},"headers":[],"relativePath":"operator/user.md","filePath":"operator/user.md"}'),t={name:"operator/user.md"},r=i('<h3 id="角色管理" tabindex="-1">角色管理 <a class="header-anchor" href="#角色管理" aria-label="Permalink to &quot;角色管理&quot;">​</a></h3><p>定义以及维护系统内的角色。 <code>admin</code> 是管理员角色, 无法删除/停用/分配菜单。</p><ul><li>新增: 新增角色</li><li>启用/停用: 启用/停用角色, 停用后授权的数据/菜单将无法使用</li><li>分配菜单: 给角色分配菜单</li><li>修改: 修改角色名称</li><li>删除: 删除当前角色, 如果已被关联则移除用户关联</li></ul><h3 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h3><p>维护系统内的用户。</p><ul><li>新增: 新增用户</li><li>启用/停用: 启用/停用角色, 停用后则无法登录系统</li><li>修改: 修改用户的基本信息</li><li>详情: 查看用户的基本信息, 登录日志, 当前登录设备, 操作日志</li><li>重置密码: 重置用户密码</li><li>分配角色: 设置用户绑定的角色</li><li>删除: 删除当前用户以及用户数据</li></ul><h3 id="操作日志" tabindex="-1">操作日志 <a class="header-anchor" href="#操作日志" aria-label="Permalink to &quot;操作日志&quot;">​</a></h3><p>记录用户在系统内的操作日志。</p><ul><li>详情: 查看操作的参数以及留痕信息</li><li>清理: 根据条件清理数据</li></ul>',9),o=[r];function s(n,c,_,d,h,u){return l(),a("div",null,o)}const f=e(t,[["render",s]]);export{m as __pageData,f as default};