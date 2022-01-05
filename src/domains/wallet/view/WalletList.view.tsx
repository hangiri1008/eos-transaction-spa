import { IWalletListView } from "./interface/WalletList-view.interface";
import WalletCard from '../../../common/components/WalletCard/WalletCard.impl'

const WalletListView: React.FC<IWalletListView.IProps> = ({
    sendToken,
}) => {
    return (
        <>
            <div style={{padding: "5px 15px", height:"50%", width:"100%"}}>
                <WalletCard 
                logoImgSrc="/led_logo.png"
                blockChainTitle="레지스"
                coinTitle="LED"
                coinQuantity="789.001122"
                holdingValue="456,789.00"
                sendButton={async () => {console.log('test');await sendToken()}}
                // collectButton={async => }
                />
            </div>
            <div style={{padding: "5px 15px", height:"50%", width:"100%"}}>
                <WalletCard 
                logoImgSrc="/eth_logo.png"
                blockChainTitle="이더리움"
                coinTitle="ETH"
                coinQuantity="0.000011"
                holdingValue="150.23"
                sendButton={async () => {await sendToken()}}
                // collectButton={async => }
                />
            </div>
        </>
    )
}

export default WalletListView