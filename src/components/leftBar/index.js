import React from 'react';
import styles from './index.less'



export default class LeftBarPage extends React.Component {
    render() {
        return (
            <>
                <div className={styles.leftBar}>
                    <button>退出</button>
                </div>
            </>
        )
    }
}