import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody,  } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { isOpenModalSelectStore } from "../redux";
import { getIsOpen } from "../redux";



export const ModalWindow = ({children}) =>{
  const dispatch = useDispatch();
  const {modalSelectStore} = useSelector(getIsOpen);



    return(<>
       <Modal  isOpen={modalSelectStore} onClose={()=>dispatch(isOpenModalSelectStore())}>
        <ModalOverlay />
        <ModalContent width="100%">
          <ModalHeader>Модальное окно</ModalHeader>
          <ModalBody>
          {children}
          </ModalBody>
        </ModalContent>
      </Modal></>)
}