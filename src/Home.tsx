import React from 'react'

import {
  BodyText,
  CardBodyWrap,
  CardHeading,
  CardHeadingWrap,
  CardImageWrap,
  CardMainWrap,
  CardSubHeading,
  CardWrap,
  elRowGap3,
  FlexContainer,
  Loader,
  PageContainer,
  PersistantNotification,
  Subtitle,
  Title,
} from '@reapit/elements'

import { useGetListings } from './getListings'

export default function Home() {
  const { data: listings, status, isLoading } = useGetListings();
  return (
    <PageContainer>
      <Title>PWA Agency</Title>
      <Subtitle>Property Listings</Subtitle>
      {isLoading ? (
        <Loader label="Loading..." />
      ) : status === "error" ? (
        <PersistantNotification>
          Error get listings, please try again later.
        </PersistantNotification>
      ) : (
        <FlexContainer isFlexColumn className={elRowGap3}>
          {listings.map((listing: any) => {
            return (
              <CardWrap key={listing.id}>
                <CardMainWrap>
                  <CardImageWrap>
                    <img src={listing.image} alt={listing.type} />
                  </CardImageWrap>
                  <CardHeadingWrap>
                    <CardHeading>PWA Agency</CardHeading>
                    <CardSubHeading>{listing.price}</CardSubHeading>
                  </CardHeadingWrap>
                </CardMainWrap>
                <CardBodyWrap>
                  <BodyText>{listing.address.streetAddress}</BodyText>
                  <BodyText>
                    {listing.address.region} - {listing.address.country}
                  </BodyText>
                </CardBodyWrap>
              </CardWrap>
            );
          })}
        </FlexContainer>
      )}
    </PageContainer>
  );
}
