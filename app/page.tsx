'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Load Tally embed script
    const loadTallyScript = () => {
      const d = document
      const w = 'https://tally.so/widgets/embed.js'
      
      const v = function () {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds()
        } else {
          d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
            const iframe = e as HTMLIFrameElement
            iframe.src = iframe.dataset.tallySrc || ''
          })
        }
      }
      
      if (typeof (window as any).Tally !== 'undefined') {
        v()
      } else if (d.querySelector(`script[src="${w}"]`) === null) {
        const s = d.createElement('script')
        s.src = w
        s.onload = v
        s.onerror = v
        d.body.appendChild(s)
      }
    }
    
    loadTallyScript()
  }, [])

  return (
    <main className="form-container">
      <div className="tally-form-wrapper">
        <iframe
          data-tally-src="https://tally.so/embed/q4Ljd2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1858"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Get Sponsored with Boot Ads"
        />
      </div>
    </main>
  )
}

