import nj from 'nornj';

const row = nj`
<div>
  <#params>
    <#spreadParam {props}/>
    <#param {'className'}>{classes}</#param>
  </#params>
  {children}
</div>
`;

export default { row }