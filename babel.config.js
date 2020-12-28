const goodsUI = 'goods-ui'
const goodsUILib = `${goodsUI}/lib/`

function join(...args) {
  return `${goodsUILib}${args.join('/')}`
}

function transform(importName = '') {
  const lowerCase = importName.toLowerCase()
  switch (importName) {
    case 'Button':
    case 'Input':
    case 'Radio':
    case 'Checkbox':
    case 'Switch':
    case 'Dropdown':
    case 'Accordion':
    case 'Menu':
    case 'Modal':
      return join(lowerCase, lowerCase)

    case 'DropdownAsync':
      return join('dropdown', 'dropdown-async')
    case 'AccordionGroup':
      return join('accordion', 'accordion-group')
    case 'MenuGroup':
      return join('menu', 'menu-group')

    case 'Feedback':
    case 'FeedbackPopupDispatchContext':
    case 'FeedbackPopupStateContext':
    case 'FeedbackProvider':
    case 'openFeedback':
    case 'useFeedback':
    case 'useFeedbackPopup':
      return join('modal', 'modal-feedback')

    case 'cssUnitRegExp':
    case 'getColor':
    case 'isIconButtonProps':
    case 'toCssValue':
      return join('_utils', 'helpers')

    case 'handleMouseDown':
    case 'isDocumentElement':
    case 'scrollIntoView':
    case 'scrollTo':
      return join('_utils', 'dom-helpers')

    default:
      return goodsUI
  }
}

module.exports = {
  presets: ['next/babel', ['goods-core/babel/preset', { ssr: true }]],
  plugins: [
    ['babel-plugin-styled-components', { ssr: true, minify: true, pure: true }],
    [
      'transform-imports',
      {
        [goodsUI]: {
          transform,
          preventFullImport: true,
          skipDefaultConversion: true,
        },
      },
    ],
  ],
}
