import {connect} from 'react-redux';
import React from 'react'
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const modalLookup = {
    TestModal,
    LoginModal,
    RegisterModal,
}

const mapState = (state) => ({
    currentModal: state.modals
})

const ModalManager = ({currentModal}) => {
    let rendereddModal;
    if (currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];
        rendereddModal = <ModalComponent {...modalProps}/>
    }
    return (
       <span>{rendereddModal}</span>
    )
}

export default connect(mapState)(ModalManager)
