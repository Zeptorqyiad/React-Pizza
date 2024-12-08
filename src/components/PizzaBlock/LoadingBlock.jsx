import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
   return (
      <ContentLoader
         className="pizza-block"
         speed={2}
         width={280}
         height={460}
         viewBox="0 0 280 460"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <circle cx="136" cy="138" r="105" />
         <rect x="0" y="258" rx="6" ry="6" width="280" height="26" />
         <rect x="0" y="392" rx="6" ry="6" width="92" height="30" />
         <rect x="0" y="292" rx="6" ry="6" width="280" height="78" />
         <rect x="147" y="382" rx="15" ry="15" width="131" height="50" />
      </ContentLoader>
   )
}

export default LoadingBlock
