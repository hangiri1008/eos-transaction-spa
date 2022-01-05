export declare namespace ITransferModal {
    interface TransferModalProps {
        isOpen: boolean;
        onClose: () => void;
        type: number;
        header: string;
        children: React.ReactNode;
        footer: string;
        handleFooterClick: () => void;
    }
    interface headerStyleProps {
        justifyContent: string;
        padding: string;
        fontSize: string;
        lineHeight: string;
        color: string;
    }
    interface bodyStyleProps {
        padding: string;
    }

    interface footerStyleProps {
        margin: string;
    } 
}