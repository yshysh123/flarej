'use strict';

let nj = require('nornj'),
  part = require('./part/part.nj1.js');

module.loaded = false;
module.exports = nj`
<div class=fj-pagn>
  <ul class=fj-pagn-body>
    <li class=fj-pagn-info>
      ${part}
    </li>
    <li class=fj-pagn-info>
      共{id}页88888712
    </li>
    <li class=fj-pagn-btn-refresh>
      <i class="fa fa-refresh"></i>
    </li>
  </ul>
</div>
`;