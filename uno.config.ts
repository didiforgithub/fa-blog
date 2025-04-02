import { defineConfig, presetAttributify, presetTypography, presetWind3, presetWebFonts, presetWind4 } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify()
    // presetTypography({
    //   cssExtend: {
    //     a: {
    //       'font-weight': 'normal',
    //       'text-decoration': 'underline',
    //       'text-decoration-style': 'dashed',
    //       'text-decoration-thickness': '1px',
    //       'text-underline-offset': '2px'
    //     },
    //     'a:hover': {
    //       'text-decoration-style': 'solid'
    //     },
    //     'h1,h2,h3,h4,h5,h6': {
    //       'font-family': 'var(--un-font-serif)',
    //       'font-weight': '500'
    //     },
    //     blockquote: {
    //       border: '0',
    //       'font-family': 'var(--un-font-serif)',
    //       'font-size': '1.3125em',
    //       'font-style': 'italic',
    //       'font-weight': 'normal',
    //       'line-height': '1.4',
    //       'padding-left': '0'
    //     }
    //   }
    // })
  ],
  rules: [
    ['bg-main', { 'background-color': 'rgb(var(--color-bg-main))' }],
    ['text-main', { color: 'rgb(var(--color-text-main))' }],
    ['bg-muted', { 'background-color': 'rgb(var(--color-bg-muted))' }],
    ['border-main', { 'border-color': 'rgb(var(--color-border-main))' }],
    ['font-serif', { 'font-family': 'Newsreader Variable, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }],
    [
      'prose-dante',
      {
        '--un-prose-body': 'var(--color-text-main)',
        '--un-prose-headings': 'var(--color-text-main)',
        '--un-prose-links': 'var(--color-text-main)',
        '--un-prose-bullets': 'var(--color-text-main)',
        '--un-prose-quotes': 'var(--color-text-main)'
      }
    ]
  ]
});
