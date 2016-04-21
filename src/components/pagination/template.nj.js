'use strict';

let nj = require('nornj'),
  part = require('./part/part.nj');

module.exports = nj`
<div class=fj-pagn>
  <ul class=fj-pagn-body>
    <li class=fj-pagn-info>
      ${part}
    </li>
    <li class=fj-pagn-info>
      共{id}页88888
    </li>
    <li class=fj-pagn-btn-refresh>
      <i class="fa fa-refresh"></i>
    </li>
  </ul>
</div>
`;