import React, {PureComponent} from 'react'
import {StaggeredMotion, spring} from 'react-motion'

export default class Logo extends PureComponent {
  constructor () {
    super()

    this.state = {
      mouseOver: false
    }
  }

  render () {
    return <svg
      onMouseEnter={() => this.setState({mouseOver: true})}
      onMouseLeave={() => this.setState({mouseOver: false})}
      height='100px'
      viewBox='0 0 703 548'
      width='500px'>
      <defs>
        <rect
          height='321'
          id='path-1'
          width='752'
          x='0'
          y='0'
        />
        <rect
          height='321'
          id='path-3'
          width='752'
          x='-7.95807864e-13'
          y='-3.41060513e-13'
        />
      </defs>
      <g
        fill='none'
        fillRule='evenodd'
        id='Page-1'
        stroke='none'
        strokeWidth='1'
      >
        <g
          id='Artboard-1-Copy-6'
          transform='translate(-149, -226)'
        >
          <g
            id='Logo'
            transform='translate(-36, 14)'
          >
            <StaggeredMotion
              defaultStyles={[
                {x: -70, y: 0},
                {x: 70, y: 0},
                {z: 0}
              ]}
              styles={(prevInterpolatedStyles) => prevInterpolatedStyles.map((_, i) => {
                switch (i) {
                  case 0:
                    return {
                      x: prevInterpolatedStyles[2].z > 80
                        ? spring(
                          this.state.mouseOver ? -70 : 0
                          , {
                            stiffness: this.state.mouseOver ? 1500 : 100,
                            damping: this.state.mouseOver ? 100 : 3
                          }
                        )
                        : -70,
                      y: 0
                    }

                  case 1:
                    return {
                      x: prevInterpolatedStyles[2].z > 80
                        ? spring(
                          this.state.mouseOver ? 70 : 0,
                          {
                            stiffness: this.state.mouseOver ? 1500 : 100,
                            damping: this.state.mouseOver ? 100 : 3
                          }
                        )
                        : 70,
                      y: 0
                    }

                  case 2:
                    return {
                      z: spring(100, {stiffness: 70})
                    }
                }
              })}>
              {(interpolatingStyles) => <g>
                <RightSide {...interpolatingStyles[0]} />
                <LeftSide {...interpolatingStyles[1]} />
              </g>}
            </StaggeredMotion>
          </g>
        </g>
      </g>
    </svg>
  }
}

function LeftSide ({x, y}) {
  return <g transform={`translate(${x}, ${y})`}>
      <g
      id='half-copy'
      transform='translate(331.327204, 408.375552) scale(1, -1) rotate(60) translate(-331.327204, -408.375552) translate(-44.672796, 242.875552)'
      >
      <g
        id='Group'
        transform='translate(-0, 10)'
      >
        <mask
          fill='white'
          id='mask-4'
        >
          <use xlinkHref='#path-3' />
        </mask>
        <g id='Mask' />
        <g
          fill='#F7F7FF'
          mask='url(#mask-4)'
        >
          <g transform='translate(95, -251)'>
            <circle
              cx='281.167'
              cy='250.167'
              id='Oval'
              r='50.167'
            />
            <path
              d='M280.901,161 C345.718562,161 407.291462,170.138353 454.101834,186.253447 C506.090064,204.15081 537.802,230.611701 537.802,251 C537.802,272.717519 503.553902,300.912055 447.944819,319.33697 C403.673723,334.00511 344.441498,342 280.901,342 C214.150108,342 154.249762,334.160897 110.492282,319.204017 C83.0980149,309.84062 60.4751002,297.67206 44.9687325,284.392732 C31.0347729,272.459981 24,260.612654 24,251 C24,230.543122 54.4985453,204.449771 105.365559,186.715067 C152.195512,170.38911 215.275449,161 280.901,161 L280.901,161 L280.901,161 Z M280.901,137 C212.725897,137 147.003977,146.782355 97.4647071,164.05284 C37.9852382,184.790262 1.13686838e-13,217.288933 1.13686838e-13,251 C1.13686838e-13,285.817464 40.7778366,320.738749 102.729838,341.914024 C149.296994,357.831289 211.715947,366 280.901,366 C346.837182,366 408.561245,357.668774 455.493142,342.119043 C519.898175,320.779771 561.802,286.282706 561.802,251 C561.802,217.167077 522.59136,184.44916 461.914111,163.560534 C412.434603,146.526553 348.246063,137 280.901,137 L280.901,137 L280.901,137 Z'
              id='Shape'
            />
            <path
              d='M202.955101,205.719226 C235.335753,149.570566 274.01236,100.796814 311.357612,68.296453 C352.833631,32.2017989 391.59835,17.9496372 409.260139,28.1346928 C428.073604,38.983781 435.388757,82.7380814 423.568663,140.114047 C414.158159,185.792881 391.493186,241.09823 359.75055,296.141524 C326.403709,353.966202 289.688908,401.939131 254.871359,432.373421 C233.074661,451.426801 211.231743,464.94519 191.981685,471.743771 C174.683751,477.852916 160.906202,478.028247 152.578512,473.225952 C134.857617,463.00605 127.490195,423.551181 137.539211,370.626843 C146.790198,321.90465 170.169315,262.570888 202.955124,205.719187 L202.955101,205.719226 L202.955101,205.719226 Z M182.164573,193.729484 C148.105045,252.789856 123.746682,314.608844 113.960478,366.149863 C102.210106,428.03459 111.386088,477.174862 140.588804,494.0165 C170.751402,511.410244 221.373849,493.531815 270.666505,450.443102 C307.719612,418.054693 345.978211,368.06458 380.54113,308.131177 C413.480539,251.012619 437.098963,193.380732 447.075026,144.956661 C460.764831,78.5049225 451.814436,24.9697075 421.249513,7.34395232 C391.941155,-9.55735194 344.010262,8.06482797 295.602156,50.1921552 C256.127453,84.5457082 215.807894,135.391331 182.164595,193.729445 L182.164573,193.729484 L182.164573,193.729484 Z'
              id='Shape'
            />
            <path
              d='M202.891806,296.727271 C170.417725,240.632353 147.477422,182.765871 137.971234,134.18023 C127.413338,80.2210032 134.425634,39.5183572 152.070566,29.3037893 C170.865981,18.4225597 212.426661,33.9365595 256.230989,72.831633 C291.106164,103.796828 327.700786,151.052251 359.536288,206.043645 C392.979761,263.812145 416.206491,319.579308 425.18593,364.943523 C430.80755,393.342982 431.610734,419.018224 427.88697,439.091003 C424.540837,457.128179 417.811981,469.151883 409.492411,473.968144 C391.787831,484.217558 353.92549,470.896152 313.092749,435.758576 C275.502305,403.411195 235.773076,353.523859 202.891728,296.727136 L202.891806,296.727271 L202.891806,296.727271 Z M182.121344,308.751743 C216.280031,367.754843 257.67321,419.731573 297.438339,453.950317 C345.184437,495.037007 392.341468,511.628637 421.516705,494.738709 C451.649825,477.294419 461.442346,424.508279 448.729126,360.283275 C439.173131,312.006291 414.969783,253.894277 380.306764,194.019199 C347.271015,136.954545 309.136882,87.7111182 272.165876,54.8850624 C221.432707,9.8376807 170.581294,-9.14441545 140.046236,8.53324571 C110.765789,25.4835588 102.095339,75.8109015 114.417851,138.788717 C124.466071,190.144654 148.380875,250.469297 182.121266,308.751608 L182.121344,308.751743 L182.121344,308.751743 Z'
              id='Shape'
            />
          </g>
        </g>
      </g>
      <polygon
        fill='#F7F7FF'
        id='Line'
        points='75.5 20 676.5 20 686.5 20 686.5 1.25055521e-12 676.5 1.25055521e-12 75.5 1.25055521e-12 65.5 1.25055521e-12 65.5 20'
      />
    </g>
  </g>
}

function RightSide ({x, y}) {
  return <g transform={`translate(${x}, ${y})`}><g
    id='half'
    transform='translate(740.532976, 563.875552) rotate(-60) translate(-740.532976, -563.875552) translate(364.532976, 398.375552)'
  >
    <g
      id='Group'
      transform='translate(0, 10)'
    >
      <mask
        fill='white'
        id='mask-2'
      >
        <use xlinkHref='#path-1' />
      </mask>
      <g id='Mask' />
      <g
        fill='#F7F7FF'
        mask='url(#mask-2)'
      >
        <g transform='translate(95, -251)'>
          <circle
            cx='281.167'
            cy='250.167'
            id='Oval'
            r='50.167'
          />
          <path
            d='M280.901,161 C345.718562,161 407.291462,170.138353 454.101834,186.253447 C506.090064,204.15081 537.802,230.611701 537.802,251 C537.802,272.717519 503.553902,300.912055 447.944819,319.33697 C403.673723,334.00511 344.441498,342 280.901,342 C214.150108,342 154.249762,334.160897 110.492282,319.204017 C83.0980149,309.84062 60.4751002,297.67206 44.9687325,284.392732 C31.0347729,272.459981 24,260.612654 24,251 C24,230.543122 54.4985453,204.449771 105.365559,186.715067 C152.195512,170.38911 215.275449,161 280.901,161 L280.901,161 L280.901,161 Z M280.901,137 C212.725897,137 147.003977,146.782355 97.4647071,164.05284 C37.9852382,184.790262 -3.41060513e-13,217.288933 -3.41060513e-13,251 C-3.41060513e-13,285.817464 40.7778366,320.738749 102.729838,341.914024 C149.296994,357.831289 211.715947,366 280.901,366 C346.837182,366 408.561245,357.668774 455.493142,342.119043 C519.898175,320.779771 561.802,286.282706 561.802,251 C561.802,217.167077 522.59136,184.44916 461.914111,163.560534 C412.434603,146.526553 348.246063,137 280.901,137 L280.901,137 L280.901,137 Z'
            id='Shape'
          />
          <path
            d='M202.955101,205.719226 C235.335753,149.570566 274.01236,100.796814 311.357612,68.296453 C352.833631,32.2017989 391.59835,17.9496372 409.260139,28.1346928 C428.073604,38.983781 435.388757,82.7380814 423.568663,140.114047 C414.158159,185.792881 391.493186,241.09823 359.75055,296.141524 C326.403709,353.966202 289.688908,401.939131 254.871359,432.373421 C233.074661,451.426801 211.231743,464.94519 191.981685,471.743771 C174.683751,477.852916 160.906202,478.028247 152.578512,473.225952 C134.857617,463.00605 127.490195,423.551181 137.539211,370.626843 C146.790198,321.90465 170.169315,262.570888 202.955124,205.719187 L202.955101,205.719226 L202.955101,205.719226 Z M182.164573,193.729484 C148.105045,252.789856 123.746682,314.608844 113.960478,366.149863 C102.210106,428.03459 111.386088,477.174862 140.588804,494.0165 C170.751402,511.410244 221.373849,493.531815 270.666505,450.443102 C307.719612,418.054693 345.978211,368.06458 380.54113,308.131177 C413.480539,251.012619 437.098963,193.380732 447.075026,144.956661 C460.764831,78.5049225 451.814436,24.9697075 421.249513,7.34395232 C391.941155,-9.55735194 344.010262,8.06482797 295.602156,50.1921552 C256.127453,84.5457082 215.807894,135.391331 182.164595,193.729445 L182.164573,193.729484 L182.164573,193.729484 Z'
            id='Shape'
          />
          <path
            d='M202.891806,296.727271 C170.417725,240.632353 147.477422,182.765871 137.971234,134.18023 C127.413338,80.2210032 134.425634,39.5183572 152.070566,29.3037893 C170.865981,18.4225597 212.426661,33.9365595 256.230989,72.831633 C291.106164,103.796828 327.700786,151.052251 359.536288,206.043645 C392.979761,263.812145 416.206491,319.579308 425.18593,364.943523 C430.80755,393.342982 431.610734,419.018224 427.88697,439.091003 C424.540837,457.128179 417.811981,469.151883 409.492411,473.968144 C391.787831,484.217558 353.92549,470.896152 313.092749,435.758576 C275.502305,403.411195 235.773076,353.523859 202.891728,296.727136 L202.891806,296.727271 L202.891806,296.727271 Z M182.121344,308.751743 C216.280031,367.754843 257.67321,419.731573 297.438339,453.950317 C345.184437,495.037007 392.341468,511.628637 421.516705,494.738709 C451.649825,477.294419 461.442346,424.508279 448.729126,360.283275 C439.173131,312.006291 414.969783,253.894277 380.306764,194.019199 C347.271015,136.954545 309.136882,87.7111182 272.165876,54.8850624 C221.432707,9.8376807 170.581294,-9.14441545 140.046236,8.53324571 C110.765789,25.4835588 102.095339,75.8109015 114.417851,138.788717 C124.466071,190.144654 148.380875,250.469297 182.121266,308.751608 L182.121344,308.751743 L182.121344,308.751743 Z'
            id='Shape'
          />
        </g>
      </g>
    </g>
    <polygon
      fill='#F7F7FF'
      id='Line'
      points='75.5 20 676.5 20 686.5 20 686.5 -1.25055521e-12 676.5 -1.25055521e-12 75.5 -1.25055521e-12 65.5 -1.25055521e-12 65.5 20'
    />
  </g></g>
}