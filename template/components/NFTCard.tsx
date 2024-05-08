import { MediaRenderer, useActiveClaimCondition, useAddress, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { NFT_CHECKOUT_LINKS, NFT_CONTRACT_ADDRESS } from "../constants/constants";
import styles from "../styles/Home.module.css";
import Link from "next/link";

type NFTCardProps = {
    nft: NFT;
};

const NFTCard = ({ nft }: NFTCardProps) => {
    const address = useAddress();
    const { contract } = useContract(NFT_CONTRACT_ADDRESS);
    const { data: activeClaimCondition, isLoading: isLoadingActiveClaimCondition } = useActiveClaimCondition(contract, nft.metadata.id);

    return (
        <div className={styles.nftCard}>
            <div className={styles.nftImageContainer}>
                <MediaRenderer
                    src={nft.metadata.image}
                />
            </div>
            <div className={styles.nftCardContent}>
                {isLoadingActiveClaimCondition ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>Price: {activeClaimCondition?.currencyMetadata.displayValue} {activeClaimCondition?.currencyMetadata.symbol}</p>
                        <div className={styles.nftCardDetails}>
                            <p className={styles.nftCardDetail}>Max limit: {activeClaimCondition?.maxClaimablePerWallet}</p>
                            <p className={styles.nftCardDetail}>Supply: {activeClaimCondition?.availableSupply}/{activeClaimCondition?.maxClaimableSupply.substring(0, 4)}</p>
                        </div>
                    </>
                )}
                {/* <Link
                    href="{NFT_CHECKOUT_LINKS[parseInt(nft.metadata.id)]}"
                >
                    <button
                        disabled={!address}
                    >Buy Now</button>
                </Link> */}
            </div>
        </div>
    );
};

export default NFTCard;
