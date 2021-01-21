import Tippy from '@tippyjs/react'
import './App.css';
import 'tippy.js/dist/tippy.css'
import React, { forwardRef } from 'react'

const ColoredToolTip = () => {
  return <span style={{ color: 'red' }}>Red Tooltip</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  )
}
)

function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: '20px' }}>
        <Tippy arrow={false} delay={1000} placement={'right'} content='Basic Tooltip'>
          <button>Hover over me!!</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>Hover over me!!</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <button>Hover over me!!</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy placement={'top-end'} content={<ColoredToolTip></ColoredToolTip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
