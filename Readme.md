# TrustPoint
Trustpoint is a decentralized application that enables organizations and celebrities to come together and create deals. The Trustpoint dApp allows organizations to view registered celebrities and negotiate deals with them. After creating a deal, a new ERC 1155 NFT is created with the provided metadata, and the organization can mint this NFT to anyone.

![Firefly Trustpoint is a decentralized software that enables organizations and celebrities to come to](https://github.com/ayushete02/gaming-studios/assets/75811912/633e1101-9c58-4f9b-9272-e74c2ace3fd3)

# The problem TrustPoint solves
Trustpoint is a project that aims to decentralize and streamline the process of creating deals between gaming studios and celebrities by using smart contracts. Currently, the system for creating deals between gaming studios and celebrities is centralized (on paper), which can be costly, inefficient, and slow. Trustpoint's approach seeks to eliminate intermediaries and increase efficiency by using smart contracts to automate the process.

Trustpoint's approach can benefit both gaming studios and celebrities. Gaming studios can save money on transaction fees and legal fees by using smart contracts. The process can also be completed more quickly, allowing them to bring their games to market faster. Celebrities can benefit by receiving faster and more secure payments and having more control over their image and likeness.

Overall, Trustpoint's approach has the potential to revolutionize the way that deals are made between gaming studios and celebrities. By using smart contracts to automate the process, Trustpoint can increase efficiency, reduce costs, and increase transparency, while providing a secure and reliable way for gaming studios and celebrities to work together.

# Challenges we ran into
NFT event indexing issue: Every organization has a different NFT contract to ensure that NFTs do not appear under one single collection on marketplaces like OpenSea. To address this issue, we created a structure where one NFT contract is associated with only one organization. However, this created a lot of NFT contracts, and we needed a lot of event listeners to index them. To address this issue, we created a smart contract called Logger that logs all events of all these different contracts under one single contract.

#Future Prospects:
ID Verification: Trustpoint aims to add some Zero knowledge way to confirm that the celebrity is who they claim to be.
Multiple NFT support: As of now, Trustpoint only supports one NFT per deal, which means a game company can only have one NFT per celebrity. We will soon be adding support for multiple NFT deals between two parties.

# Flow 

## Registration
To start using TrustPoint, organizations and celebrities need to register on the dApp by providing their personal and contact information. This will include their name, email address, and any relevant social media accounts.

## Chat and Negotiate
Once registered, organizations can view all the registered celebrities and start a chat with them. They can then negotiate the deal and create a deal object on the deal controller smart contract. The organization will be required to provide NFT metadata, one-off fees for the deal, and royalty information for both parties.

## Deal Creation
After the negotiations are complete, the organization can choose to create a deal by submitting the required inputs to the deal controller smart contract. The deal will be created from the organization's side and will include all the relevant information regarding the proposed collaboration.

## Deal Cancellation
Before the celebrity accepts the deal, the organization has the option to cancel it. If the celebrity accepts the deal first, a new ERC 1155 NFT will be created with the provided metadata.

## NFT Minting
Once the NFT is created, the organization can mint it to anyone. This will enable them to integrate the celebrity's likeness or image into their games.

> We hope this documentation helps you understand the TrustPoint platform's process flow. If you have any further questions or need additional information, please do not hesitate to contact us.

