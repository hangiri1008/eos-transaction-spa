import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import WalletListView from '../view/WalletList.view'
import TransferModal from '../../../common/components/TransferModal'
import styled from '@emotion/styled';

const WalletList = () => {
    const disclosure1 = useDisclosure();
    const disclosure2 = useDisclosure();

    const [error, setError] = useState("");
    const [input, setInput] = useState("");
    
    const handleFooterClick = () => {
    if (!input) {
        setError("입력해주세요");
        return;
    }
    setInput("");
    setError("");
    disclosure1.onClose();
    disclosure2.onOpen();
    };

    return (
        <>
            <TransferModal 
                isOpen={disclosure1.isOpen} 
                onClose={disclosure1.onClose}
                type={1}
                header="토큰 보내기"
                footer="보내기"
                handleFooterClick={handleFooterClick}
            >
                {/* <NormalInput error={error} input={input} setInput={setInput} placeholder="010 1234 5678" /> */}
                    <div style={{ marginTop: "38px" }}></div>
                <Caution>
                    <span>수수료: </span> 0.000000LED <br />
                    <span>보낸 후 토큰 수량: </span> 0.000000LED <br />
                </Caution>
            </TransferModal>
            <WalletListView 
                sendToken={disclosure1.onOpen}
            >
            </WalletListView>
        </>
    )
}

// const NormalInput = styled.({})

const PageRoot = styled.div`
    padding: 20px 20px 34px 20px;
`;

const Caution = styled.div`
    font-size: 11px;
    line-height: 18px;
    color: var(--gray700);

    .privacy {
    font-weight: bold;
    text-decoration: underline;
    text-underline-position: under;
    }
`;

export default WalletList;