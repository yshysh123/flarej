import nj from 'nornj';

const row = nj`
<div class={classes} style={styles}>
  <#params>
    <#spreadParam {props}/>
  </#params>
  {children}
</div>
`;

const col = nj`
<div class={classes}>
  <#params>
    <#spreadParam {props}/>
  </#params>
  {children}
</div>
`;

const clearFix = nj`
<div class={classes}>
  <#params>
    <#spreadParam {props}/>
  </#params>
</div>
`;

export default {
  row,
  col,
  clearFix
};