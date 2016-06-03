let fj = {
  rootPath: '../../flarej/',
  initTheme: 'concise',
  ver: null,
  themeStoreName: 'fj_theme',
  GB2312Pinyin: {},  //Chinese pinyin fonts
};

//Set globel configs
fj.setConfig = (config) => Object.assign(fj, config);

export default fj;