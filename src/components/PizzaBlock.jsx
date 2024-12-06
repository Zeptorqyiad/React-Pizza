import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ContentLoader from 'react-content-loader'

function PizzaBlock({
   name = '---',
   imageUrl = '',
   price = 0,
   types = [],
   sizes = [],
}) {
   const availableTypes = ['тонкое', 'традиционное']
   const availableSizes = [26, 30, 40]

   const [activeType, setActiveType] = React.useState(types[0])
   const [activeSize, setActiveSize] = React.useState(sizes[0])

   const onSelectType = (index) => {
      setActiveType(index)
   }

   const onSelectSize = (index) => {
      setActiveSize(index)
   }

   // return (
   //    <ContentLoader
   //       speed={2}
   //       width={280}
   //       height={460}
   //       viewBox="0 0 280 460"
   //       backgroundColor="#f3f3f3"
   //       foregroundColor="#ecebeb"
   //    >
   //       <circle cx="136" cy="138" r="105" />
   //       <rect x="0" y="258" rx="6" ry="6" width="280" height="26" />
   //       <rect x="0" y="392" rx="6" ry="6" width="92" height="30" />
   //       <rect x="0" y="292" rx="6" ry="6" width="280" height="78" />
   //       <rect x="147" y="382" rx="15" ry="15" width="131" height="50" />
   //    </ContentLoader>
   // )

   return (
      <div className="content__items">
         <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
               <ul>
                  {availableTypes.map((type, index) => (
                     <li
                        key={`${type}_${index}`}
                        onClick={() => onSelectType(index)}
                        className={classNames({
                           active: activeType === index,
                           disabled: !types.includes(index),
                        })}
                     >
                        {type}
                     </li>
                  ))}
               </ul>
               <ul>
                  {availableSizes.map((size, index) => (
                     <li
                        onClick={() => onSelectSize(index)}
                        key={`${size}_${index}`}
                        className={classNames({
                           active: activeSize === index,
                           disabled: !sizes.includes(size),
                        })}
                     >
                        {`${size} см.`}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="pizza-block__bottom">
               <div className="pizza-block__price">от {price} ₽</div>
               <div className="button button--outline button--add">
                  <svg
                     width="12"
                     height="12"
                     viewBox="0 0 12 12"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                     />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
               </div>
            </div>
         </div>
      </div>
   )
}

PizzaBlock.propTypes = {
   name: PropTypes.string,
   imageUrl: PropTypes.string,
   price: PropTypes.number,
   types: PropTypes.arrayOf(PropTypes.number),
   sizes: PropTypes.arrayOf(PropTypes.number),
}

export default PizzaBlock
