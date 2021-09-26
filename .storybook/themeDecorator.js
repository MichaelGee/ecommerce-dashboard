import { Global } from '@emotion/react';
import globalStyle from '../GlobalStyle'
import  theme  from '../theme/index';
import { ThemeProvider, defaultTheme } from 'evergreen-ui'


const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2.5rem 5rem'
}

  const ThemeDecorator = storyFn => (
    <ThemeProvider value={theme}>
        <div style={style}>
        <Global styles={globalStyle}/>
          {storyFn()}
        </div>
    </ThemeProvider>
)

export default ThemeDecorator;