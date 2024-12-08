import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({
   activeCategory = null,
   items = [],
   onCLickCategory,
}) {
   return (
      <div className="categories">
         <ul>
            <li
               onClick={() => onCLickCategory(null)}
               className={activeCategory === null ? 'active' : ''}
            >
               Все
            </li>
            {items &&
               items.map((name, index) => (
                  <li
                     className={activeCategory === index ? 'active' : ''}
                     onClick={() => onCLickCategory(index)}
                     key={`${name}_${index}`}
                  >
                     {name}
                  </li>
               ))}
         </ul>
      </div>
   )
})

Categories.propTypes = {
   // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
   items: PropTypes.arrayOf(PropTypes.string).isRequired,
   onCLickCategory: PropTypes.func.isRequired,
}

export default Categories
