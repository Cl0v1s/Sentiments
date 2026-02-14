/** @type { import('@storybook/react-vite').Preview } */

import './../src/css/style.css'
import './style.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;