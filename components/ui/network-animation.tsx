'use client'

export function NetworkAnimation({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 400"
      className={className}
    >
      <defs>
        <animate id="sway1" 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate" 
                values="-2 200 200; 2 200 200; -2 200 200"
                dur="4s" 
                repeatCount="indefinite" />
                
        <animate id="sway2" 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate" 
                values="2 200 200; -2 200 200; 2 200 200"
                dur="3.5s" 
                repeatCount="indefinite" />
                
        <animate id="pulse" 
                attributeName="opacity" 
                values="0.2;0.3;0.2" 
                dur="3s" 
                repeatCount="indefinite" />
      </defs>

      <line x1="200" y1="350" x2="200" y2="300" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round"/>
      
      <g>
        <animateTransform attributeName="transform"
                         attributeType="XML"
                         type="rotate"
                         values="-1 200 200; 1 200 200; -1 200 200"
                         dur="4s"
                         repeatCount="indefinite"/>
        
        <line x1="200" y1="300" x2="200" y2="200" 
              stroke="currentColor" 
              strokeWidth="8" 
              strokeLinecap="round"/>
        
        <line x1="200" y1="250" x2="140" y2="220" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <line x1="200" y1="250" x2="260" y2="220" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      </g>

      <g>
        <animateTransform attributeName="transform"
                         attributeType="XML"
                         type="rotate"
                         values="1 200 200; -1.5 200 200; 1 200 200"
                         dur="3.5s"
                         repeatCount="indefinite"/>
        
        <line x1="200" y1="200" x2="100" y2="150" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <line x1="200" y1="200" x2="300" y2="150" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <line x1="200" y1="200" x2="60" y2="100" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        <line x1="200" y1="200" x2="340" y2="100" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      </g>

      <g>
        <animateTransform attributeName="transform"
                         attributeType="XML"
                         type="rotate"
                         values="0.5 200 200; -0.5 200 200; 0.5 200 200"
                         dur="3s"
                         repeatCount="indefinite"/>
        
        <g>
          <animate attributeName="opacity"
                  values="0.2;0.3;0.2"
                  dur="4s"
                  repeatCount="indefinite"/>
          
          <circle cx="140" cy="220" r="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <circle cx="260" cy="220" r="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <circle cx="100" cy="150" r="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <circle cx="300" cy="150" r="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <circle cx="60" cy="100" r="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <circle cx="340" cy="100" r="12" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
        </g>

        <g>
          <animate attributeName="transform"
                  values="scale(1);scale(1.1);scale(1)"
                  dur="3s"
                  repeatCount="indefinite"/>
          
          <circle cx="140" cy="220" r="4" className="fill-contrast"/>
          <circle cx="260" cy="220" r="4" className="fill-contrast"/>
          <circle cx="100" cy="150" r="4" className="fill-contrast"/>
          <circle cx="300" cy="150" r="4" className="fill-contrast"/>
          <circle cx="60" cy="100" r="4" className="fill-contrast"/>
          <circle cx="340" cy="100" r="4" className="fill-contrast"/>
        </g>
      </g>

      <g>
        <circle cx="200" cy="200" r="16" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2">
          <animate attributeName="opacity"
                  values="0.2;0.3;0.2"
                  dur="3s"
                  repeatCount="indefinite"/>
        </circle>
        <circle cx="200" cy="200" r="6" className="fill-contrast">
          <animate attributeName="r"
                  values="6;7;6"
                  dur="3s"
                  repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  )
} 