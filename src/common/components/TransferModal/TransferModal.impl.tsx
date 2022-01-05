import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ITransferModal } from "./TransferModal.interface";

const TransferModal: React.FC<ITransferModal.TransferModalProps> = ({
  isOpen,
  onClose,
  type,
  header,
  children,
  footer,
  handleFooterClick,
}) => {
  const [headerStyle, setHeaderStyle] = useState<ITransferModal.headerStyleProps | undefined>();
  const [bodyStyle, setBodyStyle] = useState<ITransferModal.bodyStyleProps | undefined>();
  const [footerStyle, setFooterStyle] = useState<ITransferModal.footerStyleProps | undefined>();

  useEffect(() => {
    //토큰 보내기
    if (type === 1) {
      setHeaderStyle({
        justifyContent: "flex-start",
        padding: "10px 20px 0",
        fontSize: "20px",
        lineHeight: "40px",
        color: "black",
        });
      setBodyStyle({
        padding: "10px 0px",
      });
      setFooterStyle({
        margin: "0 8px 16px",
      });
    }
    // //승인 대기중
    // else if (type === 2) {

    // }
    //승인 완료
    else if (type === 3) {
      setHeaderStyle({
        justifyContent: "flex-start",
        padding: "40px 20px 0",
        fontSize: "16px",
        lineHeight: "26px",
        color: "var(--gray900)",
      });
      setBodyStyle({
        padding: "8px 20px",
      });
      setFooterStyle({
        margin: "0 20px 20px",
      });
    }
    // //승인 거절
    // else if (type === 4) {

    // }
    // //거래 취소
    // else if (type === 5) {

    // }
  }, [type])
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay bg="rgba(0,0,0, 0.5)" />
        <ModalContent width="100vw">
          <ModalHeader
            display="flex"
            justifyContent={ headerStyle && headerStyle.justifyContent }
            p={ headerStyle && headerStyle.padding }
            fontSize={ headerStyle && headerStyle.fontSize }
            lineHeight={ headerStyle && headerStyle.lineHeight }
            color={ headerStyle && headerStyle.color }
          >
            {header}
          </ModalHeader>
          <ModalBody
            d="flex"
            flexDirection="column"
            alignItems="center"
            p={ bodyStyle && bodyStyle.padding }
            fontSize="14px"
            lineHeight="22px"
            color="var(--gray900)"
            textAlign="center"
          >
            {children}
          </ModalBody>
          <ModalFooter
            d="flex"
            justifyContent="center"
            height="50px"
            m= { footerStyle && footerStyle.margin }
            borderRadius="2px"
            bg="var(--blue500)"
            color="white"
            fontSize="16px"
            lineHeight="14px"
            cursor="pointer"
            onClick={handleFooterClick}
          >
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default TransferModal;

