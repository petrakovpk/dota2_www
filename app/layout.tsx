/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
import { YMInitializer } from 'react-yandex-metrika';
import { Html, Head, Main, NextScript } from 'next/document'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import './styles/globals.scss'
import './components/TeamsSelector/teamsSelector.css'

import { TeamsSelector } from './components/TeamsSelector/TeamsSelector'
import { MainPage } from './components/MainPage/MainPage';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="ru">
        <body>
          <section>
            <MainPage />
          </section>
        </body>
      </html>
    </Providers>
  )
}
