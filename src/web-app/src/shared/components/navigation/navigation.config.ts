export const navigationList = [
  {
    to: 'home',
    label: 'Home',
    icon: 'home',
    dashboardDisplay: false,
    basePage: true,
  }, {
    to: 'icon',
    label: 'Icon',
    icon: 'insert_photo',
    dashboardDisplay: true,
    background: `/assets/images/home/icons.jpg`
  }, {
    to: 'widget',
    label: 'Widget',
    icon: 'widgets',
    dashboardDisplay: true,
    background: `/assets/images/home/widget.jpg`,
    children: [
      {
        to: 'widget/form',
        label: 'From',
        dashboardDisplay: true,
      },
      {
        to: 'widget/content',
        label: 'Content',
        dashboardDisplay: true,
      },
      {
        to: 'widget/theme',
        label: 'Theme',
        dashboardDisplay: true,
      }
    ]
  },
  {
    to: 'class',
    label: 'Layout',
    icon: 'bookmark',
    dashboardDisplay: true,
    background: `/assets/images/home/easy.jpeg`,
    children: [
      {
        to: 'class/easy',
        label: 'Easy Class',
        dashboardDisplay: true,
      },
      {
        to: 'class/scss',
        label: 'Scss',
        dashboardDisplay: true,
      },
      {
        to: 'class/mixin',
        label: 'Mixin',
        dashboardDisplay: true,
      }
    ]
  }, {
    to: 'typography',
    label: 'Typography',
    icon: 'font_download',
    dashboardDisplay: true,
    background: `/assets/images/home/alphabet.jpeg`
  }
];
