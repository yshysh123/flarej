import nj from 'nornj';

const row = nj`
<div {...props} class={classes} style={styles} ref=wrap>
  {children}
</div>
`;

const col = nj`
<div {...props} class={classes} ref=wrap>
  {children}
</div>
`;

const clearFix = nj`
<div {...props} class={classes} ref=wrap/>
`;

export default {
  row,
  col,
  clearFix
};