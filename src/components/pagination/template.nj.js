import nj from 'nornj';

const pageBtns = nj`
<li key=first class=fj-pagn-btn title=首页>
  首页
</li>
<li key=previous class=fj-pagn-btn title=上一页>
  <i class="fa fa-chevron-left"></i>
</li>
<#if {hasPages}>
  <li>
    <ul class=fj-pagn-pages>
    </ul>
  </li>
</#if>
<li key=next class=fj-pagn-btn title=下一页>
  <i class="fa fa-chevron-right"></i>
</li>
<li key=last class=fj-pagn-btn title=末页>
  末页
</li>
`;

export default nj`
<div class=fj-pagn>
  <ul class=fj-pagn-body>
    ${pageBtns}
    <#if {showPageCount}>
      <li class=fj-pagn-info>
        共{pageCount}页
      </li>
    </#if>
    <#if {showCount}>
      <li class=fj-pagn-info>
        共{count totalTxt}
      </li>
    </#if>
    <#if {showPageSize}>
      <li class=fj-pagn-info>
        每页
        <#if {setPageSize}>
          <select class="fj-form-elem fj-pagn-pagesize" value={pageSize} onChange={pageSizesChange}>
            <#each {pageSizes}>
              <option key=page{#} value={.}>{.}</option>
            </#each>
          </select>
        <#else />
          {pageSize}
        </#if>
        条
      </li>
    </#if>
    <li class=fj-pagn-txt>
      到
      <input type=text
             ref=pageTxt
             defaultValue={pageIndex}
             class="fj-form-elem fj-pagn-pageindex"
             autocomplete=off
      />页
      <button class="fj-btn fj-pagn-btn-go" type=button onClick={goPage}>
        {btnGoName}
      </button>
    </li>
    <#if {showRefresh}>
      <li class="{'fj-pagn-btn-refresh':fixIconSize}">
        <i class="fa fa-refresh" onClick={refresh} title=刷新></i>
      </li>
    </#if>
  </ul>
</div>
`;