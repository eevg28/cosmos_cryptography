import React from 'react';
import { Link } from 'react-router-dom'
import { withPusk } from './../shared/containers/containerPusk'

import styles from './pusk.module.scss'

const Pusk = (props) => {
    return <React.Fragment>
        <div className={styles.puskBlock}>
            <span className={styles.title}><b>Windows</b> Millennium CSMS.. edt.</span>

            <Link to="/panel" className={styles.linkPanel}></Link>
        </div>
    </React.Fragment>
}

export default withPusk(Pusk);