/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import './styles/globals.scss';

import { TeamsSelector } from './components/TeamsSelector/TeamsSelector'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section>
            <TeamsSelector/>
          </section>
        </body>
      </html>
    </Providers>
  )
}
