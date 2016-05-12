import nj from 'nornj';

const partPage1 = nj`
<#for {'1' pageIndex:add(2)}>
  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>
</#for>
<li onClick={refresh:clickBtn(next)}>...</li>
<li class=fj-pagn-pageno{pageCount:isCurrentPage} title=第{pageCount}页 onClick={refresh:clickBtn(last)}>{pageCount}</li>
`;

const partPage2 = nj`
<li class="fj-pagn-pageno{'1':isCurrentPage}" title=第1页 onClick={refresh:clickBtn(first)}>1</li>
<li onClick={refresh:clickBtn(prev)}>...</li>
<#for {pageIndex:add(-2) pageIndex:add(2)}>
  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>
</#for>
<li onClick={refresh:clickBtn(next)}>...</li>
<li class=fj-pagn-pageno{pageCount:isCurrentPage} title=第{pageCount}页 onClick={refresh:clickBtn(last)}>{pageCount}</li>
`;

const partPage3 = nj`
<li class="fj-pagn-pageno{'1':isCurrentPage}" title=第1页 onClick={refresh:clickBtn(first)}>1</li>
<li onClick={refresh:clickBtn(prev)}>...</li>
<#for {pageIndex:add(-2) pageCount}>
  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>
</#for>
`;

const pageBtns = nj`
<li key=first class=fj-pagn-btn{firstDisabled} title=首页 onClick={refresh:clickBtn(first)}>
  首页
</li>
<li key=prev class=fj-pagn-btn{prevDisabled} title=上一页 onClick={refresh:clickBtn(prev)}>
  <i class="fa fa-chevron-left"></i>
</li>
<#if {hasPages}>
  <li>
    <ul class=fj-pagn-pages>
      <#if {pageCount:lt(10)}>
        <#for {'1' pageCount}>
          <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>
        </#for>
      <#else />
        <#if {pageIndex:showPartPage(1)}>
          ${partPage1}
        <#else />
          <#if {pageIndex:showPartPage(2)}>
            ${partPage2}
          <#else />
            <#if {pageIndex:showPartPage(3)}>
              ${partPage3}
            </#if>
          </#if>
        </#if>
      </#if>
    </ul>
  </li>
</#if>
<li key=next class=fj-pagn-btn{nextDisabled} title=下一页 onClick={refresh:clickBtn(next)}>
  <i class="fa fa-chevron-right"></i>
</li>
<li key=last class=fj-pagn-btn{lastDisabled} title=末页 onClick={refresh:clickBtn(last)}>
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
        <i class="fa fa-refresh" title=刷新 onClick={refresh:clickBtn}></i>
      </li>
    </#if>
  </ul>
</div>
`;