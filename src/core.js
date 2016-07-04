let fj = {
  rootPath: '../../flarej/',
  initTheme: 'concise',
  ver: null,
  themeStoreName: 'fj_theme',
  //Chinese pinyin fonts
  GB2312Pinyin: {},
};

//Set globel configs
fj.setConfig = (config) => Object.assign(fj, config);

export default fj;