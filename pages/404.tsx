import { MainLayout } from '../components/MainLayout'
import classes from '../styles/404.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className={classes.wrap}>
        <div>
          <h1 className={classes.err}>404</h1>
          <div className={classes.right}>
            <h2 className={classes.h2err}>This page could not be found</h2>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
