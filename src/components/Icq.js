import React from 'react';
import { Link } from 'react-router-dom'

import { withIcq } from "./../shared/containers/containerIcq"

import { icqService } from "./../shared/services/requestService"

import styles from './icq.module.scss'

const author = "cosmoner"
const email = "11@ev0l.xyz"
const icqTitle = "11@ev0l.xyz"

class Icq extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icqvalue: "",
        }
    }
    componentWillMount() {
        icqService.request()
            .then((result) => {
                this.setState({
                    icqvalue: result.data.value,
                })
            })
    }

    render() {
        const { icqMessages, onCloseIcq } = this.props
        const { icqvalue } = this.state

        setTimeout(() => {
            document.getElementById("textarea").focus()
        }, 1)

        return <React.Fragment>
            <Link to="/" className={styles.back} />
            <div className={styles.icqBlock}>
                <Link to="/" className={styles.closeButton} />

                <span className={styles.icqTitle}>{`${author} - Message Session`}</span>
                {/* <a href={`mailto:${email}`} className={styles.email}>{email}</a> */}
                <span className={styles.nick}>{author}</span>

                <ul className={styles.messages}>
                    <li className={styles.messageItem}>{icqvalue}</li>

                    {/* {
                    icqMessages.map((message, index) => {
                        return (
                            <li className={styles.messageItem} key={index}>
                                {message.text}
                            </li>
                        )
                    })
                } */}
                </ul>
                <textarea className={styles.textarea} id="textarea"></textarea>
                <span className={styles.cursor}></span>
            </div>
        </React.Fragment>
    }
}

export default withIcq(Icq);