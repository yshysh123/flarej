import nj from 'nornj';

const row = nj`
<div class={classes} style={styles}>
  <#params>
    <#spreadParam {props}/>
  </#params>
  {children}
</div>
`;

export default { row }