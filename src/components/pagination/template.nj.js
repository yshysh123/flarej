import nj from 'nornj';

const pageBtns = nj`
<li class=fj-pagn-btn title=首页>
  首页
</li>
<li class=fj-pagn-btn title=上一页>
  <i class="fa fa-chevron-left"></i>
</li>
<li class=fj-pagn-btn title=下一页>
  <i class="fa fa-chevron-right"></i>
</li>
<li class=fj-pagn-btn title=末页>
  末页
</li>
`;

export default nj`
<div class=fj-pagn>
  <ul class=fj-pagn-body>
    ${pageBtns}
    <li class=fj-pagn-info>
      共{pageCount}{id}页
    </li>
    <li class=fj-pagn-info>
      共{dataCount}条数据
    </li>
    <li class=fj-pagn-info>
      每页
      <select class="fj-form-elem fj-pagn-pagesize">
        <#each {pageSize}>
          <option key=page{#} value={.}>{.}</option>
        </#each>
      </select>条
    </li>
    <li class=fj-pagn-txt>
      到
      <input type=text
             defaultValue={curPage}
             class="fj-form-elem fj-pagn-curpage"
             autocomplete=off
      />页
      <button class="fj-btn fj-pagn-btn-go" type=button onClick={click}>确定</button>
    </li>
    <li class="{'fj-pagn-btn-refresh':fixIconSize}">
      <i class="fa fa-refresh"></i>
    </li>
  </ul>
</div>
`;