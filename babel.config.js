module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript'
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], // `src` papkasini root sifatida ko‘rsatamiz
          alias: {
            '@': './src',  // @ belgisini src papkasi bilan bog‘lash
          },
        },
      ],
    ],
  };
  