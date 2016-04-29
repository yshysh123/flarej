import nj from 'nornj';

export default nj`
<div class=fj-pagn>
  <ul class=fj-pagn-body>
    <li class=fj-pagn-info>
      共{pageCount}页
    </li>
    <li class=fj-pagn-info>
      共{dataCount}条数据
    </li>
    <li class=fj-pagn-info>
      每页
      <select class="fj-form-elem fj-pagn-pagesize">
        <$each {pageSize}>
          <option key=page{#} value={.}>{.}</option>
        </$each>
      </select>条
    </li>
    <li class=fj-pagn-txt>
      到
      <input type=text
             defaultValue={curPage}
             class="fj-form-elem fj-pagn-curpage"
             autocomplete=off
      />页
    </li>
    <li class="{'fj-pagn-btn-refresh':fixIconSize}">
      <i class="fa fa-refresh"></i>
    </li>
  </ul>
</div>
`;