import React from 'react'
import classNames from 'classnames'

function Button(props) {
   console.log(props)
   return (
      <button
         className={classNames('button', {
            'button--outline': props.outline,
            'button--test': props.test,
         })}
      >
         {props.children}
      </button>
   )
}

export default Button