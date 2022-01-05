export interface WalletCardProps {
    logoImgSrc: string
    blockChainTitle: string
    coinTitle: string
    coinQuantity: string
    holdingValue: string
    sendButton: React.MouseEventHandler<HTMLButtonElement>
    // collectButton: React.MouseEventHandler<HTMLButtonElement>
}