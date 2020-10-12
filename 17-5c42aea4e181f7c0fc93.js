(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{875:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return j}));var e=s(840),t=s.n(e),o=s(841),c=s.n(o),p=s(521),l=s.n(p),r=s(842),i=s.n(r),u=s(843),k=s.n(u),h=s(844),d=s.n(h),f=s(845),m=s.n(f),b=s(846),v=s.n(b),g=s(0),x=s.n(g),y=s(210);function z(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,e=d()(n);if(a){var t=d()(this).constructor;s=Reflect.construct(e,arguments,t)}else s=e.apply(this,arguments);return k()(this,s)}}function S(n){return x.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function w(n){return x.a.createElement(S,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function C(n){return x.a.createElement(S,{tag:"style",html:n.style})}g.Component;var j=function(n){i()(s,n);var a=z(s);function s(){return t()(this,s),a.apply(this,arguments)}return c()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(y.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return x.a.createElement("div",{className:"zandoc-react-container",key:null},x.a.createElement(C,{style:'img[alt="zent-theme"] {\n    width: 514px;\n    height: 319px;\n  }'}),x.a.createElement(w,{html:'<h2 class="anchor-heading"><a href="#ding-zhi-zhu-ti">¶</a><a href="javascript:void(0)" id="ding-zhi-zhu-ti" class="anchor-point"></a>定制主题</h2>\n<p>Zent 支持主题定制，目前仅支持组件库颜色的定制。</p>\n<p><img src="https://img.yzcdn.cn/zanui/react/zent-theme.png" alt="zent-theme"></p>\n<h3 class="anchor-heading"><a href="#shi-yong-css-variables">¶</a><a href="javascript:void(0)" id="shi-yong-css-variables" class="anchor-point"></a>使用 CSS Variables</h3>\n<p>Zent 使用CSS Variables定制主题色，对于不支持 CSS Variables 的浏览器，会降级到默认主题色，可以通过重新构建 SCSS 定制主题色。</p>\n<p>主题色示例（默认主题色）：</p>\n<pre><code class="language-css"><span class="token selector"><span class="token pseudo-class">:root</span></span> <span class="token punctuation">{</span>\n  <span class="token variable">--theme-stroke-1</span><span class="token punctuation">:</span> <span class="token hexcode color">#323233</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-2</span><span class="token punctuation">:</span> <span class="token hexcode color">#646566</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-3</span><span class="token punctuation">:</span> <span class="token hexcode color">#969799</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-4</span><span class="token punctuation">:</span> <span class="token hexcode color">#c8c9cc</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-5</span><span class="token punctuation">:</span> <span class="token hexcode color">#dcdee0</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-6</span><span class="token punctuation">:</span> <span class="token hexcode color">#ebedf0</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-7</span><span class="token punctuation">:</span> <span class="token hexcode color">#f2f3f5</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-8</span><span class="token punctuation">:</span> <span class="token hexcode color">#f7f8fa</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-9</span><span class="token punctuation">:</span> <span class="token hexcode color">#fff</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-10</span><span class="token punctuation">:</span> <span class="token hexcode color">#eaeaea</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-stroke-11</span><span class="token punctuation">:</span> <span class="token hexcode color">#f4f5f5</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-1</span><span class="token punctuation">:</span> <span class="token hexcode color">#0a2a61</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-2</span><span class="token punctuation">:</span> <span class="token hexcode color">#10439b</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-3</span><span class="token punctuation">:</span> <span class="token hexcode color">#114db4</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-4</span><span class="token punctuation">:</span> <span class="token hexcode color">#155bd4</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-5</span><span class="token punctuation">:</span> <span class="token hexcode color">#3773da</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-6</span><span class="token punctuation">:</span> <span class="token hexcode color">#5487df</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-7</span><span class="token punctuation">:</span> <span class="token hexcode color">#94b4eb</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-primary-8</span><span class="token punctuation">:</span> <span class="token hexcode color">#edf4ff</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-success-1</span><span class="token punctuation">:</span> <span class="token hexcode color">#268d37</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-success-2</span><span class="token punctuation">:</span> <span class="token hexcode color">#2da641</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-success-3</span><span class="token punctuation">:</span> <span class="token hexcode color">#4cb35d</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-success-4</span><span class="token punctuation">:</span> <span class="token hexcode color">#66be74</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-success-5</span><span class="token punctuation">:</span> <span class="token hexcode color">#f0faf2</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-error-1</span><span class="token punctuation">:</span> <span class="token hexcode color">#b40000</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-error-2</span><span class="token punctuation">:</span> <span class="token hexcode color">#d40000</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-error-3</span><span class="token punctuation">:</span> <span class="token hexcode color">#da2626</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-error-4</span><span class="token punctuation">:</span> <span class="token hexcode color">#df4545</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-error-5</span><span class="token punctuation">:</span> <span class="token hexcode color">#ffebeb</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-warn-1</span><span class="token punctuation">:</span> <span class="token hexcode color">#ed6a0c</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-warn-2</span><span class="token punctuation">:</span> <span class="token hexcode color">#f1924e</span><span class="token punctuation">;</span>\n  <span class="token variable">--theme-warn-3</span><span class="token punctuation">:</span> <span class="token hexcode color">#fff5ed</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 class="anchor-heading"><a href="#chong-xin-gou-jian-scss-ding-zhi-zhu-ti-se">¶</a><a href="javascript:void(0)" id="chong-xin-gou-jian-scss-ding-zhi-zhu-ti-se" class="anchor-point"></a>重新构建 SCSS 定制主题色</h3>\n<p>Zent 的样式使用 <a href="https://sass-lang.com">scss</a> 开发，我们提供了一个预定义的扩展文件来支持主题定制，通过在 Zent 仓库中修改配置，生成一份定制的 css 样式。</p>\n<p>这种方式对业务项目是非侵入式的，样式的定制和业务项目完全独立；但也有一个问题，就是每次更新 Zent 组件库都要重新生成一份定制主题。</p>\n<h4 class="anchor-heading"><a href="#ding-zhi-fang-fa">¶</a><a href="javascript:void(0)" id="ding-zhi-fang-fa" class="anchor-point"></a>定制方法</h4>\n<ol>\n<li>克隆 Zent <a href="https://github.com/youzan/zent">源码</a>并安装依赖</li>\n<li>在 <code>packages/zent/assets/theme</code> 目录下找到一个名为 <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_override.scss"><code>_override.scss</code></a> 的文件，这个文件是预留用来覆盖默认主题变量的，所有主题变量可以在同目录的 <a href="https://github.com/youzan/zent/blob/master/packages/zent/assets/theme/_default.scss"><code>_default.scss</code></a> 文件内找到</li>\n<li>在 <code>packages/zent</code> 目录下面执行 <code>yarn theme</code></li>\n<li>定制的主题样式文件会生成在 <code>packages/zent/css</code> 目录下</li>\n</ol>'}))}}]),s}(g.Component)}}]);